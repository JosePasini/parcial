import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';

export const Eliminar = () => {
    const {id} = useParams();
    parseInt(id, 10);
    const url = `http://168.194.207.98:8081/api_banner/delete_banner.php?id=${id}`
    const eliminar = () => {
        fetch(url, {
            method: 'delete',
        })
    }


    useEffect(() => {
        alert('Se eliminará el element con id', id);
        eliminar();
    }, [])

  return (
    <div></div>
  )
}
export default Eliminar;
