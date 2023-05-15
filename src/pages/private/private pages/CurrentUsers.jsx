import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CurrentUsers = () => {
  const loaderusers=useLoaderData()
  const [users,setUsers]=useState(loaderusers)

  const handleDelete=id=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    .then(result=>{
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
      if(data.deletedCount>0){
        Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        )
        const remaining=users.filter(user=>user._id!==id)
        setUsers(remaining)
      }
        }) 
      }
    })
  }


    return (
        <>
           <h1 className='font-bold text-4xl text-center mt-4 mb-8'>Current users</h1> 
           <div>
<Link to='/newusers'><button className="btn btn-outline">Create new users</button></Link>
           <div className="overflow-x-auto mt-4">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr >
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
 {
  users?.map(user=>   <tr key={user._id}>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.gender}</td>
    <td>{user.status}</td>
    <td className='flex items-center'>
<Link to={`/updateuser/${user._id}`}><button  className="btn btn-square btn-outline me-2">
E
</button></Link>
<button onClick={()=>handleDelete(user._id)} className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </td>
  </tr>)
 }
    </tbody>
  </table>
</div>
            </div> 
        </>
    );
};

export default CurrentUsers;