
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbarsection/Navbar';
import Heading from './components/mainbody/Heading'; 
import Firstcard from './components/firstcard/Firstcard';
import Smallcards from './components/smallcards/Smallcards';
import Carousel from './components/carousel/Carousel';
import Solutions from './components/solutions/Solutions';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
     <Navbar />

  <Banner/>

  <Heading/>

 <Firstcard/>

 <Smallcards/>

<Carousel/>

<Solutions/>

<Footer/>
    </div>
  );
}

export default App;
