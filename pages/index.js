import { useState } from "react";
import Link from "next/link";
import styles from '../styles.module.css';



function Page(){

    const [adicionar, setAdicionar] = useState(0);

    function Adicionar() {
        setAdicionar(adicionar + 1);
        
    }
      

    return (
        <div className={styles.hello}>
            <p>Hejo</p>
            <br/>
            <div>{adicionar}</div>
            <button className={styles.button} onClick={Adicionar}>Adicionar</button><br/><br/><br/>

            <div>
            <form >
                
                    <input 
                    className={styles.form}
                    name= 'username'
                    type='text'
                    placeholder='username   '
                    />
                <Link href=''>
            <button className={styles.button}>enviar</button>
            </Link>
            </form>
            </div><br/><br/><br/>
            <Link href='home'>
            <button className={styles.button}>Home</button>
            </Link>
            <div>
            <Link href='pure'>
            <button className={styles.button}>Pure</button>
            </Link>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
    
            </div>
        </div>
    )}
export default Page;