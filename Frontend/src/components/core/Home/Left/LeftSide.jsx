import Search from "./Search"
import LeftSettings from "./LeftSettings"
import Users from "./Users"


const LeftSide = () => {
    return (
        <div className="w-[35%] h-full bg-gray-700 text-white">
            <div className="w-full h-full flex">
                <div className="w-[12%] bg-gray-800">
                    <LeftSettings />
                </div>
                <div className="w-[95%] md:w-[90%] lg:w-[90%] h-full p-2">
                    <h1 className="text-3xl font-sans font-medium mb-2">Chats</h1>
                    <Search />
                    <hr className="mt-3" />
                    <div className="mt-3 h-[calc(100vh-125px)] overflow-y-auto">
                        <Users />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide