"use client"
import React, { useState } from 'react';

const Page = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
   
    let handleTitleChange = (e) => {
       setTitle(e.target.value);
    };

    let handleDescChange = (e) => {
       setDesc(e.target.value);
    };

    return (
        <>
            <div> 
                <h1 className='text-white bg-black text-2xl font-bold p-5 text-center'> Ajeet's Todo List </h1>
            </div>

            <form>
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

                <button type='button' className='bg-black text-white m-5 px-4 py-3 text-2xl rounded hover:rounded-xl items-center py'>Add Task</button>
            </form>
        </>
    );
};

export default Page;
