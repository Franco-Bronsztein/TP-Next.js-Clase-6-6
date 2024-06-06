"use client"

import './FormCitas.css';   


const validarDatos = cita => {
    const mascota = cita.mascota.trim();
    const dueño = cita.dueño.trim();
    const fecha = cita.fecha.trim();
    const hora = cita.hora.trim();
    const sintomas = cita.sintomas.trim();

    if (
        mascota.length < 3 || mascota.length > 40 ||
        dueño.length < 3 || dueño.length > 40 ||
        fecha === '' || hora === '' || sintomas === ''
    ) {
        return false;
    } else {
        return true;
    }
}


function FormCItas({setCitas,citas}) {
    const act = (e) =>
    {
        const cita = {
            id: Date.now(),
            mascota: e.target.mascota.value,
            dueño : e.target.propietario.value,
            fecha : e.target.fecha.value,
            hora : e.target.hora.value,
            sintomas : e.target.sintomas.value
        };

        if (validarDatos(cita)) {
            e.preventDefault();
            setCitas([...citas, cita])
            mostrarConfirm()
        } 
        
        else {
            e.preventDefault();
            alert("La cita ingresada no es válida")
        }
    }

    
    return (
        <form onSubmit={act}>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"></input>
            <label>Nombre Dueño</label>
            <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota"></input>
            <label>Fecha</label>
            <input type="date" name="fecha" class="u-full-width"></input>
            <label>hora</label><input type="time" name="hora" class="u-full-width"></input>
            <label>Sintomas</label>
            <textarea name="sintomas" class="u-full-width"></textarea>
            <button type="submit" class="u-full-width button-primary"> Agregar Cita</button>
        </form>)
}


const mostrarConfirm = () =>
{
    alert("Se a creado una cita nueva")
}



export default FormCItas