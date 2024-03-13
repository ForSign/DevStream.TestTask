import React, {useState} from 'react';
import TosItem from "./TosItem";
import myData from "../test.json";

const Tos = () => {

    const [terms, setTerms] = useState(myData.terms_of_use.paragraphs)

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
            <button className="button">
                Click Me!
            </button>
        </div>
    );
};

export default Tos;