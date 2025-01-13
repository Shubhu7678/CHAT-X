import Message from "./Message"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../../../../services/operations/messageApis";
import { setMessages } from "../../../../slices/conversationSlice";


const Messages = () => {

    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { selectedConversation } = useSelector((state) => state.conversation);
    

    useEffect(() => { 

        const fetchMessages = async () => { 

            try {
                if (selectedConversation) { 
                    const receiverId = selectedConversation?._id;
                    const result = await getMessages(token, receiverId);
                    if (result) { 

                        dispatch(setMessages(result));
                    }
                }

            } catch (error) { 

                console.log("error while calling getMessages api", error);
            }
        }

        fetchMessages();
    },[token, selectedConversation, dispatch])

    return (
        <div className="bg-gray-900 w-full h-[calc(100vh-155px)] overflow-y-auto p-4">
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            
        </div>
    )
}

export default Messages