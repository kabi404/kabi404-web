module.exports = {
  series: [100, 100, 70, 50],
  chartOptions: {
    plotOptions: {
      radialBar: {
        offsetY: -10,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 0,
          size: '30%',
          background: 'transparent',
          image: undefined
        },
        dataLabels: {
          name: {
            show: true
          },
          value: {
            show: true
          }
        }
      }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Español', 'Euskera', 'Inglés', 'Japonés'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'bottom',
      offsetX: 0,
      offsetY: 10,
      labels: {
        useSeriesColors: true
      },
      markers: {
        size: 0
      },
      formatter: function (seriesName, opts) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex]
      },
      itemMargin: {
        horizontal: 1
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: true
        }
      }
    }]
  }
}
