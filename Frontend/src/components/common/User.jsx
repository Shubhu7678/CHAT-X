

const User = () => {
    return (
        <>
            <div className="py-2 px-2 rounded-md cursor-pointer hover:bg-gray-800 duration-200 transition ease-in-out">
                <div className="flex gap-3 items-center">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-200">John Doe</h3>
                        <p className="text-sm text-gray-300">john@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User