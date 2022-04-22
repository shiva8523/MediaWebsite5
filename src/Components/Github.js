import React from 'react';


export default function Github(props) {
    return (
        <div className="movieDetails">
           <img  src={props.details.avatar_url} alt="Avatar"/>
           
           
           <table>
                <tbody>
                    <tr>
                    <td>Login</td>
                        <td>{props.details.login}</td>
                    </tr>
                    <tr>
                        <td>node_id</td>
                        <td>{props.details.node_id}</td>
                    </tr>
                    <tr>
                        <td>id</td>
                        <td>{props.details.id}</td>
                    </tr>
                     <tr>
                         <td>Type</td>
                         <td>{props.details.type}</td>
                     </tr>

                    
                </tbody>
            </table>
        </div>
    )
}
