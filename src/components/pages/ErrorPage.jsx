import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>

            <h1 className='text-6xl font-bold text-gray-700 mb-4'>Error 404: Congrats! You've uncovered the vast emptiness of the internet.</h1>

            <p className='text-xl text-gray-700 mb-8'>Sadly, there's nothing here... unless you were searching for disappointment. Carry on! Let's go back to what actually works and fix this!</p>

            <Link to="/" className="btn btn-neutral text-white px-6 py-2 rounded-none hover:bg-purple-600">
                Go Back Home
            </Link>
            
        </div>
    );
};

export default ErrorPage;