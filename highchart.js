// import BottomSheet from "js-bottomsheet/packages/js-bottomsheet/src/bottomSheet";
import "./styles.css";
import Highcharts from "highcharts";
// import BottomSheet from "js-bottomsheet";

// eslint-disable-next-line import/no-unresolved
// import "js-bottomsheet/bottomsheet.css";

// for (let i = 1000; i <= 21182; i++) {
//   setTimeout(() => {
//     document.getElementById("number").innerHTML = i;
//   }, 0.15 * i);
// }
let currentValue = +document.getElementById("number").innerHTML;
let i = 0;
Highcharts.chart("highchart", {
    title: {
        text: "",
    },
    animation: Highcharts.svg,
    tooltip: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
    credits: {
        enabled: false,
    },
    chart: {
        backgroundColor: "transparent",
        type: "line",
        events: {
            load: function (chart) {
                // let points = [
                //     { x: 5, y: 19700 },
                //     { x: 6, y: 19600 },
                //     { x: 7, y: 19800 },
                //     { x: 8, y: 21000 },
                //     { x: 8.6, y: 21182 },
                // ];

                // if (i < points.length) {
                //     setInterval(() => {
                //         if (i < points.length) {
                //             this.series[0].addPoint([points[i]?.x, points[i]?.y]);
                //             this.series[1].data[0].update({
                //                 x: points[i]?.x,
                //                 y: points[i]?.y,
                //             });
                //             document.getElementById("number").innerHTML = points[i]?.y;

                //             i++;
                //         }

                //     }, 500);

                // }

            },
        },
    },
    legend: {
        enabled: false,
    },

    xAxis: [
        {
            tickPixelInterval: 50,
            endOnTick: true,
            startOnTick: true,
            // endOnTick: false,
            min: 5,
            max: 9,
            gridLineWidth: 0,
            visible: false,
            accessibility: {
                enabled: false,
            },
            labels: {
                enabled: false,
            },
        },
    ],
    yAxis: [
        {
            endOnTick: false,
            min: 19600,
            max: 22050,
            visible: false,
            accessibility: {
                enabled: false,
            },
            labels: {
                enabled: false,
            },
            gridLineWidth: 1,
        },
    ],
    plotOptions: {
        series: {
            enableMouseTracking: false,
            states: {
                hover: {
                    enabled: false,
                },
            },
            lineWidth: 30,
            label: {
                connectorAllowed: false,
            },
            marker: {
                states: {
                    hover: {
                        enabled: false,
                    },
                },
            },
        },
    },
    tooltip: {
        enabled: false,
    },
    series: [
        {
            states: {
                hover: {
                    enabled: false,
                },
            },
            animation: {
                easing: "linear",
                duration: 1000,
            },
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 1,
                    y1: 0,
                    y2: 0,
                },
                stops: [
                    [0, "#ACD601"],
                    [0.4, "#01D661"],
                    [1, "#01D6BD"],
                ],
            },
            colorAxis: {
                marker: {
                    enabled: false,
                    animation: {
                        duration: 1000,
                    },
                },
            },
            data: [{ x: 5, y: 2 }],
        },
        {
            // animation: {
            //   easing: "linear",
            //   duration: 100,
            // },
            colorAxis: {
                marker: {
                    animation: {
                        duration: 0,
                    },
                },
            },
            data: [
                {
                    x: 5,
                    y: 2,
                    marker: { symbol: "circle", radius: 16, fillColor: "white" },
                },
            ],
        },
    ],
});



Highcharts.chart('bar-highchart', {
    chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 650
    },
    legend: {
        y: -70,
        x: 13,
        floating: true,
        squareSymbol: false,
        symbolHeight: 0,
        symbolWidth: 0,
        // layout: 'vertical',
        itemWidth: 110,
        align: 'center',
        verticalAlign: 'bottom',
        itemMarginTop: 10,
        itemMarginBottom: 10,
        itemStyle: {
            color: 'white',
            paddingLeft: 150,
            fontSize: 13,
            fontFamily: 'Approach',
            fontWeight: 700
        }
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
        }
    },
    yAxis: {
        min: 0,
        max: 3,

    },
    tooltip: {
        enabled: false
    },
    plotOptions: {

        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            shadow: false,
            grouping: true,
            groupPadding: 0.3,
            dataLabels: {
                enabled: true,
                inside: true,
                useHTML: true,
                align: 'left',
                color: 'white',
                style: {
                    fontWeight: 'bold'
                },
                verticalAlign: 'top',
                formatter: function () {
                    if (this.series.name)
                        return ('<p style="color:white; fontSize:35px; paddingLeft: 16px; paddingTop:11px; fontFamily: Approach; fontStyle: normal; fontWeight: 700;line-height: 100%">' + this.y + '%</p>')
                    else return '';
                }
            }
        },
        series: {
            pointWidth: 145,
            enableMouseTracking: false,
            states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    series: [
        {
            shadow: false,
            color: "#000",
            name: 'EQUITY',
            data: [0]
        },
        {
            shadow: false,
            color: '#5181FB',
            name: 'EQUITY MF',
            data: [0]
        }
    ]
});




Highcharts.chart("highchart-low", {
    title: {
        text: "",
    },
    animation: Highcharts.svg,
    tooltip: {
        enabled: false,
    },
    legend: {
        enabled: false,
    },
    exporting: {
        enabled: false,
    },
    credits: {
        enabled: false,
    },
    chart: {
        backgroundColor: "transparent",
        type: "line",
        events: {
            load: function (chart) {


            },
        },
    },
    legend: {
        enabled: false,
    },

    xAxis: [
        {
            tickPixelInterval: 50,
            endOnTick: true,
            startOnTick: true,
            // endOnTick: false,
            min: 5,
            max: 13,
            gridLineWidth: 0,
            visible: false,
            accessibility: {
                enabled: false,
            },
            labels: {
                enabled: false,
            },
        },
    ],
    yAxis: [
        {
            endOnTick: false,
            min: 19000,
            max: 21050,
            visible: false,
            accessibility: {
                enabled: false,
            },
            labels: {
                enabled: false,
            },
            gridLineWidth: 1,
        },
    ],
    plotOptions: {
        series: {
            enableMouseTracking: false,
            states: {
                hover: {
                    enabled: false,
                },
            },
            lineWidth: 30,
            label: {
                connectorAllowed: false,
            },
            marker: {
                states: {
                    hover: {
                        enabled: false,
                    },
                },
            },
        },
    },
    tooltip: {
        enabled: false,
    },
    series: [
        {
            states: {
                hover: {
                    enabled: false,
                },
            },
            animation: {
                easing: "linear",
                duration: 1000,
            },
            color: {
                linearGradient: {
                    x1: 0,
                    x2: 1,
                    y1: 0,
                    y2: 0,
                },
                stops: [
                    [0, "#F5F079"],
                    [0.4, "#B0AD56"],
                    [1, "#000000"],
                ],
            },
            colorAxis: {
                marker: {
                    enabled: false,
                    animation: {
                        duration: 1000,
                    },
                },
            },
            data: [{ x: 5, y: 19700 }],
        },
        {
            // animation: {
            //   easing: "linear",
            //   duration: 100,
            // },
            colorAxis: {
                marker: {
                    animation: {
                        duration: 0,
                    },
                },
            },
            data: [
                {
                    x: 5,
                    y: 19700,
                    marker: { symbol: "circle", radius: 16, fillColor: "white" },
                },
            ],
        },
    ],
});





Highcharts.chart('bars-highchart', {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        height: 380
    },
    legend: {
        y: -30,
        x: 40,
        floating: true,
        squareSymbol: false,
        symbolHeight: 0,
        symbolWidth: 0,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'middle',
        itemMarginBottom: 10,
        itemMarginTop: 80,
        itemStyle: {
            color: 'white',
            paddingLeft: 150,
            fontSize: 13,
            fontFamily: 'Approach',
            fontWeight: 700
        }
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
        },

    },
    yAxis: {
        // min: 0,
        // max: 2.3,

    },
    tooltip: {
        enabled: false
    },
    plotOptions: {

        bar: {
            // pointPadding: 0,
            borderWidth: 0,
            shadow: false,
            // grouping: true,
            // borderRadius: 0,
            // groupPadding: 0,
            borderRadius: 0,
            dataLabels: {
                enabled: true,
                inside: true,
                useHTML: true,
                align: 'right',
                color: 'white',
                style: {
                    fontWeight: 'bold'
                },
                verticalAlign: 'middle',
                formatter: function () {
                    if (this.series.name)
                        return ('<p style="color:white; fontSize:35px; fontFamily: Approach; fontStyle: normal; padding-right:60px; fontWeight: 700;line-height: 100%">' + this.y + '%</p>')
                    else return '';
                }
            }
        },
        series: {
            pointWidth: 106,
            enableMouseTracking: false,
            states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    series: []
});


const options = {
    threshold: 0.25, // Trigger when partially visible at top or bottom of viewport
};

const observer = new IntersectionObserver((entries, ind, val) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const chart = Highcharts.charts.find(
                (chart) => chart.renderTo.id === entry.target.id
            );
            if (entry.target.id === 'highchart') {
                let points = [
                    { x: 5, y: 19700 },
                    { x: 6, y: 19600 },
                    { x: 7, y: 19800 },
                    { x: 8, y: 21000 },
                    { x: 8.6, y: 21182 },
                ];

                let j = 0
                if (j < points.length) {
                    setInterval(() => {
                        if (j < points.length) {

                            chart.series[0].addPoint([points[j]?.x, points[j]?.y]);
                            chart.series[1].data[0].update({
                                x: points[j]?.x,
                                y: points[j]?.y,
                            });
                            document.getElementById("number").innerHTML = points[j]?.y;

                            j++;
                        }

                    }, 500);

                }
            }
            else if (entry.target.id === 'bar-highchart') {
                chart.series[0].data[0].update({
                    y: 2.3
                });
                chart.series[1].data[0].update({
                    y: 1.9
                });

            }
            else if (entry.target.id === 'highchart-low') {
                let pointsNew = [
                    { x: 6, y: 19600 },
                    { x: 8, y: 19850 },
                    { x: 9, y: 19520 },
                    { x: 11, y: 19700 },
                    { x: 12, y: 19410 },

                ];
                let k = 0
                if (k < pointsNew.length) {
                    setInterval(() => {
                        if (k < pointsNew.length) {
                            chart.series[0].addPoint([pointsNew[k]?.x, pointsNew[k]?.y]);
                            chart.series[1].data[0].update({
                                x: pointsNew[k]?.x,
                                y: pointsNew[k]?.y,
                            });
                            // document.getElementById("number").innerHTML = points[i]?.y;

                            k++;
                        }

                    }, 500);


                }
            }
            else {
                chart.addSeries({
                    shadow: false,
                    color: "#000",
                    name: 'DEBT MF',
                    data: [7.3]
                });
                chart.addSeries({
                    pointWidth: 117,
                    shadow: false,
                    color: '#3BC618',
                    name: 'BONDS',
                    data: [6.4]
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, options);

let charts = [];
charts.push(document.querySelector("#highchart"));
charts.push(document.querySelector("#bar-highchart"));
charts.push(document.querySelector("#highchart-low"));
charts.push(document.querySelector("#bars-highchart"));

console.log(charts, 'charts')
charts.forEach((chart, index) => {
    observer.observe(chart, index);
});

BottomSheet({
    trigger: 'trigger',
})


for (i = 1; i < 5; i++) {
    BottomSheet({
        trigger: `list-item-${i}`,
    })
}




let elements = [document.getElementById("first-section")]
let parent = document.getElementById("scroll-container");
let oldscrollTop = 0;
let oldScroll = 0;


scrollSnapLogic(elements, parent);

function scrollSnapLogic(elements, parent) {
    if (window.innerWidth < 700) {
        elements.forEach((i) => {
            console.log(i, 'i')
            i.addEventListener("scroll", () => {
                if (
                    i.scrollHeight <= i.scrollTop + i.clientHeight + 10 &&
                    oldscrollTop < i.scrollTop
                ) {
                    parent.style.overflow = "scroll";
                    i.style.overflow = "hidden";
                }

                if (oldscrollTop > i.scrollTop) {
                    if (i.scrollTop < 10) {
                        parent.style.overflow = "scroll";
                        i.style.overflow = "hidden";
                    } else {
                        i.style.overflow = "scroll";
                    }
                }
                oldscrollTop = i.scrollTop;
            });

            parent.addEventListener("scroll", () => {

                if (
                    parent.scrollTop >=
                    i.offsetTop - 100 &&
                    parent.scrollTop <=
                    i.offsetTop + i.clientHeight &&
                    i.scrollTop < 40 &&
                    oldScroll < parent.scrollTop
                ) {
                    i.style.overflow = "scroll";
                    parent.style.overflow = "hidden";
                } else if (
                    oldScroll > parent.scrollTop &&
                    i.getBoundingClientRect().top > -10 &&
                    i.scrollTop > 50
                ) {
                    parent.style.overflow = "hidden";
                    i.style.overflow = "scroll";
                } else {
                }

                oldScroll = parent.scrollTop;
            });


        })


        // function isInViewport(i) {
        //     const rect = i.getBoundingClientRect();
        //     let value = i.scrollTop < 20 ? -50 : 0;

        //     return (
        //         rect.top >= -50 &&
        //         rect.left >= 0 &&
        //         rect.bottom <=
        //         (window.innerHeight || document.documentElement.clientHeight) &&
        //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        //     );
        // }

    }
}