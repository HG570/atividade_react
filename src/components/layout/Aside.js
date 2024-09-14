import styles from './Aside.module.css';
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <aside className={styles.aside}>
            <h2>Informativos</h2>
            <div>
                <h4>Saiba mais sobre React</h4>
                <ul>
                    <li><Link to="https://react.dev/"> Documentação</Link></li>
                </ul>
            </div>
            <div>
                <h4>Benefícios do React</h4>
                <ul>
                    <li>Performance otimizada</li>
                    <li>Atualização automática do DOM (Virtual DOM)</li>
                    <li>Componentização modular</li>
                </ul>
            </div>
            <div>
                <h4>Dicas de Uso</h4>
                <ul>
                    <li>Utilize componentes funcionais para facilitar a manutenção.</li>
                    <li>Use hooks para gerenciar estados de forma eficiente.</li>
                </ul>
            </div>
        </aside>
    );
}

export default Aside;