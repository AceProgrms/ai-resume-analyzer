import React from 'react';
import ScoreGauge from "~/components/ScoreGauge";

const Category = ({title, score} : {title: string, score: number}) => {
    return(

    )
}

const Summary = ({feedback}:  {feedback : Feedback}) => {
    return (
        <div className='bg-white rounded -2xl shadow-md w-full'>
            <div className="flex flex-row items-center p-4 gap-8">
                <ScoreGauge score={feedback.overallScore}/>
                <div className="text-2xl font-bold">Your Resume Score</div>
                <p className="text-sm text-gray-500">
                    This score is calculated based on the variables listed below.
                </p>
            </div>
        </div>
    );
};

export default Summary;