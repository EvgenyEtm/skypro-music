import "./App.css";
import Bar from "./components/Bar/Bar.jsx";
import Navigation from './components/Navigation/navigation.jsx';
import Sidebar from "./components/Sidbar/Sidebar.jsx";
import TrackList from "./components/TrackList/Track.jsx";
// import logo from './logo.svg';


function App() {
  return (
    <div className="wrapper">
  <div className="container">
    <main className="main">
        <Navigation/>
        <TrackList/>
        <Sidebar/>
    </main>
    <Bar/>
    <footer className="footer"></footer>
    </div>
    </div>
    
);
}

export default App;
