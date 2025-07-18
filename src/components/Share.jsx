import React, { useState } from 'react';

const Share = () => {
  const [name, setName] = useState(""); 
  const [idea, setIdea] = useState(""); 
  const API_URL = import.meta.env.VITE_API_URL;


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/ideas/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, idea })
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Submit success:", data);
        // Optionally reset form
        setName("");
        setIdea("");
      } else {
        console.log("Error:", data.message || "Failed to submit.");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center p-4'>
      <h1 className='md:text-2xl text-xl mb-4 my-6'>Feel free to Share your project ideas here!</h1>

      <form className=' bg-gray-950 border border-cyan-400 mt-20 p-6 rounded flex flex-col gap-4 w-full max-w-md' onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className='p-2 rounded text-white border border-blue-400 focus:none'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="idea">Idea</label>
        <textarea
          className='min-h-42 p-2 rounded text-white border-2 border-blue-400'
        //   type=""
          id="idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        />

        <button type="submit" className='bg-teal-950 text-white px-4 py-2 rounded hover:bg-teal-800'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Share;
