

const Question = ({question}) => {
      // console.log(question)
      const { options, correctAnswer} = question;
     const handleRightAns=(option)=>{
      if(option === correctAnswer){
         alert('right')
      }
      else{
         alert('wrong')
      }
     }
    return (
        <div  className='bg-slate-100 mt-2 p-10'>
            
            <div className='text-2xl text-cyan-500 font-semibold mb-3'>
            <p>{question.question}</p>
            </div>
                 <div className='grid grid-rows-2 grid-flow-col gap-4 drop-shadow rounded-full'>
                    {
                     options.map(option =>{
                        return (<div>
                         <div className='bg-slate-200 p-2 flex items-center drop-shadow text-cyan-600'>
                         <input onClick={()=>handleRightAns(option)} type='radio' name={options} id={option}/>
                         <label className='ml-3' htmlFor={option}>{option}</label>
                         </div>
                        </div>)
                     })
                    }
                 </div>
            </div>
    );
};

export default Question;