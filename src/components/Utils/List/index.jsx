import React from 'react';

import './style.css';

const List = props => {
    return (
        <section className="app-list">
            <ul>
                {props.listData.map(datum => (
                    <li key={datum.id}
                        //    onClick={props.onRemoveItem.bind(this, datum.id)}
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
                ))}
            </ul>
        </section>
    );
};

export default List;
