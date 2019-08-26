// Creates the graphics for the carbon footprint of a chemical plant

function carbonfootprint() {

    var layout = {
        title: {
            text:'Carbon Footprint of a Chemical Plant',
            font: {
            size: 20    
            }
        },

        annotations: [{
            font: {
            size: 20
            },
            showarrow: false,
            text: 'CO2',
            x: 0.5,
            y: 0.5
            }],
      
        showlegend: true,
        paper_bgcolor: 'rgba(0,0,0,0)'
    };

    var data = [{
        values: [21, 13, 28, 36, 2],
        labels: ['CO2 Emissions', 'Electricity', '3rd Party Steam', 'Raw Materials', 'Other'],
        domain: {column: 0},
        name: 'CO2 Emissions',
        hoverinfo: 'label+percent',
        hole: .4,
        type: 'pie'
      }];   
      
    Plotly.newPlot('pie', data, layout);
      
}

function footprintreduction() {

    var gd = document.getElementById('reduction');
    var data = [
        {
            name: "29.3%",
            type: "waterfall",
            orientation: "v",
            measure: [
                "relative",
                "relative",
                "relative",
                "relative",
                "relative",
                "total"
            ],
            x: [
                "Yields and Utilization",
                "Energy Savings",
                "Steam Production",
                "Altern. Raw Mat.",
                "Larger Plant",
                "Total"
            ],
            textposition: "outside",
            text: [
                "-2%",
                "-3%",
                "-8%",
                "-12.5%",
                "-3.8%"
            ],          
            y: [
                -2,
                -3,
                -8,
                -12.5,
                -3.8,
                0
            ],
            connector: {
              line: {
                color: "rgb(63, 63, 63)"
              }
            },
        }
    ];
    layout = {
        title: {
            text: "Carbon Footprint Reduction",
            font: {
                size: 20
            }
        },
        xaxis: {
            type: "category"
        },
        yaxis: {
            type: "linear"
        },
        autosize: true,
        showlegend: false,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: "#B0E0E6"
    };    

    Plotly.newPlot(gd, data, layout);
}

// Initialize the graphic

function init() {
    carbonfootprint();
    footprintreduction();
    }

init();
