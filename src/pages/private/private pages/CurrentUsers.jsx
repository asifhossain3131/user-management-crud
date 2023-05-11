import React from 'react';
import { Link } from 'react-router-dom';

const CurrentUsers = () => {
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
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
            </div> 
        </>
    );
};

export default CurrentUsers;