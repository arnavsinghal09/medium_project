import { Blog } from "../hooks"
import AppBar from "./AppBar"
import {AuthorDetails} from "./AuthorDetails"


const CompleteBlogComponent = ({blog}:{blog:Blog}) => {
  return (
    <>
        <AppBar/>
        <div className="grid grid-cols-2 space-4">
            <div className="col-span-2 md:col-span-1">
                <div className="m-10 flex flex-col space-y-2">
                    <div className="text-3xl font-bold">{blog.title}</div>
                    <div className="text-xs text-gray-500 ">Posted on August 24, 2023</div>
                    <div className="text-sm">{blog.content}</div>
                </div>
            </div>
            <div className="col-span-2 md:col-span-1"><AuthorDetails authorName={blog.author.name} phrase="Some rando catch phrase"/></div>
        </div>
    </>
    
  )
}

export default CompleteBlogComponent
