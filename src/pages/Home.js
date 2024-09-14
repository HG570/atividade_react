import styles from './Home.module.css'
import Aside from '../components/layout/Aside.js';
import Main from '../components/layout/Main.js';
import Nav from '../components/layout/Nav.js';

function Home() {
    return (
        <div className={styles.home}>
                <Nav />
                <Main />
                <Aside />
        </div>
    )
}

export default Home;