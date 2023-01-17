import React from 'react';
import TodoContainer from './components/TodoContainer';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import AboutSinglePage from './pages/AboutSinglePage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<TodoContainer />}/>
        <Route path='/about'>
          <Route index element={<About />}/>
          <Route path=':id' element={<AboutSinglePage />}/>
        </Route>
        <Route path='*' element={<NotMatch />}/>
      </Routes>
    </>
  );
}

export default App;
