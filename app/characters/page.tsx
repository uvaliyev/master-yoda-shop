"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/pagination';
import CharacterModal from '../components/CharacterModal';
import Image from 'next/image';

interface Character {
    id: number;
    name: string;
    image: string;
}

const CharactersPage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10);
    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCharacters = async () => {
            const res = await axios.get('https://akabab.github.io/starwars-api/api/all.json');
            setCharacters(res.data);
            setFilteredCharacters(res.data);
        };

        fetchCharacters();
    }, []);

    useEffect(() => {
        const results = characters.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCharacters(results);
        setCurrentPage(1);
    }, [searchTerm, characters]);

    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacters = filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);
    const openModal = (character: Character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-8 py-8">
            <div className="flex items-center bg-[#E03D31] rounded-lg overflow-hidden mb-8">
                <div className="flex-none ml-4">
                    <Image
                        src="/characterofwoman.svg"
                        width={150}
                        height={150}
                        alt="Planet"
                    />
                </div>
                <div className="flex-grow flex flex-col justify-center items-center px-4">
                    <h1 className="text-4xl font-bold text-white mb-4">Персонажи</h1>
                    <input
                        type="search"
                        placeholder="Быстрый поиск персонажа"
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
                {currentCharacters.map(character => (
                    <div
                        key={character.id}
                        className="bg-red-500 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105"
                        onClick={() => openModal(character)}>
                        <img src={character.image} alt={character.name} className="bg-gray-100 w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-white">{character.name}</h3>
                            <h4 className="text-lg text-white font-semibold">{"$600"}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                charactersPerPage={charactersPerPage}
                totalCharacters={filteredCharacters.length}
                paginate={paginate}
            />
            {selectedCharacter && <CharacterModal character={selectedCharacter} onClose={closeModal} />}
        </div>
    );
};

export default CharactersPage;
