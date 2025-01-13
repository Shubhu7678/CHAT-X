import LeftSide from "../components/core/Home/Left/LeftSide"
import RightSide from "../components/core/Home/Right/RightSide"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { getAllUsers } from "../services/operations/userApis"
import { setTotalUsers } from "../slices/userSlice"


const Home = () => {

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    const fetchAllUsers = async () => {

      const result = await getAllUsers(token);
      if (result) {

        dispatch(setTotalUsers(result));
      }
    }

    fetchAllUsers();

  }, [token,dispatch])

  return (
    <div className="w-full h-screen flex">
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Home