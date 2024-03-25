import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route element={<Header />}>
                <Route path="/" element={<p>/</p>} />
                <Route path="/start" element={<p>Start</p>} />
                <Route path="/index" element={<p>index</p>} />
            </Route>
        </Routes>
    );
}

function Header() {
    return (
        <div>
            <Link to={"/"}>/</Link>
            <hr />
            <Link to={"/start"}>/go to start</Link>
            <hr />
            <Link to={"/index"}>/index</Link>
            <hr />
            <Outlet />
        </div>
    );
}

export default App;

