import React from 'react';

export default class SectionAvg extends React.Component{
    render(){
        // <button onClick={()=>this.props.changeCategoryDataAvg(category.catName)}>{category.catName}</button>
        const {changeCategoryDataAvg} = this.props;
        return(
            <div>
            {this.props.categoryAvg.map(function(category){
                return(
                    <div>
                        <div>{category.avg}</div>
                        <button onClick={()=>changeCategoryDataAvg(category.catName)}>{category.catName}</button>
                    </div>
                );
            })}
            </div>
        );
    }
}
