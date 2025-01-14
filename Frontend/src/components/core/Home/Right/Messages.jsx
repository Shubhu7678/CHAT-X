import Message from "./Message"
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../../../../services/operations/messageApis";
import { setMessages } from "../../../../slices/conversationSlice";


const Messages = () => {

    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { selectedConversation, messages } = useSelector((state) => state.conversation);
    const messageEndRef = useRef(null);

    const scrollToBottom = () => { 

        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

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
    }, [token, selectedConversation, dispatch])
    
    useEffect(() => {
         
        scrollToBottom();

    }, [messages]);

    return (
        <div className="bg-gray-900 w-full h-[calc(100vh-155px)] overflow-y-auto p-4">
            
            {selectedConversation && messages.length === 0 && (
                <div className="w-full h-full flex justify-center items-center text-white">
                    <h1 className="text-2xl font-bold">Send a message to start a conversation</h1>
                </div>
            )}
            {selectedConversation && messages.length > 0 && messages.map((message, index) => (

                <Message key={index} message={message} />
            ))}
            
            <div ref={messageEndRef} />
            
        </div>
    )
}

export default Messages