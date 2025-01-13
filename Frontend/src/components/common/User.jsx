import { useSelector, useDispatch } from "react-redux"
import { setSelectedConversation } from "../../slices/conversationSlice";

const User = ({ user }) => {

    const { selectedConversation } = useSelector((state) => state.conversation);
    const dispatch = useDispatch();

    const handleUserClick = (user) => { 
         
        if (selectedConversation?._id === user?._id) { 
            dispatch(setSelectedConversation(null));
            return;
        }
        dispatch(setSelectedConversation(user));
    }

    return (
        <>
            <div onClick={() => handleUserClick(user)} className={`py-2 px-2 rounded-md cursor-pointer ${selectedConversation?._id === user?._id && "bg-gray-800"} hover:bg-gray-800 duration-200 transition ease-in-out`}>
                <div className="flex gap-3 items-center">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src={user?.profileImage} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">{user?.firstName + " " + user?.lastName}</h3>
                        <p className="text-sm text-gray-300">{user?.email}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User