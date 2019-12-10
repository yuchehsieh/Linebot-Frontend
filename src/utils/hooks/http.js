import {useReducer, useCallback} from 'react';

const initialState = {
    loading: false,
    error: null,
    data: null,
    // extra: null,
    passedIdentifier: null
};

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return {loading: true, error: null, data: null, passedIdentifier: action.passedIdentifier};
        case 'GET':
            return {...currentHttpState, loading: false, data: action.responseData};
        case 'ERROR':
            return {loading: false, error: action.error};
        case 'CLEAR':
            return initialState;
        default:
            throw new Error('Should not be reached');
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

    const sendRequest = useCallback(async (url, method, body, passedIdentifier) => {
        dispatchHttp({type: 'SEND', passedIdentifier});
        try {
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const responseData = await response.json();
            dispatchHttp({type: 'GET', responseData: responseData});
        } catch (e) {
            dispatchHttp({type: 'ERROR', error: 'Terrible Fail!!'});
        }
    }, []);

    return {
        isLoading: httpState.loading,
        error: httpState.error,
        data: httpState.data,
        reqIdentifier: httpState.passedIdentifier,
        // reqExtra: httpState.extra,
        sendRequest: sendRequest, /** action **/
        clear: clear, /** action **/
    }
};

export default useHttp;