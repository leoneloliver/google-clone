import React from 'react';
import Header from '../../components/Header';
import {getProviders, signIn} from "next-auth/react";

export default function signin({providers}) {
    return (
        <>
            <Header />
            <div className="mt-40">
                {Object.values(providers).map(provider => (
                    <div className="flex flex-col items-center" key={provider.name}>
                        <img className="w-52 object-cover" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo"/>
                        <p className='text-sm italic my-10 text-center'>This Website is created for learning purposes</p>
                        <button onClick={() => signIn(provider.id, {callbackUrl: '/'})} className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500 hover:shadow-md">Sign in with {provider.name}</button>
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