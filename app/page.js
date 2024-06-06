"use client"


import Image from "next/image";
import styles from "./page.module.css";
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Card from './components/Card/Card';
import FormCItas from './components/FormCitas/FormCitas';
import { useState } from 'react';


export default function app() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <Titulo></Titulo>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo nombre='CREAR MI CITA'></Subtitulo>
            <FormCItas setCitas={setCitas} citas={citas}></FormCItas>
          </div>
          <div class="one-half column">
            <Subtitulo nombre='ADMINISTRA TUS CITAS'></Subtitulo>
            {citas.map(c => <Card id={c.id} citas={citas} setCitas={setCitas} mascota={c.mascota} dueño={c.dueño} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} />) }
          </div>
        </div>
      </div>
    </>
  );
}
