$(document).ready(function (e) {

    /**
     * Theme from Highchart
     *
     * @type {{plotOptions: {candlestick: {lineColor: string}, series: {shadow: boolean}, map: {shadow: boolean}}, scrollbar: {trackBorderColor: string}, xAxis: {labels: {style: {color: string}}}, legend: {itemStyle: {fontSize: string, fontWeight: string}}, rangeSelector: {buttonTheme: {"stroke-width": number, fill: string, stroke: string, states: {select: {fill: string}}}}, tooltip: {borderWidth: number}, navigator: {xAxis: {gridLineColor: string}}, title: {style: {color: string, fontSize: string, fontWeight: string}}, colors: string[], yAxis: {labels: {style: {color: string}}}, background2: string, subtitle: {style: {color: string}}, chart: {backgroundColor: null, style: {fontFamily: string}}}}
     */
    Highcharts.theme = {
        colors: ['#55BF3B', '#8085e9', '#DF5353', '#edc71b', '#30c176', '#eeaaee', '#ed1b2f', '#f45b5b', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#7798BF', '#9038bf'],
        chart: {
            backgroundColor: null,
            style: {
                fontFamily: 'Signika, serif'
            }
        },
        title: {
            style: {
                color: 'black',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        },
        subtitle: {
            style: {
                color: 'black'
            }
        },
        tooltip: {
            borderWidth: 0
        },
        legend: {
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '13px'
            }
        },
        xAxis: {
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        },
        yAxis: {
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        },
        plotOptions: {
            series: {
                shadow: true
            },
            candlestick: {
                lineColor: '#404048'
            },
            map: {
                shadow: false
            }
        },

        // Highstock specific
        navigator: {
            xAxis: {
                gridLineColor: '#D0D0D8'
            }
        },
        rangeSelector: {
            buttonTheme: {
                fill: 'white',
                stroke: '#C0C0C8',
                'stroke-width': 1,
                states: {
                    select: {
                        fill: '#D0D0D8'
                    }
                }
            }
        },
        scrollbar: {
            trackBorderColor: '#C0C0C8'
        },

        // General
        background2: '#E0E0E8'

    };

    Highcharts.setOptions(Highcharts.theme);

// ############################################################

    /**
     * Gráfico de listas criadas por mês
     *
     */
    Highcharts.chart('createdLanguagesContainer', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Jan',
                'Fev',
                'Mar',
                'Abr',
                'Mai',
                'Jun',
                'Jul',
                'Ago',
                'Set',
                'Out',
                'Nov',
                'Dez'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">Linguagens criadas(QTD):  </td>' +
                '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Linguagens criadas',
            data: graficDataCreatedLanguage,
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.0f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });









    $('#ajaxLoader').css('display', 'none');
});
