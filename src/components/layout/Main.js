import styles from './Main.module.css'
import logo from '../../images/React_logo-1024x576.png'

function Main() {
    return (
        <div className={styles.main}>
            <h1>Um Site React!</h1>
            <p>
                O React é uma biblioteca JavaScript amplamente utilizada por desenvolvedores em todo o mundo para criar interfaces de usuário interativas e altamente performáticas. Com sua estrutura modular e componentes reutilizáveis, o React garante:
            </p>
            <ul>
                <li>
                    Rapidez: Atualizações em tempo real, sem recarregar a página inteira.
                </li>
                <li>
                    Flexibilidade: Componentes reutilizáveis que facilitam a expansão e manutenção do aplicativo.
                </li>
                <li>
                    Eficiência: Performance otimizada, com renderização seletiva dos elementos.
                </li>
            </ul>

            <h4>Por Que Escolher React para o Seu Aplicativo?</h4>
            <p>
            O React é uma das bibliotecas JavaScript mais populares e poderosas para a construção de interfaces de usuário modernas. Criado pelo Facebook e amplamente adotado por grandes empresas ao redor do mundo, o React facilita a criação de aplicativos rápidos, dinâmicos e escaláveis. Ao escolher o React para o seu projeto, você garante acesso a uma série de vantagens técnicas que elevam a qualidade e a performance do seu aplicativo.</p>
            <img src={logo}/>
        </div>
    )
}

export default Main;