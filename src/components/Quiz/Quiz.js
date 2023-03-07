import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    const {id, name, logo} = quiz;
    return (
        <div>
           <div className=' capitalize my-20 bg-gray-100 p-3 rounded shadow-lg'>
           <img src={logo} alt="logo" className='w-full h-43 rounded  bg-cyan-100' />
           <div className='flex items-center justify-between'>
             <p className='mt-3 font-bold text-cyan-400'>{name}</p>
            
             <p  className='mt-5 bg-cyan-400 p-2 rounded text-white font-semibold'>
                <Link to={`/quiz/${id}`}>Start Practice</Link>
             </p>
           </div>
            
           </div>
        </div>
    );
};

export default Quiz;