import React from 'react';

const CharacterModal = ({ character, onClose }: { character: any, onClose: any }) => {
    if (!character) return null;

    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-[#E03D31] rounded-lg overflow-auto max-w-2xl w-full p-6 space-y-4" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-semibold text-white">{character.name}</h2>
                <div className="flex gap-6 ">
                    <img src={character.image} alt={character.name} className="w-40 h-60 object-cover flex-none rounded-md bg-gray-100" />
                    <div className="flex flex-col justify-between flex-grow">
                        <div>
                            <p className="text-white"><strong>Height:</strong> {character.height}</p>
                            <p className="text-white"><strong>Mass:</strong> {character.mass}</p>
                            <p className="text-white"><strong>Gender:</strong> {character.gender}</p>
                            <p className="text-white"><strong>Homeworld:</strong> {character.homeworld}</p>
                            <p className="text-white"><strong>Species:</strong> {character.species}</p>
                            <p className="text-white"><strong>Hair Color:</strong> {character.hairColor}</p>
                            <p className="text-white"><strong>Eye Color:</strong> {character.eyeColor}</p>
                            <p className="text-white"><strong>Skin Color:</strong> {character.skinColor}</p>
                            <p className="text-white"><strong>Cybernetics:</strong> {character.cybernetics}</p>
                        </div>
                        <button
                            className="mt-auto bg-white hover:bg-gray-300 rounded text-gray-800 py-2 px-4"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterModal;
