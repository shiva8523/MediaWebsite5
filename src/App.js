import './App.css';
import { useState } from 'react';
import MovieDetails from './Components/MovieDetails';
import Github from './Components/Github';




function App() {

  const [github, setgithub] = useState([]);
  const [movie, setMovie] = useState([])
  const [bollywoodmovie, setBollyWoodMovie] = useState([])
  const [hollywoodmovie, setHollyWoodMovie] = useState([])


  let movieDetailsFromServer = async () => {

    let movieDetails = await fetch("https://services.brninfotech.com/tws/MovieDetails.php?mediaType=movies");
    let jsonObject = await movieDetails.json();
    console.log(jsonObject)
    let woodDetails = jsonObject.filter((object) => {
      if (object.industry === "Tollywood") {
        return true;
      }

    })
    setMovie(woodDetails)
    let woodBollyDetails = jsonObject.filter((object) => {
      if (object.industry === "Bollywood") {
        return true;
      }

    })
    setBollyWoodMovie(woodBollyDetails)
    /* HollyWood*/
    let woodHollyDetails = jsonObject.filter((object) => {
      if (object.industry === "Hollywood") {
        return true;
      }

    })
    setHollyWoodMovie(woodHollyDetails)


  }


  /*GitHub User*/
  let movieDetailsFromGithub = async () => {

    let userDetails = await fetch("https://api.github.com/users");
    let jsonObject1 = await userDetails.json();
    console.log(jsonObject1)
    setgithub(jsonObject1)

  }



  let onClickForMovie = () => {
    movieDetailsFromServer();
  }
  let onClickForUSer = () => {
    movieDetailsFromGithub();
  }


  return (
    <div className="App">
      <h3>Tollywood Movie</h3>
      {movie.map((object) => {
        return <MovieDetails details={object} />
      })}

      <h3>Bollywood Movie</h3>

      {bollywoodmovie.map((object) => {
        return <MovieDetails details={object} />
      })}

      <h3>Hollywood Movie Details</h3>

      {hollywoodmovie.map((object) => {
        return <MovieDetails details={object} />
      })}


      <h3>Github Details</h3>
      {github.map((object1) => {
        return <Github details={object1} />
      })}

      <button type="button" onClick={() => {
        onClickForMovie();
      }}>MovieDetails</button>
      <button type="button" onClick={() => {
        onClickForUSer();
      }}>Github</button>

    </div>
  );
}

export default App;
