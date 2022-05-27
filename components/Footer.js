import React from 'react';

export default function Footer() {
    return (
        <footer className="absolute bottom-0 text-sm text-gray-600 p-6 text-center w-full">
            <p>Copyright &copy; {new Date().getFullYear()} Leonel Oliveira</p>
        </footer>
    )

}