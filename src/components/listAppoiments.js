import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeAppoiment } from '../redux/actions/appoimentAction';

const ListAppoiments = () => {

    const appoiments = useSelector(state => state.appoiment);

   // dispatch

   const dispatch = useDispatch();

    const titleCitas = (Object.keys(appoiments.appoiment).length === 0) ? 'No hay citas' : `Citas ${appoiments.appoiment.length}`

    return ( 
        <div className='card mt-5'>
            <div className='card-body'>
                <h3 className='card-title text-center'>{titleCitas}</h3>
                {appoiments.appoiment.map(cita => (
                    <div className="media mt-3" key={cita.id}>
                    <div className="media-body">
                        <h3 className="mt-0">{cita.mascota}</h3>
                        <p className="card-text"><span>Nombre Dueño: {cita.propetario}</span></p>
                        <p className="card-text"><span>Fecha: {cita.fecha}</span></p>
                        <p className="card-text"><span>Hora: {cita.hora}</span>  </p>
                        <p className="card-text"><span>Sintomas: {cita.sintoma}</span> <br /> </p>
                        <button 
                        onClick={() => dispatch(removeAppoiment(cita.id))}
                            className="btn btn-danger">Borrar &times;
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default ListAppoiments;