import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import TempHeader from './components/temp-header/TempHeader';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <TempHeader/>
      <SearchBar/>
    </div>
  );
}

export default App;
