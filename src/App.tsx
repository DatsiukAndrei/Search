import {FC} from 'react'
import Main from "./components/Main";
import {BrowserRouter} from "react-router-dom";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Main/>
        </BrowserRouter>
    )
}
export default App
