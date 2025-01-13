
import axios from "axios";
import { authEndPoints } from "../apis";
import toast from "react-hot-toast";
import { setToken } from '../../slices/authSlice';
import { setUser } from '../../slices/profileSlice';

const { SIGN_UP_API, LOGIN_API } = authEndPoints;

export const signup = async (data) => { 

    let result = false;
    const toastId = toast.loading('Loading...');
    try {
     
        const response = await axios.post(SIGN_UP_API, data,{});
        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
       
        if (response.data.success) {

            result = true;
        }

    } catch (error) { 
        
        console.log("error while calling signup api", error);
    }

    toast.dismiss(toastId);
    return result;
    
}

export const login = async (data,dispatch,navigate,reset) => { 

    
    const toastId = toast.loading('Loading...');
    try {

        const response = await axios.post(LOGIN_API, data, {});

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }

        if (response.data.success) {

            dispatch(setUser(response.data.data));
            dispatch(setToken(response.data.token));
            localStorage.setItem('user', JSON.stringify(response.data.data));
            localStorage.setItem('token', JSON.stringify(response.data.token));
            reset();
            toast.dismiss(toastId);
            toast.success(response.data.message);
            navigate('/');
        }

       
    } catch (error) { 

        console.log("error while calling login api", error);
        toast.error(error.response.data.message)
    }

    toast.dismiss(toastId);
}

export const logout = async (dispatch,navigate) => { 

    const toastId = toast.loading('Loading...');
    try {
          
        dispatch(setUser(null));
        dispatch(setToken(null));
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        toast.dismiss(toastId);
        toast.success('Logged out successfully');
        navigate('/login');
    } catch (error) { 

        console.log("error while calling logout api", error);
        toast.dismiss(toastId);

    }



}