
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachment } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
import { useForm } from 'react-hook-form'
import { useSelector } from "react-redux";
import { setMessages } from "../../../../slices/conversationSlice";
import { sendMessage } from "../../../../services/operations/messageApis";
import { useDispatch } from "react-redux"
import { io } from 'socket.io-client'
import { useEffect } from "react";

const socket = io("http://localhost:4000");

const SendMessage = () => {

    const { handleSubmit, register, reset } = useForm();
    const { selectedConversation,messages } = useSelector((state) => state.conversation);
    const { token } = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile)
    const dispatch = useDispatch();

    
    useEffect(() => { 
        
        socket.emit('userName', user.firstName);

    },[user])
      
    socket.on('new-message', (message) => {
        dispatch(setMessages([...messages, message]));
    })

    const onSubmit = async(data) => {
        const receiverId = selectedConversation?._id;
        socket.emit('send-new-message', data.newSendMessage);

        const result = await sendMessage(data, token, receiverId);
        if (result) { 
            
            reset();
            dispatch(setMessages([...messages, result])); 
        }
    }
    return (
        <div className="w-full py-2 bg-gray-800 ">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="w-full flex items-center gap-2">

                    <div className="w-[10%] px-4 py-2 flex items-center gap-6">
                        <BsEmojiSmile
                            className="text-2xl text-gray-400 hover:text-gray-200 transition duration-300 cursor-pointer"
                        />
                        <MdAttachment
                            className="text-3xl text-gray-400 hover:text-gray-200 transition duration-300 cursor-pointer"
                        />
                    </div>

                    <div className="w-full flex items-center gap-2 px-2">
                        <input
                            className="p-3 w-full rounded-md bg-gray-950 outline-none shadow-sm"
                            type="text"
                            name="newSendMessage"
                            {...register("newSendMessage")}
                        />
                        <button type="submit" className="w-[5%]">

                        <LuSendHorizontal className="text-2xl  text-gray-400 hover:text-gray-300 transition duration-300  cursor-pointer" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMessage