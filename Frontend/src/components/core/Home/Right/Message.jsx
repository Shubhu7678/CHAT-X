import {useSelector} from "react-redux";

const Message = ({ message }) => {

    const { selectedConversation} = useSelector((state) => state.conversation);
 
    return (
        <div>
            {/* <div className="chat chat-start">
                <div className="chat-bubble">
                    Its over Anakin,
                    <br />
                    I have the high ground.
                </div>
            </div> */}
            <div className={`chat ${selectedConversation?._id === message?.senderId ? "chat-start" : "chat-end"}`}>
                <div className="chat-bubble">{ message?.message }</div>
            </div>
        </div>
    )
}

export default Message