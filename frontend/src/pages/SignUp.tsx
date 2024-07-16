import { FormsComponent } from "../components/FormsComponent";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { Toaster,toast } from "sonner";
import BACKEND_URL from "../configure";

export function SignUp() {


    const onClickHandler = async ()=>{
        try{
            const postResult = await axios.post(`${BACKEND_URL}api/v1/user/signup`,postInputs)
            if(postResult.status===200){
                toast.success("User created succesfully",{duration:2000}) 
                localStorage.setItem('token',`Bearer ${postResult.data.token}`)
                setTimeout(()=>{navigate("/blogs")},2000)
                
            }           

        }
        catch(err:any){
            if(err.response.status===400){
                toast.error("Enter the correct credentials",{duration:2000})   
            }
            if(err.response.status===411){
                toast.error("Enter a unique username",{duration:2000})   
            }
        }
    }
    const [postInputs,setPostInputs]= useState({
        name:"",
        username:"",
        password:""
    })
    const navigate =useNavigate()
    return (
        <div className="grid grid-cols-2 h-screen font-sans">
            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
                <div className="text-3xl mb-2 font-bold"> Create an account </div>
                <div className="text-sm mb-4 font-light text-gray-500"> Already have an account? <button onClick={()=>navigate("/signin")} className="hover:underline">Login</button> </div>
                <div className="w-[50%]">
                    <FormsComponent 
                        onChange={(e)=>{
                            setPostInputs(c=>({
                                ...c,
                                name:e.target.value
                            }))
                        }}
                        label="Name" 
                        type="text" 
                        placeholder="Enter your name"/>
                    <FormsComponent 
                        onChange={(e)=>{
                            setPostInputs(c=>({
                                ...c,
                                username:e.target.value
                            }))
                        }}
                        label="Username" 
                        type="text" 
                        placeholder="m@example.com"/>
                    <FormsComponent 
                        onChange={(e)=>{
                            setPostInputs(c=>({
                                ...c,
                                password:e.target.value
                            }))
                        }}
                        label="Password" 
                        type="password" 
                        placeholder=""/>
                        <div>
                            <Toaster richColors/>
                            <Button onClick={onClickHandler} label="Signup"/>
                        </div>
                    
                    
                </div>
            </div>
            
            {/* Quotation Component */}
            <div className="relative flex bg-[#F3F4F6] justify-center items-center col-span-2 md:col-span-1">
                <div className="m-20">
                    <div className="text-xl font-bold mb-3">
                        "Our partnership with Medium has been instrumental in driving our digital transformation. 
                        Their innovative solutions and dedicated support have exceeded our expectations."
                    </div>
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-sm font-light">VP of Operations, Example Corp</div>
                </div>
            </div>
        </div>
    );
}
