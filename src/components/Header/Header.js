import React from 'react';
import logo from '../../images/multi-layers-gray-blue-dark-texture-3d-papercut-layers-in-gradient-banner-abstract-paper-cut-art-background-design-for-website-template-topography-map-concept-or-smooth-origami-paper-cut-vector.jpg'
const Header = () => {
   return (
      <div className='m-5'>
         <div className=' h-96 w-full bg-cover bg-center relative'>
            <img src={logo} alt='logo' className='w-full h-full object-cover absolute mix-blend-overlay rounded'/>
            <div className='p-24'>
            <h2 className='text-slate-100 text-6xl font-bold'>This is the Headline</h2>
            <p className='text-cyan-400 text-2xl font-light mt-5'>I want to be a good quality front end developer</p>
         </div>
         </div>
        
      </div>
   );
};

export default Header;