import { Link } from "react-router-dom"
import AvatarComponent from "./AvatarComponent"


function AppBar() {
  return (
    <div className="flex  flex-row justify-between border-[#F3F3F3] p-5 border-b-2">
        <Link to ={"/blogs"}className="flex font-bold text-2xl font-sans flex-col justify-center">Medium</Link>
        <div className="flex justify-center items-center mx-5">
            <Link to={"/create"}><button className="mx-5 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center ">New</button></Link> 
            <div><AvatarComponent size = "md" text="JL"/></div>
        </div>
    </div>
  )
}

export default AppBar
