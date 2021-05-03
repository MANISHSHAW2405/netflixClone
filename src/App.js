
import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js'
import Banner from './Banner.js';
import Nav from './Nav.js';

function App() {
  return (
    <div className="App">
      
    <Banner />
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
     
     isLargeRow={true}/>
     <Row title="Tranding now" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

     <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies}/>
     
     <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies}/>

     <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies}/>

     <Row title="Documanteries" fetchUrl={requests.fetchDocumentaries}/>
     
     
     
    </div>
  );
}

export default App;
