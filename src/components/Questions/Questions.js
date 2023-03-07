import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const total = useLoaderData();
    const {questions} = total.data;
    
   
    return (
        <div>
            <h3 className='text-2xl font-bold mt-10 text-cyan-600'>Quiz of JavaScript</h3>
           <div className='grid grid-cols-1 gap-3 m-10 p-10'>
           {
                questions.map(question => <Question
                key={question.id}
                question={question}
                
                ></Question>)
            }
           </div>
        </div>
    );
};

export default Questions;