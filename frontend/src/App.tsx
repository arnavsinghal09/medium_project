import { BrowserRouter,Routes,Route } from "react-router-dom"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"

import { Blogs } from "./pages/Blogs"
import Blog from "./pages/Blog"
import { CreateBlog } from "./pages/CreateBlog"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn/>} path="/signin"></Route>
        <Route element={<SignUp/>} path="/signup"></Route>
        <Route element={<Blogs/>} path="/blogs"></Route>
        <Route element={<Blog/>} path="/blog/:id"></Route>
        <Route element={<CreateBlog/>} path="/create"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
