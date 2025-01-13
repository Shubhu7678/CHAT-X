import axios from 'axios';
import { messagesEndPoints } from '../apis';
import toast from 'react-hot-toast';

const { GET_MESSAGES_API } = messagesEndPoints

export const getMessages = async(receiverId, token) => { 
      
    let result = [];
    const toastId = toast.loading('Loading...');
    try {
             
        const response = await axios.get(GET_MESSAGES_API + `/${receiverId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.data.success) {

            throw new Error(response.data.message);
        }

        result = response.data.data;

    } catch (error) { 

        console.log("error while calling getMessages api", error);
    }

    toast.dismiss(toastId);
    return result;
}