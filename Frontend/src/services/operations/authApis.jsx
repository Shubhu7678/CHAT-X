
import axios from "axios";
import { authEndPoints } from "../apis";
import toast from "react-hot-toast";

const { SIGN_UP_API } = authEndPoints;
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("Base URL:", BASE_URL);

export const signup = async (data) => { 

    let result = false;
    console.log(SIGN_UP_API)
    const toastId = toast.loading('Loading...');
    try {
     
        const response = await axios.post(SIGN_UP_API, data,{});

        if (!response.data.success) { 

            throw new Error(response.data.message);
        }
       
        if (result.data.success) {

            result = true;
        }


    } catch (error) { 

        console.log("error while calling signup api", error);
    }

    toast.dismiss(toastId);
    return result;

}