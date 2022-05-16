import { useSession, signIn, signOut } from "next-auth/react"

export default function User() {
    const { data: session } = useSession();

    if(session){
        return (
            <button onClick={() => signOut()}><img src={session.user.image} /></button>
        )
    }
    return (
        <>
            <button onClick={signIn}>Sign in</button>
        </>
    )

}