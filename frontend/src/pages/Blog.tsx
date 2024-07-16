import { useParams } from "react-router-dom"
import CompleteBlogComponent from "../components/CompleteBlogComponent"
import Skeletons from "../components/Skeletons"
import { useBlog } from "../hooks"


function Blog() {
    const {id} = useParams<{ id: string }>()
    const {loading,blog} = useBlog({
        id: Number(id)
    })
    if(loading){
        return(
            <Skeletons/>
        )
    }
    if (!blog) {
        return <div>Blog not found</div>; 
    }

    return (
         <CompleteBlogComponent blog={blog} />
    )
}

export default Blog
