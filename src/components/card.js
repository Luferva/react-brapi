
export default function Card({quote}) {
    return (
        <div className="w-full max-w-64 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={ quote.logo } alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">{ quote.stock }</h5>
                <span className="text-sm text-gray-500">{ quote.name }</span>
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Visualizar</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-green-700 rounded-lg border border-gray-200 hover:bg-green-800 focus:z-10 focus:ring-4 focus:ring-gray-100">Adicionar</a>
                </div>
            </div>
        </div>
    );
}
