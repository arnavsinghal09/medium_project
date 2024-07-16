import AvatarComponent from "./AvatarComponent"

interface AuthorInfo {
    authorName:string
    phrase:string
}


export const AuthorDetails = ({authorName,phrase}:AuthorInfo) => {
    const nameArr = authorName.split(' ')
    const initials = (nameArr[0]?.charAt(0) || '') + (nameArr[1]?.charAt(0) || '')
    return (
        <div className="flex flex-col justify-center m-5">
        <div className="mx-5">Author</div>
        <div className="flex items-center">
            <div className="flex justify-center m-5">
                <AvatarComponent text={initials} size="sm"/>
            </div>
            <div className="flex flex-col justify-center space-y-1">
                <div className="text-xl font-bold">{authorName}</div>
                <div className="font-light text-gray-500 text-sm">
                    {phrase}
                </div>
            </div>
        </div>
        </div>
    )
}
