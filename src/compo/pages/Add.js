import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm();

    const navi = useNavigate();

    function saveData(data){
        axios.post('http://localhost:5000/users', data)
        navi('/show')
    }

  return (
    <center>
        <form onSubmit={handleSubmit(saveData)}>
            <label htmlFor='r'>ROLL:</label>
            <input type='number' id='r' {...register('roll')}/>
            <br/> <br/>

            <label htmlFor='n'>NAME:</label>
            <input type='text' id='n' {...register('name')}/>
            <br/> <br/>

            <input type='submit' value='Add User'></input>
            
            <input type='reset' value='Reset User'></input>
        </form>
    </center>
  )
}

export default Add