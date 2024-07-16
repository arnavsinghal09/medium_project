import { BlogCard } from "../components/BlogCard"
import Skeletons from "../components/Skeletons"
import { useBlogs } from "../hooks"
import AppBar from "../components/AppBar"


export function Blogs() {
  const {loading , blogs} =useBlogs()
  if(loading){
    return(
      <>
        <Skeletons/>
        <Skeletons/>
        <Skeletons/>
      </>
      
    )
  }
  return (

    <>
    <AppBar/>
      <div className="flex justify-center">
        <div className="font-sans " >
          {blogs.map((blog,index) =>
            <BlogCard 
            key={index}
            publishedDate="23/5/2024" 
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            id = {blog.id}/>
          )}
        </div>
      </div>
    </>

    
  )
}
