import React, {useState, useRef, useMemo, useEffect, useReducer} from 'react';
import './style.css';

import List from "../../Utils/List";
import LoadingIndicator from "../../Utils/LoadingIndicator";
import {baseUrl} from '../../../constants/baseUrl';
import useHttp from "../../../utils/hooks/http";

const requisitionReducer = (currentRequisition, action) => {
    switch (action.type) {
        case 'SET':
            return action.requisitions;
        case 'ADD':
            return [...currentRequisition, action.requisition];
        case 'DELETE':
            return currentRequisition.filter(ig => ig.id !== action.id);
        default:
            throw new Error('Should not get there');
    }
};

const locationTips = [
    {title: '南港'},
    {title: '內湖'},
    {title: '信義'},
    {title: '松山'},
    {title: '大安'},
];
const categoryTips = [
    {title: '工程師'},
    {title: '作業員'},
    {title: '高薪家教'},
];

const dummyRequisitionData = [
    {
        id: 1,
        location: '信義',
        category: '網路管理員'
    },
    {
        id: 2,
        location: '信義',
        category: '網路管理員'
    },
    {
        id: 3,
        location: '信義',
        category: '網路管理員'
    },
    {
        id: 4,
        location: '信義',
        category: '網路管理員'
    }, {
        id: 5,
        location: '信義',
        category: '網路管理員'
    },
    {
        id: 6,
        location: '信義',
        category: '網路管理員'
    },
    {
        id: 7,
        location: '信義',
        category: '網路管理員'
    },

];

const dummyPostRequisitionData = JSON.stringify({
    location: '信義區',
    category: '前端工程師',
});

const SearchRequisition = (props) => {

    const {data, sendRequest, error, isLoading, reqIdentifier} = useHttp();
    const [requisitions, dispatch] = useReducer(requisitionReducer, []);
    const [filteredLocation, setFilteredLocation] = useState('');
    const [filteredCategory, setFilteredCategory] = useState('');
    const inputLocationRef = useRef();
    const inputCategoryRef = useRef();


    const fetchRequisitions = async () => {
        let queryString = '';

        if (filteredLocation.length > 0) queryString += `?orderBy="location"&equalTo="${filteredLocation}"`;
        if (filteredCategory.length > 0) queryString += `?orderBy="category"&equalTo="${filteredCategory}"`;

        sendRequest(`${baseUrl}/requisitions.json` + queryString, 'GET', null, 'FETCH_REQUISITIONS')
    };

    useEffect(() => {
        /**
         * Sending request to server
         * **/

        console.log('input ref triggered');


        // async function fetchInitData() {
        // let queryString = '';

        // if (filteredLocation.length > 0) queryString += `?orderBy="location"&equalTo="${filteredLocation}"`;
        // if (filteredCategory.length > 0) queryString += `?orderBy="category"&equalTo="${filteredCategory}"`;

        sendRequest(`${baseUrl}/requisitions.json`, 'GET', null, 'FETCH_REQUISITIONS')
        // }
        //
        // fetchInitData();

        // dispatch({type: 'SET', requisitions: dummyRequisitionData})

    }, [inputLocationRef, inputCategoryRef, sendRequest]);

    useEffect(() => {
        /**
         * Retrieve data changed from httpState
         * **/

        if (isLoading || error || !data) return;

        if (reqIdentifier === 'FETCH_REQUISITIONS') {
            let loadedData = [];
            for (let key in data) {
                loadedData.push({
                    id: key,
                    ...data[key],
                })
            }
            dispatch({type: 'SET', requisitions: loadedData})
        }

    }, [data, error, isLoading, reqIdentifier]);


    const locationToolbar = useMemo(() => {
        return locationTips.map(tip => (
            <div className="button">
                {tip.title}
            </div>
        ))
    }, [locationTips]);

    const categoryToolbar = useMemo(() => {
        return categoryTips.map(tip => (
            <div className="button">
                {tip.title}
            </div>
        ))
    }, [categoryTips]);

    const categoryList = useMemo(() => <List listData={requisitions}/>, [requisitions]);

    const testPostRequisition = async () => {
        const response = await fetch(`${baseUrl}/requisitions.json`,
            {
                method: 'POST',
                body: dummyPostRequisitionData,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const responseData = await response.json();
        console.log(responseData);
    };

    return (
        <div className="search-job-container">

            <h1>關鍵字搜尋職缺</h1>

            <div className="search-input">
                <label>依地點</label>
                <input placeholder="新北, 信義, 松山...." type="text"
                       value={filteredLocation} onChange={e => setFilteredLocation(e.target.value)}
                       ref={inputLocationRef}/>
                <div className="tip-buttons__actions">
                    {locationToolbar}
                </div>
            </div>

            <div className="search-input">
                <label>依職缺</label>
                <input placeholder="軟體工程師, 家教, 網路管理員...." type="text"
                       value={filteredCategory} onChange={e => setFilteredCategory(e.target.value)}
                       ref={inputCategoryRef}/>
                <div className="tip-buttons__actions">
                    {categoryToolbar}
                </div>
            </div>

            <div className="search-job-container__actions">
                <button type="submit" onClick={testPostRequisition}>Go!</button>
                {isLoading && <LoadingIndicator/>}
            </div>

            <h2>搜尋結果</h2>

            {categoryList}

        </div>
    );
};

export default SearchRequisition;
