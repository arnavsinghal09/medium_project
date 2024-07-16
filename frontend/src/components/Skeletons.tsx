
function Skeletons() {
  return (
    <div className="m-5 p-5 flex flex-col border-b-2 border-[#F3F3F3]">
        <div className="flex space-x-4 items-center">
            <div className="h-10 bg-gray-200  rounded-full  w-10 mb-4"></div>
            <div className="h-2.5 bg-gray-200  rounded-full w-full max-w-sm mb-4"></div>
        </div>
        
        <div className="h-2 bg-gray-200 rounded-full w-full max-w-2xl mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full max-w-3xl mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full w-full max-w-2xl  max-w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  w-full max-w-2xl mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  max-w-sm"></div>
        <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Skeletons
