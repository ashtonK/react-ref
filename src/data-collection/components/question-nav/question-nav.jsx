import React from 'react';
import {Card,CardText} from 'material-ui/Card';
import css from './question-nav.css';
import {Link} from 'react-router';

export default class QuestionNav extends React.Component{
    render(){
        var categories = this.props.categories.map((cat) => {
            return (
                <Card className={css.progressCategory}>
                    <CardText className={css.cardContent}>
                        <Link className={css.catTitle} to="/survey">{cat.catName}</Link>
                    </CardText>
                </Card>
            );
        });
        return(
            <div>
                <div className={css.progressContainer}>
                    <Card className={css.progressCategory}>
                        <CardText className={css.cardContent}>
                           <Link className={css.catTitle} to="/survey">Information Page</Link>
                        </CardText>
                    </Card>
                    {categories}
                    <Card className={css.progressCategory}>
                        <CardText className={css.cardContent}>
                            <Link className={css.catTitle} to="/survey/confirm">Submit Response</Link>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}
