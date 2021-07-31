import React from 'react';
import './App.css';
import Row from './Row.js'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <h1>Hello this is sunidhi </h1>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTORIES" fetchUrl={requests.frtchDocumentaries}/>
    </div>
  );
}

export default App;