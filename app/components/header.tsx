"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>;
    }

    return (
        <header className=" text-black">
            <div className=" container mx-auto flex justify-between items-center p-4">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <Image src="/logo.svg" alt="Yoda Shop Logo" width={50} height={50} />
                        <span className="text-base">Yoda shop</span>
                    </div>
                </Link>
                <nav className="flex justify-center items-center bg-gray-200 py-2 rounded-xl mx-auto w-max">
                    <Link href="/characters">
                        <span className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition duration-300">Персонажи</span>
                    </Link>
                    <Link href="/planets">
                        <span className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition duration-300">Планеты</span>
                    </Link>
                    <Link href="/starships">
                        <span className="px-6 py-2 text-gray-700 font-semibold hover:text-gray-900 transition duration-300">Корабли</span>
                    </Link>
                </nav>
                <div>
                    <span className="font-bold"><Link href="https://www.nfactorial.live/">in!</Link></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
