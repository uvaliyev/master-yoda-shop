"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/pagination';
import StarshipsModal from '../components/StarshipsModal';
import Image from 'next/image';
const StarshipsPage = () => {
    const [allStarships, setAllStarships] = useState([]);
    const [displayedStarships, setDisplayedStarships] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [starshipsPerPage] = useState(10);
    const [selectedStarship, setSelectedStarship] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchStarships = async () => {
            const res = await axios.get('https://swapi.dev/api/starships/');
            setAllStarships(res.data.results);
            setDisplayedStarships(res.data.results);
        };

        fetchStarships();
    }, []);

    useEffect(() => {
        const filteredStarships = allStarships.filter(starship =>
            starship.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setDisplayedStarships(filteredStarships);
        setCurrentPage(1);
    }, [searchTerm, allStarships]);

    const indexOfLastStarship = currentPage * starshipsPerPage;
    const indexOfFirstStarship = indexOfLastStarship - starshipsPerPage;
    const currentStarships = displayedStarships.slice(indexOfFirstStarship, indexOfLastStarship);

    const openModal = (starship) => {
        setSelectedStarship(starship);
    };

    const closeModal = () => {
        setSelectedStarship(null);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-8 py-8">
            <div className="flex items-center bg-[#FECA06] rounded-lg overflow-hidden mb-8">
                <div className="flex-none ml-4">
                    <Image
                        src="/characterofstarship.svg"
                        width={150}
                        height={150}
                        alt="Planet"
                    />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center px-4"> {/* Center content vertically and horizontally */}
                    <h1 className="text-4xl font-bold text-white mb-4">Корабль</h1>
                    <input
                        type="search"
                        placeholder="Быстрый поиск коробля"
                        className="px-4 py-2 border rounded-lg"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            maxWidth: '300px',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {currentStarships.map((starship, index) => (
                    <div key={index} className="bg-[#FECA06] rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => openModal(starship)}>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white">{starship.name}</h3>
                            <p className="text-white">{`Model: ${starship.model}`}</p>
                            <p className="text-white font-bold">$1500</p>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                itemsPerPage={starshipsPerPage}
                totalItems={displayedStarships.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {selectedStarship && <StarshipsModal starship={selectedStarship} onClose={closeModal} />}
        </div>
    );
};

export default StarshipsPage;
