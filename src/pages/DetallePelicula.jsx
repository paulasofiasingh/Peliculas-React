import {getUrl} from "../utils/conexionAPI.js"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import "./DetallePelicula.css"

export const DetallePelicula = ()=>{
    const [pelicula, setPelicula] = useState(null);
    const {peliculaId} = useParams();

    useEffect (() => {
    getUrl(`/movie/${peliculaId}`).then((data)=>{
        setPelicula(data);
    }); 
    }, [peliculaId]);

    //si pongo un id que no existe
    if(!pelicula){
        return null;
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

    return (
        <div className="contenedorDetalle">
            <img src={imgURL} alt={pelicula.title} className="col" />
            <div className="peliculaDetalle col">
        <p className="item">
          <strong>Titulo :</strong>
          {pelicula.title}
        </p>

        <p>
          <strong>Descripcion :</strong>
          {pelicula.overview}
        </p>

        <p>
          <strong>Generos: </strong>
          {pelicula.genres.map((genre) => genre.name).join(" - ")}
        </p>
        <p>
        <strong>Fecha Lanzamiento: </strong>
        {pelicula.release_date}
       </p>

       <p>
        <strong>Compañias productoras: </strong>
        {pelicula.production_companies.map ((company)=>company.name).join("/")}
       </p>
      </div>
    </div>
  );
};
