import React from 'react';

const TosItem = (props) => {
    // Tos element that fit json pattern
    return (
        <div className="term">
            <div className="term__content">
                <strong className="term__header">{props.term.index}. {props.term.title}</strong>
                <div className="term__body">
                    {props.term.content}
                </div>
            </div>
        </div>
    );
};

export default TosItem;