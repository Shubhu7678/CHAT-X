import { useSelector } from "react-redux";

const ChatProfile = () => {

    const { selectedConversation } = useSelector((state) => state.conversation);
    return (
        <div className="pt-4 pl-5 pb-2 bg-gray-800">
            <div className="flex gap-3 items-center">

            <div className="avatar online">
                <div className="w-16 rounded-full">
                    <img src={selectedConversation?.profileImage} />
                </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-200">{selectedConversation?.firstName + " " + selectedConversation?.lastName}</h3>
                    <p className="text-sm text-gray-400">Online</p>
                </div>
            </div>
        </div>
    )
}

export default ChatProfile