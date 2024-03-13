import React, {useState} from 'react';
import './styles/App.css';
import Tos from "./components/Tos";
import TosModal from "./components/UI/TosModal/TosModal";
import Galley from "./components/Galley";

function App() {

    const [modal, setModal] = useState(true);

    const acceptTos = () => {
        setModal(false);
    }

    return (
        <div className="App">
            <TosModal visible={modal}>
                <Tos acceptTos={acceptTos}/>
            </TosModal>
            <Galley/>
        </div>
    );
}

export default App;
