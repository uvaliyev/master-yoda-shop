"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/pagination';
import PlanetModal from '../components/PlanetModal';
import Image from 'next/image';

const PlanetsPage = () => {
    const [allPlanets, setAllPlanets] = useState([]);
    const [displayedPlanets, setDisplayedPlanets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [planetsPerPage] = useState(10);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPlanets = async () => {
            const res = await axios.get('https://swapi.dev/api/planets/');
            setAllPlanets(res.data.results);
            setDisplayedPlanets(res.data.results);
        };

        fetchPlanets();
    }, []);

    useEffect(() => {
        const results = searchTerm
            ? allPlanets.filter((planet) =>
                planet.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : allPlanets;

        setDisplayedPlanets(results);
        setCurrentPage(1);
    }, [searchTerm, allPlanets]);

    const indexOfLastPlanet = currentPage * planetsPerPage;
    const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
    const currentPlanets = displayedPlanets.slice(indexOfFirstPlanet, indexOfLastPlanet);

    const openModal = (planet) => {
        setSelectedPlanet(planet);
    };

    const closeModal = () => {
        setSelectedPlanet(null);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-8 py-8">

            <div className="flex items-center bg-[#282874] rounded-lg overflow-hidden mb-8">
                <div className="flex-none ml-4">
                    <Image
                        src="/characterofplanet.svg"
                        width={150}
                        height={150}
                        alt="Planet"
                    />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center px-4"> {/* Center content vertically and horizontally */}
                    <h1 className="text-4xl font-bold text-white mb-4">Планеты</h1>
                    <input
                        type="search"
                        placeholder="Быстрый поиск планеты"
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
                {currentPlanets.map((planet) => (
                    <div
                        key={planet.url}
                        className="bg-[#282874] rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105 p-4"
                        onClick={() => openModal(planet)}
                    >
                        <h3 className="text-lg font-semibold text-white">{planet.name}</h3>
                        <p className="text-white">Population: {planet.population}</p>
                        <p className="text-white font-bold">$40000000</p>
                    </div>
                ))}
            </div>
            <Pagination
                itemsPerPage={planetsPerPage}
                totalItems={allPlanets.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            {selectedPlanet && (
                <PlanetModal planet={selectedPlanet} onClose={closeModal} />
            )}
        </div>
    );
};

export default PlanetsPage;
