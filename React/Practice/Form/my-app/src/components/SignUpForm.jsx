import React from 'react'
import {useForm} from 'react-hook-form'

const SignUpForm = () => {
    const { register , handleSubmit , formState : {errors} , reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

  return (
    <div className='form-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name Field */}

        <div>
            <label>Name : </label>
            <input {...register("name" , {required : "Name is required"})} />
            {errors.name && <p className='error'>{errors.name.message}</p>}
        </div>

        {/* Email field */}

        <div>
            <label>Email : </label>
            <input {...register("email" , {
                required : "Email is required",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message : "Invalid email format"
                }
            })} />
            {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>

        {/* Password Field */}

        <div>
            <label>Password : </label>
            <input type='password'
            {...register('password',{
                required: "Password is required",
                minLength: {value:6, message:"Password must be atleast 6 characters"}
            })} />
            {errors.password && <p className='error'>{errors.password.message}</p>}
        </div>

        <button type='submit'>Sign Up</button>

      </form>
    </div>
  )
}

export default SignUpForm
