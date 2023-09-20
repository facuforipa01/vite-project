import { useState } from 'react';
import axios from 'axios';


export const App = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');




  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/users', { username, password, email })
      .then((resp) => {
        alert('Los datos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda');
        console.log(error);
      })
  }

  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [imagen, setImagen] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [userId, setUserId] = useState('');


  const handleSubmit2 = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/posts', { descripcion, fecha, imagen, ubicacion, userId })
      .then((resp) => {
        alert('Los posteos fueron cargados correctamente');
        console.log(resp);
      })
      .catch((error) => {
        alert('No anda el carga posteos');
        console.log(error);
      })
  }


  return (
    <>
      <br />
      <br />
      <br />
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
        <button type='submit'>Enviar</button>
        <br />
        <br />
        <br />
      </form>

      ---------------------------------------------------------------------------------------------------------------------------------

      <form action="" onSubmit={handleSubmit2}>
        <br />
        <br />
        <br />
        <label htmlFor="">descripcion: <input type="text" id="descripcion" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} /> </label>
        <br />
        <br />
        <br />
        <label htmlFor="">fecha: <input type="text" id="fecha" value={fecha} onChange={(event) => setFecha(event.target.value)} /></label>
        <br />
        <br />
        <br />
        <label htmlFor="">imagen: <input type="text" id="imagen" value={imagen} onChange={event => setImagen(event.target.value)} />
        </label>
        <br />
        <br />
        <br />
        <label htmlFor="">ubicacion: <input type="text" id="ubicacion" value={ubicacion} onChange={event => setUbicacion(event.target.value)} />
        </label>
        <br />
        <br />
        <br />
        <label htmlFor="">userId: <input type="number" id="userId" value={userId} onChange={event => setUserId(event.target.value)} />
        </label>
        <button type='submit'>Enviar</button>
      </form>
      <br />
      <br />
      <br />
    </>
  );
}
