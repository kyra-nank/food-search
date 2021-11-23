import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const useResults = function () {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async function (searchTerm) {

        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Toronto'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong ):');
        }
    }


    // to populate some results upon loading the application
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage]
}

export default useResults;