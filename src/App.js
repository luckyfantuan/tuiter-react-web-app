import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ExploreComponent from "./tuiter/explore";
import HomeComponent from "./tuiter/home";
import PostSummaryList from "./tuiter/post-summary-list";
import PostList from "./tuiter/post-list";
import PostSummaryItem from "./tuiter/post-summary-list/post-summary-item";
import PostItem from "./tuiter/post-list/post-item";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
