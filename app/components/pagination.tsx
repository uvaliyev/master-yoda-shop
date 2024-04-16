"use client"

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center items-center space-x-2 my-4">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => paginate(number)}
                    className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    {number}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
