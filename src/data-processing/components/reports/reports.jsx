import {React} from 'react';
import {Chart} from 'chart.js';

export default class Report extends React.Component {
    render() {
        console.log('Reports');
        var ctx = document.getElementById('myDoughnutChart');
        var average = 4; //This needs to be pulled from store
        var leftover = 5 - average; //this is the rest of the pie chart, 5-average
        var data = {
            labels: [
                'Score',
                ''
            ],
            datasets: [
                {
                    data: [average, leftover],
                    backgroundColor: [
                        '#FF6384',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#FFCE56'
                    ]
                }]
        };
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            label: 'Question Average Score'
        });
        return (
            <div>
                <div className="donutChart"> {myDoughnutChart} </div>
            </div>
        );
    }
}
