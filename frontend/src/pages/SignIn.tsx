import { FormsComponent } from "../components/FormsComponent";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { Toaster,toast } from "sonner";
import BACKEND_URL from "../configure";


export function SignIn() {

    const onClickHandler = async ()=>{
        try{
            const postResult = await axios.post(`${BACKEND_URL}api/v1/user/signin`,postInputs)
            if(postResult.status===200){
                toast.success("Signin succesful",{duration:2000}) 
                localStorage.setItem('token',`Bearer ${postResult.data.token}`)
                setTimeout(()=>{navigate("/blogs")},2000)
            }           
        }
        catch(err:any){
            console.log(err)
            if(err.response.status===400){
                toast.error("Invalid credentials",{duration:2000})   
            }
        }
    }
    const navigate =useNavigate()

    const [postInputs,setPostInputs]= useState({
        username:"",
        password:""
    })

    return (
        <div className="grid grid-cols-2 h-screen font-sans">
            <div className="flex flex-col justify-center items-center col-span-2 md:col-span-1">
            <div className="text-3xl mb-2 font-bold"> Login to your Account</div>
            <div className="text-sm mb-4 font-light text-gray-500"> Don't have an account? <button onClick={()=>navigate("/signup")} className="hover:underline">Signup</button> </div>
                <div className="w-[50%]">
                    <FormsComponent 
                        onChange={(e)=>{
                            setPostInputs(c=>({
                                ...c,
                                username:e.target.value
                            }))
                        }}
                        label="Username" 
                        type="text" 
                        placeholder="m@example.com"    
                    />
                    <FormsComponent 
                        onChange={(e)=>{
                            setPostInputs(c=>({
                                ...c,
                                password:e.target.value
                            }))
                        }}
                        label="Password" 
                        type="password" 
                        placeholder=""    
                    />
                    <div>
                        <Toaster richColors/>
                        <Button onClick={onClickHandler} label="Log in"/>
                    </div>
                    
                </div>
            </div>
            
            {/* Quotation Component */}

                <div className="flex bg-[#F3F4F6] justify-center items-center col-span-2 md:col-span-1">
                    <div className="m-20">
                        <div className="text-xl font-bold mb-3">
                            "The customer service I recieved was exceptional. The support team went above and beyond to address my concerns"
                        </div>
                        <div className="font-semibold">Jules Winnfield</div>
                        <div className="text-sm font-light">CEO, Acme Inc</div>
                    </div>
                </div>
            
        </div>
    );
}

