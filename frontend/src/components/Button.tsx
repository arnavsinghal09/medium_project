interface Props {
    label: string;
    onClick?: any
}


export function Button({label,onClick}:Props) {
  return (
    <button type="button" onClick={onClick} className="w-full text-white bg-gray-800 my-5 transition hover:-translate-y-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
    font-medium rounded-lg text-sm px-5 py-2.5 me-2  w-[250px]">{label}</button>
  )
}

