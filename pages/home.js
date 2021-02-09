import Link from "next/link";
import styles from '../styles.module.css';

 function home() {
    return (
        <div className={styles.hello}>
            <h1>KKKKKKKKK</h1>
                <Link href='/'>
                <button className={styles.button}>Voltar</button>
                </Link>

                
        </div>)
}
export default home;