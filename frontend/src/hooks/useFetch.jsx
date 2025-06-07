import { useState, useEffect } from 'react';

export const useFetch = (fetchFunction, params = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            setData(null);
            setError(null);
            fetchFunction(params)
            .then(result => {
                setData(result);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
        };
        fetchData();
    }, [fetchFunction, params]);

    return { data, loading, error };
};