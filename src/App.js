import './App.css';
import MovieDetails from './Components/MovieDetails';
import {useEffect,useState} from "react";


function App() {

  const [movieTollywood, setMovieTollywood] = useState([]);
  const [movieBollywood, setMovieBollywood] = useState([]);
  const [movieHollywood, setMovieHollywood] = useState([]);
 
 
  useEffect(() => {
    movieDetailsFromServer();
  },[])
 
  

  


  let options={
    method:"POSt"
  }
  
  let movieDetailsFromServer=async ()=>{
    let movieDetails=await fetch("https://services.brninfotech.com/tws/MovieDetails.php?mediaType=movies",options)
    let jsonObject=await movieDetails.json();
    let tollywoodArr=jsonObject.filter((object)=>{
      if(object.industry==="Tollywood"){
        return true;
      }
    })
    setMovieTollywood(tollywoodArr);

    let bollywoodArr=jsonObject.filter((object)=>{
      if(object.industry==="Bollywood"){
        return true;
      }
    })
    setMovieBollywood(bollywoodArr)

    let hollywoodArr=jsonObject.filter((object)=>{
      if(object.industry==="Hollywood"){
        return true;
      }
    })
    setMovieHollywood(hollywoodArr)
  }

  return (
    <div className="App">
    <h1 style={{color:"red"}}>MovieDetails Through Server,ArrayMethos,UseEffect,UseState</h1>
    <h3>Tollywood</h3>
     {movieTollywood.map((movieObj)=>{
      
     return <MovieDetails  details={movieObj}/>

    })}

<h3>Bollywood</h3>
     {movieBollywood.map((movieObj)=>{
      
     return <MovieDetails  details={movieObj}/>

    })}

<h3>Hollywood</h3>
     {movieHollywood.map((movieObj)=>{
      
     return <MovieDetails  details={movieObj}/>

    })}


    
    
    
    </div>
  );
}

export default App;
