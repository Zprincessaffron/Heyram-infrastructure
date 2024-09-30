import React, { useContext } from 'react'
import '../../styles/Connect.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AppContext } from '../../context/AppContext';
import { IoMdClose } from "react-icons/io";

function Connect() {

    const { connectForm, setConnectForm } = useContext(AppContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm();
    
  const onSubmit = async (data) => {
      try {
        const response = await axios.post('/client', data);
        console.log('Client Form submitted successfully:', response.data);
        // You can also reset the form or redirect after submission
        reset();
      } catch (error) {
        console.error(error);
      }

   
  };
  return (
    <div className={`connect_form ${connectForm?"true":""}`}>
        <div className='connect_closebtn' onClick={()=>{setConnectForm(false)}}>
            <IoMdClose/>
        </div>
        <div className='connect_div1'>
        Every outcome starts with a conversation
        </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                      <Box
            className='box'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
              <TextField required id="outlined-required" label="Name" className={`errormsg ${errors.name?'error' : ''}`}   {...register('name', { required: 'Name is required' })} />
              <TextField required id="outlined-required" label="Email" variant="outlined"    className={`errormsg ${errors.email?'error' : ''}`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email is not valid',
            },
          })} />
      <TextField required id="outlined-required" label="Phone" variant="outlined" 
        type='tel'
        className={errors.phone ? 'error' : ''}
        {...register('phone', {
          required: 'Phone number is required',
          minLength: {
            value: 10,
            message: 'Phone number must be at least 10 digits',
          },
          maxLength: {
            value: 15,
            message: 'Phone number cannot exceed 15 digits',
          },
        })} />

     <TextField required id="outlined-required" label="service" className={`errormsg ${errors.service?'error' : ''}`}   {...register('service', { required: 'services is required' })} />
     <TextField required id="outlined-required" label="How did you hear about us" className={`errormsg ${errors.howDidYouHear?'error' : ''}`}   {...register('howDidYouHear', { required: 'howDidYouHear is required' })} />

     
     
     <textarea name="" id="" rows={4}
     className={`errormsg ${errors.message?'error' : ''}`}   {...register('message', { required: 'message is required' })} 
       
       ></textarea>




    </Box>
    <div className='connect_button'>
    <button className='submit_buuton' type='submit'>Submit Application</button>

    </div>


                      </form>


    </div>
  )
}

export default Connect