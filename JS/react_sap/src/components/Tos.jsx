import React, {useState} from 'react';
import TosItem from "./TosItem";
import AcceptButton from "./UI/Button/AcceptButton";

const Tos = ({acceptTos, jsonData}) => {

    const [terms, setTerms] = useState(jsonData.terms_of_use.paragraphs)

    // Main Tos component
    return (
        <div>
            <h1>Terms Of Service</h1>
            <hr className="pill"/>
            {terms.sort((a, b) => a.index > b.index).map((term) =>
                <div>
                    <TosItem term={term} key={term.index}/>
                    <hr className="pill"/>
                </div>
            )}
            <AcceptButton onClick={acceptTos}>
                Accept
            </AcceptButton>
        </div>
    );
};

export default Tos;