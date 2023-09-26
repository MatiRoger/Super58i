import React from 'react'
import { useState,useEffect } from 'react'

const ImagenHeroe = () => {
    const [Valor, setValor] = useState('')

    const buscarResultado= async () => {
        
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${searchText}`)
            const data = await response.json()
            console.log(data);
        }catch (error){
            console.log('ERROR')
        }
    }
    useEffect( () => {
        buscarResultado()
    },[])
  return (
    <>
        <div className="card mb-3">
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="buscar imagen" onChange={e => setValor(e.target.value)}/>
                <button className="btn btn-outline-success" type="submit" onClick={() => buscarResultado()}>Search</button>
                </form>
            </div>
        </nav>
            <div className="row g-0">
                <div className="col-md-4">
                <img src="" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ImagenHeroe