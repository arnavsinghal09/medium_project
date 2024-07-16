import axios from "axios";
import { useEffect, useState } from "react";
import BACKEND_URL from "../configure";

export interface Blogs{
    content:string,
    title:string,
    id:number
    author:{
        name:string
    }
}

export interface Blog{
    content:string,
    title:string,
    id:number
    author:{
        name:string
    }
}

export function useBlogs() {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blogs[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/blog/bulk`,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        }).then((res)=>{
            setBlogs(res.data.blogs)
            setLoading(false)
        })
    },[])

    return ({
        loading,blogs
    })
}

export function useBlog({id}:{id:number}) {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()
    useEffect(()=>{
        axios.get(`${BACKEND_URL}api/v1/blog/${id}`,{
            headers:{
                authorization:localStorage.getItem('token')
            }
        }).then((res)=>{
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[])

    return ({
        loading,blog
    })
}

