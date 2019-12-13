import React, {Fragment, useMemo, useState} from 'react';
import './style.css';
import {useParams} from 'react-router-dom';


import img_kindergarten from '../../../assets/kindergarten.jpeg';
import img_engineer from '../../../assets/engineer.jpg';
import img_operator from '../../../assets/semiconductor.jpg';
import svg_tag from '../../../assets/tag.svg';

const dummyData = [
    {
        requisitionName: '半導體作業員',
        requisitionLocation: '內湖區',
        requisitionDesc: [
            '1. 負責客戶設備維修、保養及故障排除，診斷並解決設備問題',
            '2. 建立並維持良好客戶關係',
            '3. 負責或參與產能利用率提升、成本管理等專案',
            '4. 遵守所有工安程序及規範',
        ],
        requisitionImg: img_operator,
    },
    {
        requisitionName: '資深前端工程師',
        requisitionLocation: '信義區',
        requisitionDesc: [
            '1. 具有強烈視覺美感及創意思維，並充滿熱情，喜歡嘗試新事物。',
            '2. 具網頁開版能力，能獨立作業。',
            '3. 熟RWD響應式網頁設計。',
            '4. 善於團隊合作、討論溝通，及掌控案件進度。',
            '5. 有完整網站製作經驗',
        ],
        requisitionImg: img_engineer,
    },
    {
        requisitionName: '專業英文家教老師',
        requisitionLocation: '南港區',
        requisitionDesc: [
            '1. 負責教學活動規劃與執行。',
            '2. 訂定教學目標、課程範圍、授課內容。',
            '3. 準備課程教材、課程資料以及課後作業等。',
            '4. 依據教學目標授課，並評估學生學習狀況以調整授課進度。',
            '5. 批改作業及測驗輔導。',
        ],
        requisitionImg: img_kindergarten,
    },
];

const switchDummyData = (id) => {
    switch (id) {
        case 'operator':
            return dummyData[0];
        case 'engineer':
            return dummyData[1];
        case 'tutor':
            return dummyData[2];
        default:
            return null;
    }
};

const RequisitionDetail = (props) => {

    const {id} = useParams();
    const [isFavorite, setIsFavorite] = useState(false);
    
    const targetDatum = switchDummyData(id);

    const requisitionNameRow = useMemo(() => <InformationRow title="職缺名稱"
                                                             name={targetDatum.requisitionName}/>, [targetDatum]);
    const requisitionLocationRow = useMemo(() => <InformationRow title="工作地點"
                                                                 name={targetDatum.requisitionLocation}/>, [targetDatum]);
    const requisitionDescRow = useMemo(() => <BLPDescriptionRow title="職缺描述"
                                                                descArray={targetDatum.requisitionDesc}/>, [targetDatum]);

    return (
        <div className="requisition-detail-container">

            <img src={targetDatum.requisitionImg} alt=""/>

            {requisitionNameRow}
            {requisitionLocationRow}
            {requisitionDescRow}

            <div
                className="favor-button"
                onClick={() => setIsFavorite(prevState => !prevState)}
                style={{background: isFavorite && 'darkseagreen'}}
            >
                我有興趣
            </div>

        </div>
    );

};

const InformationRow = ({title, name}) => (
    <div className="row">
        <div className="title-wrapper">
            <img src={svg_tag} alt=""/>
            <h4>{title}</h4>
        </div>
        <p>{name}</p>
    </div>
);

const BLPDescriptionRow = ({title, descArray}) => (
    <div className="row" style={{display: 'block'}}>
        <div className="title-wrapper">
            <img src={svg_tag} alt=""/>
            <h4>{title}</h4>
        </div>

        <p>
            {
                descArray.map((desc, iteration) => <Fragment key={iteration}>
                    {desc}<br/>
                </Fragment>)
            }
        </p>
    </div>
);

export default RequisitionDetail;
