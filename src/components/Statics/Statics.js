import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const quiz = useLoaderData();
   const {data} = quiz;
   console.log(data)
    return (
        <div className='items-center'>
           <LineChart width={500} height={400} data={data}>
           <Line type="monotone" dataKey="total" stroke="#8884d8"></Line>
           <XAxis dataKey="name"></XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           
           </LineChart>
        </div>
    );
};

export default Statics;