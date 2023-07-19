import React from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import RankUserInfo from './components/RankUserInfo/RankUserInfo';
import './App.css';

function App() {
  return (
    <div className="App">
    <ParticlesBg type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <RankUserInfo />
      <ImageLinkForm />
       {/*
      <FaceRecognition />*/} 
    </div>
  );
}

export default App;
