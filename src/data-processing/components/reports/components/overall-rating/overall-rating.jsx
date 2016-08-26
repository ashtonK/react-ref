import React from 'react';
import NVD3Chart from 'react-nvd3';

export default class OverallRating extends React.Component {
    render() {
        var average = 4; //This needs to be pulled from store, less than or equal to 5
        var leftover = 5 - average; //this is the rest of the pie chart, 5-average
        console.log(leftover);
        var averagePieData = [
            {
                'label': 'Average: ',
                'value': average
            },
            {
                'label' : '',
                'value': leftover
            }
        ];
        console.log(averagePieData);
        var averageLineData = [
            {
                'label': 'Q1',
                'value': average
            },
            {
                'label': 'Q2',
                'value': leftover
            }
        ];
        console.log(averageLineData);
        return (
            <div>
                <div> Donut Average Chart </div>
                <div className='averageDonut'>
                    <NVD3Chart id="donutChart" type="pieChart" datum={averagePieData} x="label" y="value" donut="true" showLabels="false"/>
                </div>
                <div> Multi Bar Chart </div>
                <div className='averageQuestions'>
                    <NVD3Chart id="lineChart" type="lineChart" datum={averageLineData} x="label" y="value"></NVD3Chart>
                </div>
            </div>
        );
    }
}
