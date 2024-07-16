import { useState } from "react"
import AppBar from "../components/AppBar"
import axios from "axios"
import BACKEND_URL from "../configure"
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from "sonner"

export const CreateBlog = () => {
  const [title,setTitle] = useState(' ')
  const [content,setContent] = useState(' ')
  const navigate = useNavigate()
  const onClickHandler = async ()=>{
    try{
       const response = await axios.post(`${BACKEND_URL}api/v1/blog/post`,{
          title,
          content
        },{
        headers:{
          authorization:localStorage.getItem('token')
        }
      })
      setTimeout(() => {
        navigate(`/blog/${response.data.id}`)
      }, 2000);
      toast.success("Successfully published the blog",{duration:2000})
      
    }
    catch(err){
      toast.error("Error while publishing the post try again later")
    }
  }
  return (
    <div>
      <AppBar/>
      <div className="flex flex-col m-5 justify-center items-center space-y-5">
        <input id="message" type="text"  onChange={(e)=>{
          setTitle(e.target.value)
        }} className="block p-2.5 w-full max-w-2xl h-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
        focus:ring-blue-500 focus:border-blue-500" placeholder="Title"/>
        <textarea id="message" rows={8} onChange={(e)=>{
          setContent(e.target.value)
        }} className="block p-2.5 w-full max-w-2xl h-4/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
        focus:ring-blue-500 focus:border-blue-500" placeholder="Content"/>
        <div className="w-full max-w-2xl">
          <button onClick={onClickHandler} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none">Publish</button>
        </div>
      </div>
      <div>
        <Toaster richColors/>
      </div>
    </div>
  )
}
