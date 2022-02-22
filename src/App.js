import React,{useEffect} from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import { AppRouting } from './router/App.routing';

function getToken() {
  return sessionStorage.getItem('token');
}

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    const token = getToken();
    if(!token) {
      navigate('/login');
    }
  },[])

  return (
    <div className="App">
        <AppRouting />
    </div>
  );
}

export default App;
