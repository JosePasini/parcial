import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Formulario = () => {

    const [data, setData] = useState({
        urlImageBanner: '',
        textCaption: '',
        descripcionImagen: '',
        ordenSlider: 0
    })

    const handleInputChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const url = 'http://168.194.207.98:8081/api_banner/post_banner.php'

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(data)
        JSON.stringify(data)
        data.ordenSlider = Number(data.ordenSlider)

        fetch(url, {
            method: 'POST',
            headers: {
                content: 'application/json',
                body: JSON.stringify(data)
            }
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
                        type="number"
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

export default Formulario;
