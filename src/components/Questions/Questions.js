import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const total = useLoaderData();
    const {questions} = total.data;
    
    return (
        <div>
            {
                questions.map(question => <Question
                key={question.id}
                question={question}
                ></Question>)
            }
        </div>
    );
};

export default Questions;