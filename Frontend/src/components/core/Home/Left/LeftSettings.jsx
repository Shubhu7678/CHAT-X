
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
const LeftSettings = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center py-8 gap-8 justify-end h-full">
        <IoSettingsOutline className="text-3xl" />
        <BiLogOutCircle className="text-3xl" />
        </div>
    </div>
  )
}

export default LeftSettings