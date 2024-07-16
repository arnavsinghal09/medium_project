function AvatarComponent({text,size}:{text:string, size:string}) {
  return (
    <div id="avatar">
        <div className={`relative inline-flex items-center justify-center ${size === "sm"? "h-6 w-6": "h-10 w-10"} overflow-hidden bg-violet-200 rounded-full`} >
        <span className={`m-1 font-large ${size==="sm"?"text-xs":"text-md"} text-gray-600`}>{text}</span>
     </div>
  </div>  
  )
}

export default AvatarComponent
