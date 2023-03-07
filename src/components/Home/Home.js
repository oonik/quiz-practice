import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData();
    
    const {data} = quizes;
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-4 md:gap-4 mx-20'>
            {
                data.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;