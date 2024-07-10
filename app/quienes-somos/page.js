import Link from 'next/link';
import styles from './quienes-somos.module.css';
export default function QuienesSomos() {
    return (
        <>
        <div className="quienesSomos">
            <h1>¿Quiénes Somos?</h1>
            <p classname={styles.p}> Somos un administrador de citas, hecho por Tomas Kalinscky y Franco Bronsztein.</p>
        </div>
    </>
    );
}