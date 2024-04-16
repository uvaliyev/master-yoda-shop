import React from 'react';

interface PlanetModalProps {
    planet: {
        name: string;
        climate: string;
        diameter: string;
        gravity: string;
        population: string;
    };
    onClose: () => void;
}

const PlanetModal: React.FC<PlanetModalProps> = ({ planet, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-[#282874] text-white rounded-lg overflow-auto max-w-2xl w-full p-6 space-y-4" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-semibold">{planet.name}</h2>
                <ul className="list-disc space-y-2">
                    <li><strong>Climate:</strong> {planet.climate}</li>
                    <li><strong>Diameter:</strong> {planet.diameter}</li>
                    <li><strong>Gravity:</strong> {planet.gravity}</li>
                    <li><strong>Population:</strong> {planet.population}</li>
                    {/* add other planet details here */}
                </ul>
                <button
                    className="mt-auto bg-white hover:bg-gray-300 rounded text-gray-800 py-2 px-4"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PlanetModal;
