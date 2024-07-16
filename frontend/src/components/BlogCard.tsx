import { Link } from "react-router-dom";
import AvatarComponent from "./AvatarComponent";

interface Props{
    authorName:string,
    title: string,
    content:string,
    publishedDate: string
    id:number
}

export function BlogCard({authorName, publishedDate, title, content, id }:Props) {
    const textContent =  content.split(' ')
    const name  = authorName.split(' ')
    const initials = (name[0]?.charAt(0) || '') + (name[1]?.charAt(0) || '')
    return (
      <Link to={`/blog/${id}`}>
        <div className="m-5  p-5 w-screen max-w-screen-md flex flex-col space-y-4 border-b-2 border-[#F3F3F3] cursor-pointer">
              <div id ="identificationComponent"className="flex items-center space-x-2">
                <AvatarComponent size = "sm" text={initials}/>
                <div id="authorName">{authorName}</div>
                <div id ="dot" className="flex items-center justify-center h-[3px] w-[3px] bg-gray-500 rounded-full"></div>
                <div id ="publishedDate" className="flex items-center justify-center text-gray-500 font-light">{publishedDate}</div>
              </div>
            <div id ="title" className="font-bold text-xl">{title}</div>
            <div id="content" className="font-normal text-sm">{textContent.slice(0,50).join(" ")+ "..."}</div>
            <div id ="minuteRead"className="text-sm font-light text-gray-500">{Math.ceil(content.length/100)} min read</div>
          </div>
      </Link>

    );
}

