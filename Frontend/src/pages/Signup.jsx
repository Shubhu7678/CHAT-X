
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';

import { signup } from '../services/operations/authApis';

const Signup = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {

    try {

      const result = await signup(data);
      if (result) {

        reset();
        toast.success('Signup successful');
        navigate("/login");
      }

    } catch (error) {

      console.log("Error occured in Signup", error);

    }

  }

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-b from-teal-600 
                         from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-mono text-4xl text-white">CHAT-X</h2>
      <div className="border shadow p-6 w-[500px] bg-white">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex items-center gap-2">
            <div className="mb-2">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder='Enter First Name'
                className="w-full px-3 py-2 border"
                {...register('firstName', { required: true })}
              />
              {errors.firstName && <span className="text-red-500">First Name is required</span>}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder='Enter Last Name'
                className="w-full px-3 py-2 border"
                {...register('lastName', { required: true })}
              />
              {errors.lastName && <span className="text-red-500">Last Name is required</span>}
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter Email'
              className="w-full px-3 py-2 border"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>

          <div className="mb-2">
            <label className="block text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder='*******'
              className="w-full px-3 py-2 border"
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder='*******'
              className="w-full px-3 py-2 border"
              {...register('confirmPassword', { required: true })}
            />
            {errors.confirmPassword && <span className="text-red-500">Confirm Password is required</span>}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white">
              Sign up
            </button>
          </div>
        </form>
        <div>
           <span>Have any account ? </span>
        <NavLink to={'/login'} className="underline text-blue-700" >Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Signup