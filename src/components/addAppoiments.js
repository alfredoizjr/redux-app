import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addAppoinmet } from '../redux/actions/appoimentAction';
import { validateFormAction } from '../redux/actions/validateForm';
import uuid from 'uuid/v4';

// state local


const AddAppoiments = () => {


    
const [mascota, setMascota] = useState('');
const [propetario, setPropetario] = useState('');
const [fecha, setFecha] = useState('');
const [hora, setHora] = useState('');
const [sintoma, setSintoma] = useState('');

// dispatch to execute the actions

const dispatch = useDispatch();
const addNewAppoimet = (appoiment) => dispatch(addAppoinmet(appoiment));
const validateFormulary = (error) => dispatch(validateFormAction(error));

// acceder al state global
const error = useSelector((state) => state.error );

const handleChange = e => {
    e.preventDefault();
    
    // validate form

 
    if(mascota.trim() === '' || propetario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintoma.trim() === '') {
        validateFormulary(true);
        return
    }


    validateFormulary(false);
    // add appoinmet
    addNewAppoimet({
        id: uuid(),
        mascota,
        propetario,
        fecha,
        hora,
        sintoma
    })

    // reset form
    setMascota('');
    setPropetario('');
    setFecha('');
    setHora('');
    setSintoma('');

}

    return ( 
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Agrega las citas aqui</h2>
                <form onSubmit={handleChange}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Nombre Mascota"
                                value={mascota}
                                onChange={e=> setMascota( e.target.value )}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                        <div className="col-sm-8 col-lg-10">
                            <input 
                                type="text" 
                                className="form-control"  
                                placeholder="Nombre Dueño de la Mascota"
                                value={propetario}
                                onChange={e=> setPropetario( e.target.value )}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input 
                                type="date" 
                                className="form-control"
                                value={fecha}
                                onChange={e=> setFecha( e.target.value )}
                            />
                        </div>                            

                        <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                        <div className="col-sm-8 col-lg-4">
                            <input 
                                type="time" 
                                className="form-control" 
                                value={hora}
                                onChange={e=> setHora( e.target.value )}
                            />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                        <div className="col-sm-8 col-lg-10">
                            <textarea 
                                className="form-control"
                                value={sintoma}
                                onChange={e=> setSintoma( e.target.value )}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
               { error.error ? <div className='alert alert-danger text-center p2'>All fileds are required</div> : null }
            </div>
    </div>
     );
}
 
export default AddAppoiments;