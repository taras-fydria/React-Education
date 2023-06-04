import {useCallback, useState} from "react";
import {ApplyData, RequestConfig, UseHttp} from "../types";


const useHttp = (): UseHttp => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const sendRequest = useCallback(async (requestConfig: RequestConfig, applyData: ApplyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ?? null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data)
        } catch (err: any) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}


export default useHttp