
import { IoSettingsOutline } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../services/operations/authApis";
const LeftSettings = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => { 

    try {

      await logout(dispatch,navigate);
    } catch (error) { 

      console.log('Error occured in logout', error);
    }
  }
  return (
    <div className="w-full h-full ">
      <div className="flex flex-col items-center py-8 gap-8 justify-end h-full">
        <IoSettingsOutline className="text-3xl cursor-pointer" />
        <BiLogOutCircle onClick={handleLogout} className="text-3xl cursor-pointer" />
        </div>
    </div>
  )
}

export default LeftSettings