"use client"

import { useState } from 'react';
import './Card.css';


function Card({mascota, dueño, fecha, hora, sintomas, citas, setCitas, id}) {
    const [mostrarCard, setMostrarCard] = useState(true);
    const eliminar = () =>
    {
        // Al principio lo habia hecho ocultando la card, después dicidí cambiar el estado del array
        //setMostrarCard(false);
        setCitas(citas.filter(c => c.id !== id));
    }

    const alertar = () =>
    {
        const respuesta = window.confirm("¿Estás seguro de que deseas continuar?");
        if (respuesta) 
        {
            eliminar()
        }   
        else 
        {
           console.log("Eliminación cancelada")
        }
    }

    return (
            mostrarCard ? ( 
                <div class="cita">
                    <p>Mascota: <span>{mascota}</span></p>
                    <p>Dueño: <span>{dueño}</span></p>
                    <p>Fecha: <span>{fecha}</span></p>
                    <p>Hora: <span>{hora}</span></p>
                    <p>Síntomas: <span>{sintomas}</span></p>
                    <button class="button elimnar u-full-width" onClick={alertar}>Eliminar ×</button>
                </div>
            ) : <></>
    );
}

export default Card;
