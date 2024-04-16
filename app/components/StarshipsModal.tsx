import React from 'react';

const StarshipsModal = ({ starship, onClose }) => {
    if (!starship) return null;

    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-[#FECA06] text-white rounded-lg overflow-auto max-w-2xl w-full p-6 space-y-4" onClick={e => e.stopPropagation()}>
                <h2 className="text-2xl font-semibold">{starship.name}</h2>
                <ul className="space-y-2">
                    <li><strong>Model:</strong> {starship.model}</li>
                    <li><strong>Manufacturer:</strong> {starship.manufacturer}</li>
                    <li><strong>Cost in credits:</strong> {starship.cost_in_credits}</li>
                    <li><strong>Length:</strong> {starship.length}</li>
                    <li><strong>Max atmosphering speed:</strong> {starship.max_atmosphering_speed}</li>
                    <li><strong>Crew:</strong> {starship.crew}</li>
                    <li><strong>Passengers:</strong> {starship.passengers}</li>
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

export default StarshipsModal;
