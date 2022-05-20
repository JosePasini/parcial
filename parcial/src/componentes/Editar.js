import React, {useState} from 'react'

import { useParams } from 'react-router-dom';

export const Editar = () => {
  const {id} = useParams();
  
  const [data, setData] = useState({
    id: 0,
    urlImageBanner: '',
    textCaption: '',
    descripcionImagen: '',
    ordenSlider: 0
}) 

const handleInputChange = (event) => {
    setData({
        ...data,
        id : parseInt(id),
        [ event.target.name ] : event.target.value
    })
}

const url = 'http://168.194.207.98:8081/api_banner/post_banner.php'

const enviarDatos = (event) => {
    event.preventDefault();
    console.log(data)
    data.id = id
    data.ordenSlider = Number(data.ordenSlider)

    fetch(url, { 
        method: 'PUT',
        headers: {
            content: 'application/json'
        },
        body: JSON.stringify(data)
    })
}

  return (
    <div>
    <h1>Formulario</h1>
    <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
            <input
                placeholder="Ingrese urlImageBanner"
                className="form-control"
                name="urlImageBanner"
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="col-md-3">
            <input placeholder="Ingrese textCaption"
                className="form-control"
                name="textCaption"
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="col-md-3">
            <input placeholder="Ingrese descripcionImagen"
                className="form-control"
                name="descripcionImagen"
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="col-md-3">
            <input placeholder="Ingrese ordenSlider"
                className="form-control"
                name="ordenSlider"
                type="text"
                onChange={handleInputChange}>
            </input>
        </div>
        <div className="col-md-3">
            <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
    </form>

</div>
  )
}

export default Editar;