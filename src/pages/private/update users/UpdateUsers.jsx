import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUsers = () => {
    const user=useLoaderData()

    const handleUpdate=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const email=form.email.value 
        const gender=form.gender.value
        const status=form.status.value
        const updatedUser={name,email,gender,status}
   
        fetch(`https://user-management-server-eight.vercel.app/users/${user._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire('User updated successfully')
            form.reset()
        })
    }
    return (
        <div className='w-9/12 mx-auto mt-12'> 
    <h1 className='font-semibold text-4xl text-center'>Update user</h1>
    <p className='text-center mt-2 mb-8'>Use the below form to update the new user</p>

    <form onSubmit={handleUpdate} className='space-y-4'>
    <input type="text" placeholder="User name" name='name' className="input input-bordered w-full " defaultValue={user.name}  required/>
    <input type="text" placeholder="User email" name='email' className="input input-bordered w-full " defaultValue={user.email} required />
     <div className='flex gap-4'>
        <p>Gender:</p>
       <span className='flex items-center gap-2'> <input type="radio" name="gender" value='Male' className="radio radio-success" defaultChecked />Male</span>
       <span className='flex items-center gap-2'> <input type="radio" name="gender" value='Female'  className="radio radio-success" defaultChecked />Female</span>
     </div>
     <div className='flex gap-4'>
        <p>Status:</p>
       <span className='flex items-center gap-2'> <input type="radio" name="status" value='Active' className="radio radio-success" checked />Active</span>
       <span className='flex items-center gap-2'> <input type="radio" name="status" value='Inactive' className="radio radio-success" checked />Inactive</span>
     </div>
     <input type="submit" value="Save" className='btn btn-success w-full' />
    </form>
</div>
    );
};

export default UpdateUsers;