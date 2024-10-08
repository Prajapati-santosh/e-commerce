import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import TempHeader from './components/temp-header/TempHeader';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoute from './AppRoute/AppRoute';

function App() {
  return (
    <div className="App">
      <TempHeader/>

      <Header/>

      <AppRoute/>

      <Footer/>

      {/* <SearchBar/> */}

    </div>
  );
}

export default App;
