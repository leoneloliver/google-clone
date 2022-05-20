import { useSession, signIn, signOut } from "next-auth/react"

export default function User() {
    const { data: session } = useSession();

    if(session){
        return (
            <button onClick={() => signOut()}><img src={session.user.image} alt="user-image" className="h-10 w-10 rounded-full hover:bg-gray-200 p-1 cursor-pointer"/></button>
        )
    }
    return (
        <>
            <button onClick={signIn} className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:brightness-105 hover:shadow-md">Sign in</button>
        </>
    )

}