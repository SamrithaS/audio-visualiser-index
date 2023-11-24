function main() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let audio1 = new Audio();
    let analyser;
    let JSONValue;
    let audioSource;
    let flag = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    audio1.src = "https://github.com/SamrithaS/audio-visualiser-index/blob/main/audio1.mp3";

    query(audio1).then((response) => {
        JSONValue = response;
        JSONValue.forEach((element) => {
            let newLine = document.createElement("p");
            newLine.classList.add("audio-lines");
            newLine.innerHTML = element.part;
            document.getElementById("audio-text").append(newLine);
        });
    });

    showOrHideAudioText(audio1);

    document.getElementById("audio-svg").addEventListener("click", () => {
        const audioContext = new AudioContext();
        if (!audio1.paused) {
            audio1.pause();
        } else audio1.play();

        showOrHideAudioText(audio1);
        audioTimeUpdateActions(audio1, JSONValue);
        audioLineClickActions(audio1, JSONValue);

        if (flag === 0) {
            audioSource = audioContext.createMediaElementSource(audio1);
            analyser = audioContext.createAnalyser();
            audioSource.connect(analyser);
            analyser.connect(audioContext.destination);
            analyser.fftSize = 256;
            flag = 1;
        }
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const barWidth = canvas.width / bufferLength;
        let barHeight;
        let x;

        function animate() {
            x = 0;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            analyser.getByteFrequencyData(dataArray);
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] * 2;
                ctx.fillStyle = "white";

                ctx.fillRect(
                    i * barWidth * 10,
                    (canvas.height - barHeight) / 0.6,
                    barWidth * 60,
                    barHeight,
                    "white"
                );
                x += barWidth;
            }

            requestAnimationFrame(animate);
        }
        animate();
    });
}
main();

async function query() {
    let res;
    const fileName = await axios.get(
        `https://audio-visualizer-three.vercel.app/get`
    );
    res = fileName.data;
    return res;
}

function showOrHideAudioText(audio) {
    if (!audio.paused) {
        document.getElementById("audio-text").classList.add("show");
    } else {
        document.getElementById("audio-text").classList.remove("show");
    }
}

function audioTimeUpdateActions(audio, JSONValue) {
    audio.addEventListener("timeupdate", () => {
        let currentTime = audio.currentTime * 1000;

        JSONValue.forEach((element, index) => {
            if (currentTime >= element.start && currentTime <= element.end) {
                document
                    .getElementsByClassName("audio-lines")
                [index].classList.add("selected-state");
                document
                    .getElementsByClassName("audio-lines")
                [index].scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                });
            } else {
                document
                    .getElementsByClassName("audio-lines")
                [index].classList.remove("selected-state");
            }
        });
    });
}

function audioLineClickActions(audio, JSONValue) {
    for (
        let i = 0;
        i < document.getElementsByClassName("audio-lines").length;
        i++
    ) {
        document
            .getElementsByClassName("audio-lines")
        [i].addEventListener("click", () => {
            audio.currentTime = JSONValue[i].start / 1000;
            audio.play();
        });
    }
}
