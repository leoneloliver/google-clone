import React from 'react';
import Header from '../../components/Header';
import {getProviders, signIn} from "next-auth/react";

export default function signin({providers}) {
    return (
        <>
            <Header />
            <div className="">
                {Object.values(providers).map(provider => (
                    <div className="" key={provider.name}>
                       
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo"/>
                        <p>This Website is created for learning purposes</p>
                        <button onClick={() => signIn(provider.id, {callbackUrl: '/'})}>Sign in with {provider.name}</button>
                    </div>
                ))}
            </div>
        </>
        
    )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return {
        props: { providers },
    };
}