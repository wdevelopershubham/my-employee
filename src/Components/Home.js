import React from 'react';
import Employee from './Employee';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {FaUserPlus, FaUserEdit,FaRegTrashAlt } from "react-icons/fa";
import { json, Link, useNavigate } from 'react-router-dom';

function Home() {
  const history = useNavigate();

  const handleDelete=(id)=>{
    alert('Deleted')
    let index = Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1);
    console.log(Employee);
    history('/');
  }

  const handleEdit=(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desg",desg);
    localStorage.setItem("salary",JSON.stringify(salary));
  }

  return (
    <div className='p-5'>
        <h1 className='text-primary'>Employee Management</h1>
        <p className=''>Employee management is the effort to help employees do their best work each day in order to achieve the larger goals of the organization.</p>
        <Link to={'/add'}>
        <Button className='btn btn-success'>Add <FaUserPlus/></Button>
        </Link>
        <h6 className='mt-5'>List of Emplyees :</h6>
        <Table  striped bordered hover>
    <thead>
      <tr>
        <th>No :</th>
        <th>Name</th>
        <th>Age</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
                    Employee && Employee.length > 0 ?
                    Employee.map((item,index)=>(
                        <tr>
                            <td className='p-1'>{index+1}</td>
                            <td>{item.uname}</td>
                            <td>{item.age}</td>
                            <td>{item.desg}</td>
                            <td>{item.salary}</td>
                            <td>
                              <Link to={'/edit'}>
                              <Button className='rounded-5' onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button>
                              </Link>
                            <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger ms-2 rounded-5'><FaRegTrashAlt/></Button></td>
                        </tr>
                    )):'Error'
        }
    </tbody>
    
  </Table></div>
  )
}

export default Home