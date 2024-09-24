import './App.css';
import Clients from './components/Clients';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Clients />
            <Services />
            {/* <Portfolio /> */}
            <Contact />
            <Footer />
        </>
    );
}

export default App;
