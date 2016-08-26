import React from 'react';
import styles from './score-table.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default class ScoreTable extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <p>{this.props.viewName}</p>
                </div>
                <table>
                    <tbody>
                    <tr>
                        {this.props.headers.map(function(rowHeader){
                            return(
                                <th>
                                {rowHeader}
                                </th>
                            );
                        })}
                    </tr>
                    {this.props.data.map(function(row) {
                        return (
                            <tr>
                            {row.map(function(cell) {
                                let className = cx({
                                    Red: cell < 3,
                                    Green: cell > 3,
                                    Yellow: cell == 3
                                });
                                return <td>
                                    <button className={className}>{cell}</button>
                                </td>;
                            })}
                            </tr>
                        );
                    })}
                    <tr>
                    {this.props.dataTotals.map(function(total){
                        let className = cx({
                            Red: total < 3,
                            Green: total > 3,
                            Yellow: total == 3
                        });
                        return(
                            <td>
                            <div className={className}>{total}</div>
                            </td>
                        );
                    })}
                    </tr>
                    </tbody>
                </table>
                <p>Category Score</p>
                {this.props.viewScore.map(function(viewScore){
                    let className = cx({
                        Red: viewScore < 3,
                        Green: viewScore > 3,
                        Yellow: viewScore == 3
                    });
                    return(
                        <td>
                        <div className={className}>{viewScore}</div>
                        </td>
                    );
                })}
            </div>
        );
    }
}
