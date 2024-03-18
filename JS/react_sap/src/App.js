import React, {useEffect, useState} from 'react';
import './styles/App.css';
import Tos from "./components/Tos";
import TosModal from "./components/UI/TosModal/TosModal";
import Galley from "./components/Galley";
import rootConfig from "./config.json";

function App() {

    const [modal, setModal] = useState(true);
    const [data, setData] = useState(null);

    const apiUrl = rootConfig.host + rootConfig.jsonPath;

    const acceptTos = () => {
        setModal(false);

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
                {!modal === true
                    ? <Galley host={rootConfig.host} jsonData={data}/>
                    : <></>
                }
            </div>
        );
}

export default App;
