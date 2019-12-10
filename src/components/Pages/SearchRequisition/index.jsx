import React, {useState, useRef, useMemo} from 'react';
import './style.css';
import List from "../../Utils/List";
import LoadingIndicator from "../../Utils/LoadingIndicator";

const ingredientsReducer = (currentIngredients, action) => {
    switch (action.type) {
        case 'SET':
            return action.ingredients;
        case 'ADD':
            return [...currentIngredients, action.ingredient];
        case 'DELETE':
            return currentIngredients.filter(ig => ig.id !== action.id);
        default:
            throw new Error('Should not get there');
    }
};


const SearchRequisition = (props) => {

    const [enteredLocation, setEnteredLocation] = useState('');
    const inputRef = useRef();

    const locationTips = [
        {title: '南港'},
        {title: '內湖'},
        {title: '信義'},
        {title: '松山'},
        {title: '大安'},
    ];
    const requisitionTips = [
        {title: '工程師'},
        {title: '作業員'},
        {title: '高薪家教'},
    ];

    const requisitionList = useMemo(() =>
            <List listData={[
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                }, {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },
                {
                    id: 1,
                    location: '信義',
                    requisition: '網路管理員'
                },


            ]}/>,
        []
    );

    return (
        <div className="search-job-container">

            <h1>關鍵字搜尋職缺</h1>

            <div className="search-input">
                <label>依地點</label>
                <input placeholder="新北, 信義, 松山...."/>
                <div className="tip-buttons__actions">
                    {
                        useMemo(() => {
                                return locationTips.map(tip => (
                                    <div className="button">
                                        {tip.title}
                                    </div>
                                ))
                            },[locationTips])
                    }
                </div>
            </div>

            <div className="search-input">
                <label>依職缺</label>
                <input placeholder="軟體工程師, 家教, 網路管理員...."/>
                <div className="tip-buttons__actions">
                    {
                        useMemo(() => {
                            return requisitionTips.map(tip => (
                                <div className="button">
                                    {tip.title}
                                </div>
                            ))
                        },[requisitionTips])
                    }
                </div>
            </div>

            <div className="search-job-container__actions">
                <button type="submit">Go!</button>
                <LoadingIndicator/>
                {/*{props.loading && }*/}
            </div>

            <h2>搜尋結果</h2>

            {requisitionList}

        </div>
    );
};

export default SearchRequisition;
