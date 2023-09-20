import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Lista=()=>{
    const [lista, setLista] = useState([{
        id:0,
        username:'',
        password:'',
        email:''
    }]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/users')
        .then((resp)=>{
            const datos = resp.data.users;
            setLista(datos);
            console.log(lista);
        })
        .catch((error)=>{
            alert('No podemos mostrarte los datos. Algo está fallando');
            console.log(error);
        })
    },[]);

 /* usersModel.findAll({attributes:['username','email']})
 .then(users=>{
     const resultados = JSON.stringify(users)
     document.write(resultados)
 }) */

    return (
        <>
            <h1>Lista de usuarios</h1>
            <ul>
                {lista.map((usuario)=>{
                    <li>{usuario.id}</li>
                })}
            </ul>



            <h1>Lista de posts</h1>
            <ul>
                {lista.map((post)=>{
                    <li>{post.id}</li>
                })}
            </ul>
        </>

    )
}