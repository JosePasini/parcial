import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const TablaBanners = () => {

    const [data, setData] = useState();

    const url = 'http://168.194.207.98:8081/api_banner/get_banners.php'

    const obtenerData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setData(data);
    }

    useEffect(() => {
        obtenerData();
    }, [])

    return (
        <div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Descripcion</th>
                        <th scope="col">ordenSlider</th>
                        <th scope="col">textCaption</th>
                        <th scope="col">urlImageBanner</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data &&
                        data.map(d =>
                            <tr key={d.id}>
                                <th scope="row">{d.descripcionImagen}</th>
                                <td>{d.ordenSlider}</td>
                                <td>{d.textCaption}</td>
                                <td>${d.urlImageBanner}</td>
                                <td>
                                    <Link to={`/editar/${d.id}`}>
                                        <button>Editar</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/eliminar/${d.id}`} >
                                        <button>Eliminar</button>
                                    </Link>
                                </td>
                            </tr>
                        )}

                </tbody>
            </table>

            <Link to="/formulario" >
                <button>Cargar Nuevo</button>
            </Link>
        </div>
    )
}

export default TablaBanners;

