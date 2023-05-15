import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';

const CurrentUsers = () => {
  const {user}=useContext(AuthContext)
  const loaderusers=useLoaderData()
  const [users,setUsers]=useState(loaderusers)
  const navigate=useNavigate()


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
        const remaining=users.filter(current=>current._id!==id)
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
<Link to='/'><button className="btn btn-outline">Create new users</button></Link>
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
  user? users.map(current=>   <tr key={current._id}>
    <td>{current._id}</td>
    <td>{current.name}</td>
    <td>{current.email}</td>
    <td>{current.gender}</td>
    <td>{current.status}</td>
    <td className='flex items-center'>
<Link to={`/updateuser/${current._id}`}><button  className="btn btn-square btn-outline me-2">
E
</button></Link>
<button onClick={()=>handleDelete(current._id)} className="btn btn-square btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
    </td>
  </tr>) : navigate('/login')
 }
    </tbody>
  </table>
</div>
            </div> 
        </>
    );
};

export default CurrentUsers;