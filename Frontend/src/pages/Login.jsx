import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form";
import { login } from "../services/operations/authApis";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
const Login = () => {

  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {

    try {

      await login(data,dispatch,navigate,reset);

    } catch (error) {

      console.log("Error occured in Login", error);
    }

  }
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-b from-teal-600 
                         from-50% to-gray-100 to-50% space-y-6">
      <h2 className="font-mono text-3xl text-white">CHAT-X</h2>
      <div className="border shadow p-6 w-[500px] bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
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
          <div className="mb-4">
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
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white">
              Login
            </button>
          </div>
        </form>
        <div>
          <span>Have not any account ? </span>
          <NavLink to={'/signup'} className="underline text-blue-700" >Signup</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Login