import React from 'react';


export default function ReviewListElement({reviewInfo,onSelectReview}){
    return (
            <div>
            <button onClick={()=>{onSelectReview(reviewInfo.key);}}>GO TO REVIEW</button>
            {reviewInfo.client}
            </div>
            );
}
