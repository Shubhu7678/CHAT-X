import LeftSide from "../components/core/Home/Left/LeftSide"
import RightSide from "../components/core/Home/Right/RightSide"


const Home = () => {
  return (
      <div className="w-full h-screen flex">
          <LeftSide />
          <RightSide/>
    </div>
  )
}

export default Home