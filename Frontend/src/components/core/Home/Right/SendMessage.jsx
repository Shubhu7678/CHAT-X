
import { BsEmojiSmile } from "react-icons/bs";
import { MdAttachment } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";
const SendMessage = () => {
    return (
        <div className="w-full py-2 bg-gray-800 ">
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
                        type="text" />
                    <LuSendHorizontal className="text-2xl w-[5%] text-gray-400 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default SendMessage