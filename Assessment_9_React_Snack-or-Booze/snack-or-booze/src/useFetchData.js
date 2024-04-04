import React, { useState, useEffect } from 'react';
import SnackOrBoozeApi from './Api';


// my custome hook for fetching api data
function useFetchData(endpoints) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await SnackOrBoozeApi[endpoints]();
                setData(result);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [endpoints]);
  return { data, isLoading, error };
}

export default useFetchData;
