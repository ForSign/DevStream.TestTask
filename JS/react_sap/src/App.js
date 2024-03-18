import React, {useEffect, useState, useReducer} from 'react';
import './styles/App.css';
import Tos from "./components/Tos";
import TosModal from "./components/UI/TosModal/TosModal";
import Galley from "./components/Galley";
import rootConfig from "./config.json";
import AcceptButton from "./components/UI/Button/AcceptButton";

function App() {

    const [modal, setModal] = useState(true);
    const [data, setData] = useState(null);

    const apiUrl = rootConfig.host + rootConfig.jsonPath;

    // const [, forceUpdate] = useReducer(x => x + 1, 0);

    const acceptTos = async () => {
        setModal(false);
        // forceUpdate();
    }

    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);

    if (data !== null)
        return (
            <div className="App">
                <TosModal visible={modal}>
                    <Tos acceptTos={acceptTos} jsonData={data}/>
                </TosModal>
                {/* Require rerender canvas if conditional or hide buttons */}
                <Galley host={rootConfig.host} jsonData={data} displayBool={modal}/>
            </div>
        );
}

export default App;
