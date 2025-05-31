import { useState, useEffect } from 'react';

export const useFetchUnique = (fetchFunction, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);
        fetchFunction()
            .then(result => {
                if (isMounted) setData(result);
            })
            .catch(err => {
                if (isMounted) setError(err.message);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, deps);

    return { data, loading, error };
};
