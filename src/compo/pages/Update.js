import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Update() {

    const {userId} = useParams();

    const {register, handleSubmit} = useForm({defaultValues:(
        async()=>(await axios.get(`http://localhost:5000/users/${userId}`)).data
    )});

    const navi = useNavigate();

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data)
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

            <input type='submit' value='Update'></input>
            
            <input type='reset' value='Reset'></input>
        </form>
    </center>
  )
}

export default Update