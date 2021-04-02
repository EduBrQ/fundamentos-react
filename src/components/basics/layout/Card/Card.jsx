import React from 'react';
import "./Card.scss";

const card = (params) => {
    return (
        <div className="Card">
            <div className="Title">{params.title}</div>
            <div className="Content">
                {params.children}
            </div>
        </div>
    );
};

export default card;