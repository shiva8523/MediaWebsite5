import React from 'react';


export default function MovieDetails(props) {
  return (
    <div className="movieDetails">
        
        <img src={'https://services.brninfotech.com/tws/'+props.details.posters[0]} alt={'https://services.brninfotech.com/tws/'+props.details.posters[0]}/>

        <table>
  <tbody>
    <tr>
      <td>Movie Name</td>
      <td>{props.details.title}</td>
    </tr>
    <tr>
      <td>Actors</td>
      <td>{props.details.actors.join(" ,")}</td>
    </tr>
    <tr>
        <td>Industry</td>
        <td>{props.details.industry}</td>
    </tr>
    <tr>
        <td>Music</td>
        <td><audio controls>
          <source src={'https://services.brninfotech.com/tws/'+props.details.songs[0]} type="audio/ogg"/>
          </audio></td>
    </tr>
  </tbody>
</table>



    </div>
  )
}
