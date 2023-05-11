import React from 'react';

const NewUsers = () => {
    return (
        <>
<button className="btn btn-outline btn-primary">All users</button>

<div className='w-9/12 mx-auto mt-12'> 
    <h1 className='font-semibold text-4xl text-center'>New user</h1>
    <p className='text-center mt-2 mb-8'>Use the below form to create a new user</p>

    <form className='space-y-4'>
    <input type="text" placeholder="User name" name='name' className="input input-bordered w-full " />
    <input type="text" placeholder="User email" name='email' className="input input-bordered w-full " />
     <div className='flex gap-4'>
        <p>Gender:</p>
       <span className='flex items-center gap-2'> <input type="radio" name="radio-1" className="radio radio-success" checked />Male</span>
       <span className='flex items-center gap-2'> <input type="radio" name="radio-1" className="radio radio-success" checked />Female</span>
     </div>
     <div className='flex gap-4'>
        <p>Status:</p>
       <span className='flex items-center gap-2'> <input type="radio" name="radio-1" className="radio radio-success" checked />Active</span>
       <span className='flex items-center gap-2'> <input type="radio" name="radio-1" className="radio radio-success" checked />Inactive</span>
     </div>
    </form>
</div>
        </>
    );
};

export default NewUsers;