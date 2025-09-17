import { useState } from 'react';
import { searchMovie } from '../api/searchMovie';
import { delay } from '../helpers/delay';
import { toast } from 'react-toastify';

export function useMovieSearch() {
    const [movies, setMovies] = useState({
        results: [],
        total: 0,
        totalPages: 0,
        currentPage: 1
    });

    const [searchParams, setSearchParams] = useState({
        query: '',
        type: '',
        year: ''
    });

    const [inProgress, setInProgress] = useState(false);

    const searchHandle = async ({ query, type, year }, page = 1) => {
        setSearchParams({ query, type, year });
        setInProgress(true);

        try {
            const results = await searchMovie(query, type, year, 'en-US', page);
            setMovies(results);
            console.log('Fetched page:', results.currentPage);
        } catch (err) {
            toast.error('Some error occurred, please try again later.');
            setMovies([]);
        } finally {
            await delay(1000);
            setInProgress(false);
        }
    };

    return {
        movies,
        searchParams,
        inProgress,
        searchHandle
    };
}