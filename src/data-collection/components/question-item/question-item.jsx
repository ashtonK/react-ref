import React from 'react';
import css from './question-item.css';

class QuestionSelect extends React.Component{
    render(){
        var questionOptions = this.props.questionOptions.map((option) => {
            return(
                <option>{option.text}</option>
            );
        });
        return(
            <select className={css.inputArea} name={this.props.questionInfo.item} required={this.props.questionInfo.required} placeholder="">
                <option value='' disabled='true' selected>defaultSelect</option>
                {questionOptions}
            </select>
        );
    }
}


export default class QuestionItem extends React.Component{
    render(){
        let optional = ' (Optional)';
        var questionItem = this.props.questionItems.map((question) => {
            if(question.type == 'text'){

                return(
                    <div>
                        <label className={css.inputLabel}>{question.label}{(question.required ? '' : optional)}:</label>
                        <input className={css.inputArea} name={question.item} required={question.required} placeholder=""/>
                    </div>
                );
            } else if(question.type == 'number'){
                return(
                    <div>
                        <label className={css.inputLabel}>{question.label}{(question.required ? '' : optional)}:</label>
                        <input className={css.inputArea} name={question.item} required={question.required} placeholder=""/>
                    </div>
                );
            } else if(question.type == 'select' && question.options){
                return(
                    <div>
                        <label className={css.inputLabel}>{question.label}{(question.required ? '' : optional)}:</label>
                        <QuestionSelect questionInfo={question} questionOptions={question.options}/>
                    </div>
                );
            } else if(question.type == 'radio'){
                return(
                    <div>
                        <label className={css.inputLabel}>{question.label}{(question.required ? '' : optional)}:</label>
                        <input className={css.inputArea} name={question.item} required={question.required} placeholder=""/>
                    </div>
                );
            } else{
                return(
                    <div>
                        <div>{question.label}</div>
                        <input type={question.type}/>
                    </div>
                );
            }
        });
        return(
            <div className={css.participantInfoForm}>{questionItem}</div>
        );
    }
}

