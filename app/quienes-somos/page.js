import Link from 'next/link';
import styles from './quienes-somos.module.css';
export default function QuienesSomos() {
    return (
        <>
        <nav>
            <ul className="container">
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
                    <Link href="/ayuda">Contacto</Link>
                </li>
            </ul>
        </nav>
        <div className="container">
            <h1>¿Quiénes Somos?</h1>
            <p>Somos un administrador de citas, hecho por Tomas Kalinscky y Franco Bronsztein.</p>
        </div>
    </>
    );
}