import User from "../../../common/User"

import { useSelector } from "react-redux"


const Users = () => {

  const { totalUsers } = useSelector(state => state.user);


  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col gap-2 p-1">
        {
          totalUsers.length > 0 && totalUsers.map((user, index) => (

            <User key={index} user={user} />
          ))
        }
      </div>
    </div>
  )
}

export default Users