import React from 'react';
import styles from './overall-rating.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell} from 'Recharts';

export default class OverallRating extends React.Component {
    render() {
        var average = 4; //This needs to be pulled from store, less than or equal to 5
        var leftover = 5 - average; //this is the rest of the pie chart, 5-average
        //bar chart data needs to be pulled from DB. Have to calculate the average of each
        //question, then put it in an array of objects
        //format [ {name: index, score: value} ]
        const barChartData = [
            { name: '1', score: 1 },
            { name: '2', score: 2 },
            { name: '3', score: 3 },
            { name: '4', score: 4 },
            { name: '5', score: 5 },
            { name: '6', score: 2.5 },
            { name: '7', score: 4.5 },
            { name: '8', score: 1 },
            { name: '9', score: 2 },
            { name: '10', score: 3 },
            { name: '11', score: 4 },
            { name: '12', score: 5 },
            { name: '13', score: 2.5 },
            { name: '14', score: 4.5 },
            { name: '15', score: 1 },
            { name: '16', score: 2 },
            { name: '17', score: 3 },
            { name: '18', score: 4 },
            { name: '19', score: 5 },
            { name: '20', score: 2.5 },
            { name: '21', score: 4.5 },
            { name: '22', score: 1 },
            { name: '23', score: 2 },
            { name: '24', score: 3 },
            { name: '25', score: 4 },
            { name: '26', score: 5 },
            { name: '27', score: 2.5 },
            { name: '28', score: 4.5 },
            { name: '29', score: 1 },
            { name: '30', score: 2 },
            { name: '31', score: 3 },
            { name: '32', score: 4 },
            { name: '33', score: 5 },
            { name: '34', score: 2.5 },
            { name: '35', score: 4.5 },
            { name: '36', score: 1 },
            { name: '37', score: 2 },
            { name: '38', score: 3 },
            { name: '39', score: 4 },
            { name: '41', score: 5 },
            { name: '41', score: 2.5 },
            { name: '42', score: 4.5 },
            { name: '43', score: 1 },
            { name: '44', score: 2 },
            { name: '45', score: 3 },
            { name: '46', score: 4 },
            { name: '47', score: 5 },
            { name: '48', score: 2.5 },
            { name: '49', score: 4.5 },
            { name: '50', score: 1 },
            { name: '51', score: 2 },
            { name: '52', score: 3 },
            { name: '53', score: 4 },
            { name: '54', score: 5 },
            { name: '55', score: 2.5 },
            { name: '56', score: 4.5 },
            { name: '57', score: 1 },
            { name: '58', score: 2 },
            { name: '59', score: 3 },
            { name: '60', score: 4 },
        ];
        const pieChartData = [
            { name: 'Score', value: average },
            { name: '', value: leftover }
        ];
        const COLORS = ['#32CD32', '#D3D3D3'];
        return (
            <div>
                <PieChart width={200} height={200} className={styles.averageDonut}>
                    <Pie data={pieChartData} cx='50%' cy='50%' innerRadius={40} outerRadius={80} fill="#82ca9d" startAngle={90} endAngle={-270}>
                        {
                            pieChartData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
                <BarChart width={650} height={250} data={barChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} className={styles.averageQuestions}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="score" fill="#0088FE" />
                </BarChart>
            </div>
        );
    }
}
