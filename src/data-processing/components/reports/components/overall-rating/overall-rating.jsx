import React from 'react';
import NVD3Chart from 'react-nvd3';

export default class OverallRating extends React.Component {
    render() {
        var average = 4; //This needs to be pulled from store, less than or equal to 5
        var leftover = 5 - average; //this is the rest of the pie chart, 5-average
        var averagePieData = [
            {
                'label': 'Average: ',
                'value': average
            },
            {
                'label': '',
                'value': leftover
            }
        ];
        var averageBarData = [
            {
                'label': 'Q1',
                'value': 1
            },
            {
                'label': 'Q2',
                'value': 2
            },
            {
                'label': 'Q3',
                'value': 3
            },
            {
                'label': 'Q4',
                'value': 4
            },
            {
                'label': 'Q5',
                'value': 5
            },
            {
                'label': 'Q6',
                'value': 2.5
            },
            {
                'label': 'Q7',
                'value': 4.4
            }
        ];
        return (
            <div>
                <div> Charts and Reports </div>
                <div>
                    <NVD3Chart id="donutChart" type="pieChart" datum={averagePieData} x="label" y="value"/>
                </div>
                <div>
                    <NVD3Chart id="barChartAverages" type="discreteBarChart" datum={averageBarData} x="label" y="value"/>
                </div>
            </div>
        );
    }
}
