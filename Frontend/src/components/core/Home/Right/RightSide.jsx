import ChatProfile from "./ChatProfile"
import Messages from "./Messages"
import SendMessage from "./SendMessage"
import { useSelector } from "react-redux"


const RightSide = () => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  return (
    <div className="w-full h-full bg-gray-900 text-white">
      {
        selectedConversation ? (
          <>
            <ChatProfile />
            <Messages />
            <SendMessage />
          </>
        ) : 
          (
            <div className="w-full h-full flex justify-center items-center text-2xl font-semibold text-gray-400">
              Select a chat to start messaging
            </div>
          )
      }

    </div>
  )
}

export default RightSide