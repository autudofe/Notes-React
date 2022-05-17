import './App.css';
import NotesTable from "./components/NotesTable/NotesTable";
import SummaryTable from "./components/SummaryTable/SummaryTable";
import ModalWindow from "./components/Form/ModalWindow";
import {useState} from "react";


function App() {

    const [modal, setModal] = useState(false);

    return (
        <div className="App">
            <NotesTable/>
            <SummaryTable/>
            <ModalWindow visible={modal} setVisible={setModal}/>
        </div>
    );
}

export default App;
