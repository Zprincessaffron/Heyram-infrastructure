import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/JobDetail.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function JobDetail() {

  const location = useLocation();
  const jobData = location.state; // Retrieve the job data passed from the Career component
  console.log(jobData)
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const applicationData = {
        ...data,
        appliedFor: jobData.jobName
      };
      try {
        const response = await axios.post('/js', applicationData);
        console.log('Job application submitted successfully:', response.data);
        // You can also reset the form or redirect after submission
      } catch (error) {
        console.error('Error submitting the job application:', error);
      }
   
  };

  return (
    <div className='jd_main'>

        <div>
            <h1 className='application_title'>{jobData.jobName} Application</h1>
        </div>
              <form onSubmit={handleSubmit(onSubmit)}>

        <div className='jd_div1'>
            <h1>CONTACT IFORMATION</h1>
            <div className='jd_div11'>
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

      
    </Box>
    
            </div>

        </div>

        <div className='jd_div1'>
            <h1>EDUCATION IFORMATION</h1>
            <div className='jd_div11'>
            <Box
            className='box'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-required" label="Education level" variant="outlined"   className={errors.educationLevel ? 'error' : ''}
          {...register('educationLevel', { required: 'Education level is required' })} />
      <TextField required id="outlined-required" label="Degree" variant="outlined"    className={errors.degree ? 'error' : ''}
          {...register('degree', { required: 'degree is required' })}/>
      <TextField required id="outlined-required" label="Stream" variant="outlined" className={`errormsg ${errors.stream?'error' : ''}`}   {...register('stream', { required: 'stream is required' })}  />
      <TextField required id="outlined-required" label="Year Passed" variant="outlined" className={`errormsg ${errors.yearPassed?'error' : ''}`}   {...register('yearPassed', { required: 'yearPassed is required' })}  />

      
    </Box>

    
            </div>

        </div>

        <div className='jd_div1'>
            <h1>EXPERIENCE</h1>
            <div className='jd_div11'>
            <Box
            className='box'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-required" label="Experience in Years" variant="outlined" className={`errormsg ${errors.totalExperience?'error' : ''}`}   {...register('totalExperience', { required: 'totalExperience is required' })}  />
      <TextField required id="outlined-required" label="Current Organization" variant="outlined" className={`errormsg ${errors.currentOrganization?'error' : ''}`}   {...register('currentOrganization', { required: 'currentOrganization is required' })}  />
      <TextField required id="outlined-required" label="Notice Period" variant="outlined" className={`errormsg ${errors.noticePeriod?'error' : ''}`}   {...register('noticePeriod', { required: 'noticePeriod is required' })}  />
      <TextField required id="outlined-required" label="immediate available" variant="outlined" className={`errormsg ${errors.immediateAvailable?'error' : ''}`}   {...register('immediateAvailable', { required: 'immediateAvailable is required' })}  />


      
    </Box>
    
            </div>

        </div>

        <div className='jd_div1'>
            <h1>CANDIDATE INFORMATION</h1>
            <div className='jd_div11'>
            <Box
            className='box'
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '55ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="outlined-required" label="Resume" variant="outlined" className={`errormsg ${errors.resume?'error' : ''}`}   {...register('resume', { required: 'resume is required' })}  />
      <TextField required id="outlined-required" label="Link1" variant="outlined"  className={`errormsg ${errors.link1?'error' : ''}`}   {...register('link1', { required: 'link1 is required' })} />
      <TextField required id="outlined-required" label="Link2" variant="outlined" className={`errormsg ${errors.link2?'error' : ''}`}   {...register('link2', { required: 'link2 is required' })} />
      <TextField required id="outlined-required" label="Gender" variant="outlined"  className={`errormsg ${errors.name?'gender' : ''}`}   {...register('gender', { required: 'gender is required' })} />
      <TextField required id="outlined-required" label="Expected CTC" variant="outlined" className={`errormsg ${errors.expectedCTC?'error' : ''}`}   {...register('expectedCTC', { required: 'expectedCTC is required' })}  />
      <TextField required id="outlined-required" label="city" variant="outlined" className={`errormsg ${errors.city?'error' : ''}`}   {...register('city', { required: 'city is required' })}  />
      <TextField required id="outlined-required" label="State" variant="outlined" className={`errormsg ${errors.state?'error' : ''}`}   {...register('state', { required: 'city is required' })}  />


      
    </Box>
    
            </div>

        </div>
        <button className='submit_buuton' type='submit'>Submit Application</button>
        </form>

          </div>
  );
}

export default JobDetail;
