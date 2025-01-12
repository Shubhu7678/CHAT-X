import ChatProfile from "./ChatProfile"
import Messages from "./Messages"
import SendMessage from "./SendMessage"


const RightSide = () => {
  return (
    <div className="w-full h-full bg-gray-900 text-white">
      <ChatProfile />
      <Messages />
      <SendMessage/>
    </div>
  )
}

export default RightSide