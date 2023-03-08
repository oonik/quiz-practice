import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold text-teal-400'>What is the purpose of react router?</h3>
            <p className='font-light bg-teal-600 text-white p-5 mx-20 rounded-3xl'>Ans: React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
            <h3 className='text-2xl font-bold text-teal-400'>How dose context Api Work?</h3>
            <p className='font-light bg-teal-600 text-white p-5 mx-20 rounded-3xl'>Ans: The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
            <h3 className='text-2xl font-bold text-teal-400'>What is the purpose of react router?</h3>
            <p className='font-light bg-teal-600 text-white p-5 mx-20 rounded-3xl'>Ans: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
        </div>
    );
};

export default Blog;