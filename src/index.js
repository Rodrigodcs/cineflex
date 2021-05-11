import ReactDOM from "react-dom";
import Main from "./Components/Main/Main"

export default function App(){
    return (
        <Main/>
    );
} 

ReactDOM.render(<App/>, document.querySelector(".root"));