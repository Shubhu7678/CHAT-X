import axios from "axios";
import { userEndPoints } from "../apis";
import toast from "react-hot-toast";

const { GET_ALL_USERS_API } = userEndPoints

export const getAllUsers = async (token) => {

    const toastId = toast.loading('Loading...');
    let result = [];
    try {

        const response = await axios.get(GET_ALL_USERS_API, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) {

        console.log("error while calling getAllUsers api", error);
        toast.error("error while calling getAllUsers api");

    }

    toast.dismiss(toastId);
    return result;
}