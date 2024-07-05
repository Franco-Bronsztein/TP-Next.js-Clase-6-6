import React from 'react';
import Link from 'next/link';
import styles from './reservas.module.css';
import Titulo from '../components/Titulo/Titulo';

export default function Reservas() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/quienes-somos">Quienes Somos</Link>
          </li>
          <li>
            <Link href="/reservas">Reservas</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <Titulo />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles['one-half']} ${styles.column}`}>
            <h2>Reservar una cita</h2>
            <form className={styles.form}>
              <label htmlFor="nombre" className={styles.formlabel}>Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                required
              />
              <label htmlFor="fecha" className={styles.formlabel}>Fecha:</label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                required
              />
              <label htmlFor="hora"  className={styles.formlabel}>Hora:</label>
              <input
                type="time"
                id="hora"
                name="hora"
                required
              />
              <button type="submit"  className={styles.formlabel}>Agregar Reserva</button>
            </form>
          </div>
          <div className={`${styles['one-half']} ${styles.column}`}>
            <h2>Administrar citas existentes</h2>
          </div>
        </div>
      </div>
    </>
  );
}

Reservas.useClient = true;
