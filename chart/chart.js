// let myChart = document.getElementById("myChart").getContext("2d");

// let massPopChart = new myChart(myChart, {
//     type: "bar",
//     data: {
//         labels: ["Washington DC", "Maryland", "Virginia"],
//         datasets: [{
//             label: "Population",
//             data: [
//                 100000,
//                 200000,
//                 300000
//             ]
//         }]
//     },
//     options: {}
// });


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Washington DC", "Maryland", "New York", "Florida", "California", "Texas"],
        datasets: [{
            label: '# of People',
            data: [702455, 6042718, 19542209, 21299325, 39557045, 28701845],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});