// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

var delays = 80,
  durations = 500;

// ##############################
// // // Coloured Line Chart
// #############################

const colouredLineChart = {
  data: {
    labels: [
      "'06",
      "'07",
      "'08",
      "'09",
      "'10",
      "'11",
      "'12",
      "'13",
      "'14",
      "'15"
    ],
    series: [[287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 10
    }),
    axisY: {
      showGrid: true,
      offset: 40
    },
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    showPoint: true,
    height: "300px"
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

module.exports = {
  colouredLineChart,
};
