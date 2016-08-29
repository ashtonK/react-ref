import React from 'react';
import NVD3Chart from 'react-nvd3';
import BarChart from 'react-chartjs';

import styles from './overall-rating.css';

export default class OverallRating extends React.Component {
    render() {
        var average = 4; //This needs to be pulled from store, less than or equal to 5
        var leftover = 5 - average; //this is the rest of the pie chart, 5-average
        console.log(leftover);
        var averagePieData = [
            {
                'label': 'Average:',
                'value': average
            },
            {
                'label' : '',
                'value': leftover
            }
        ];
        console.log(averagePieData);
        var averageBarData = {
            labels: ["Q1", "Q2", "Q3", "Q4", "Q5"],
            datasets: [
                {
                    label: "Bar Chart Example",
                    data: [1,2,3,4,2.5],
                }
            ]

        };
        return (
            <div>
                <div className={styles.averageDonut}>
                    <h3> Donut Average Chart </h3>
                    <div className={styles.donutChart}>
                    <NVD3Chart id="donutChart" type="pieChart" datum={averagePieData} x="label" y="value" donut="true" showLabels="false"/>
                    </div>
                </div>
                <div className={styles.averageQuestions}>
                    <h3> Multi Bar Chart </h3>
                    <div className={styles.barChart}>
                    <BarChart data={averageBarData} width="400" height="400"/>
                    </div>
                </div>
            </div>
        );
    }
}
