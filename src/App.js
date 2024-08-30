import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import Artists from './Components/artists/Artists';
import Info from './Components/info/Info';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
