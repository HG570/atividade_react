import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

function Nav(){
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="https://react.dev/community/team">Time do React</Link></li>
                <li><Link to="https://react.dev/blog">React Blog</Link></li>
                <li><Link to="https://github.com/facebook/react">React GitHub</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;