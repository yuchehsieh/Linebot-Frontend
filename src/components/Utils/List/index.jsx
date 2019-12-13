import React from 'react';
import {Link} from "react-router-dom";

import './style.css';
import routePath from '../../../constants/path';

const List = props => {
    return (
        <section className="app-list">
            <ul>
                {props.listData.map((datum, iteration )=> (
                    <Link to={`${routePath.requisitionDetail}/${datum.category}`} key={iteration}>
                        <li
                            key={iteration}
                            // key={datum.id}
                            // onClick={props.onRemoveItem.bind(this, datum.id)}
                        >
                            <div className="left">
                                <span>{datum.location}</span>
                                <span>, </span>
                                <span>{datum.category}</span>
                            </div>
                            {/*<div>*/}
                            {/*    5人應徵*/}
                            {/*</div>*/}
                        </li>
                    </Link>
                ))}
            </ul>
        </section>
    );
};

export default List;
