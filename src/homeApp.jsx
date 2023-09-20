import { useState } from 'react';
import axios from 'axios';


export const App = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');




  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/users',{username,password,email})
    .then((resp)=>{
      alert('Los datos fueron cargados correctamente');
      console.log(resp);
    })
    .catch((error)=>{
      alert('No anda');
      console.log(error);
    })
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">username: <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} /> </label>

        <br />
        <br />
        <br />
        <label htmlFor="">password: <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>

        <br />
        <br />
        <br />
        <label htmlFor="">Email: <input type="email" name="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>

        <br />
        <br />
        <button type='submit'>Enviar</button>


      </form>
    </>
  );
}
