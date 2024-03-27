"use client"
import React, { useState } from 'react';

const Page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
   
    const [mainTask, setmainTask] = useState([])





    const handleTitleChange = (e) => {
       setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
       setDesc(e.target.value);
    };

    const submitHandler = (e) =>{
        e.preventDefault ()  ;
        setmainTask([...mainTask , {title , desc}])
        
        console.log(title);
        console.log(desc);

        setTitle ( " ")
        setDesc (" ")

        // console.log(mainTask)
    }  
const deleteHandler = (i) =>{
      let copytask = [ ...mainTask]
       copytask.splice( i ,1)

       setmainTask(copytask)
}


// const completeTask = () =>{
//      let copytask = [ ...mainTask]
//      copytask.
     
     
// }
// console.log(completeTask)

    ///how show the task //


   let renderTask = <h2> No Task Available</h2>



  if (mainTask.length>0) {
    renderTask = mainTask.map( (t , i ) =>{
        return (
              
               <li key={i} className='flex item-center justify-between mb-5 '>
               <div className='flex justify-between mb-5  w-2/3 '>
             <h5 className='text-2xl font-semibold' > {t.title} </h5>
             <h6 className='text-xl'> {t.desc} </h6>
             </div>

             <button  onClick={ () =>{
                  deleteHandler(i)
             }}
             className='font-bold bg-red-400 text-white px-4 py-2  rounded'> Delete</button>




             {/* <button 
                     onClick={ (i).stu }
             className='bg-green-400 text-white px-1 py-1 rounded '>
                Complete
             </button> */}
               </li>
  
               
               
               
        );
     });
  
  }

 
    return (
        <>
            <div> 
                <h1 className='text-white bg-black text-2xl font-bold p-5 text-center'> Ajeet's Todo List </h1>
            </div>

            <form onSubmit={submitHandler} >
                <input
                    type='text'
                    className='text-2xl border-2 m-4 border-gray-500 px-4 py-2'
                    placeholder="Enter your title"
                    value={title}
                    onChange={handleTitleChange}
                />
               
                <input
                    type='text' 
                    className='text-2xl border-2 m-4 border-gray-500 px-4 py-2' 
                    placeholder='Enter Description here'
                    value={desc}
                    onChange={handleDescChange}
                />

                <button type='submit' className='bg-black text-white m-5 px-4 py-3 text-2xl rounded hover:rounded-xl items-center py'>Add Task</button>
            </form>


            <div className='p-8  bg-slate-200 ' >
                 <ul>  {renderTask} </ul> 
            </div>
        </>
    );
};

export default Page;
