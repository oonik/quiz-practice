import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statics = () => {
    const total = useLoaderData();
    const {data} = total;
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default Statics;