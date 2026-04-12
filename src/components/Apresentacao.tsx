import { useOutletContext } from 'react-router';
import styles from '../App.module.css';

interface User {
    name: string;
    email: string;
    picture: string;
}

const sobreMim = {
    nome: 'Brayan Vinícius Neves Gonçalves',
    foto: '/brayan.jpg',
    descricao: 'Estudante de tecnologia que busca unir o raciocínio lógico e o rigor da matemática com a construção de softwares eficientes para criar soluções inteligentes.',
    formacao: 'Cursando Matemática com ênfase em matemática computacional e Engenharia de Software',
    habilidades: ['React e TypeScript', 'Estrutura de Dados', 'Estatística Aplicada', 'Modelagem Matemática'],
    interesses: 'Ciência de Dados, Algoritmos de Otimização e Machine Learning',
};

export function Apresentacao() {
    const { user } = useOutletContext<{ user: User | null }>();

    return (
        <main className={styles.mainContent}>
            <section className={styles.profileCard}>
                <img 
                    src={sobreMim.foto} 
                    alt={`Foto de ${sobreMim.nome}`} 
                    className={styles.profilePicture} 
                />
                <h2>{sobreMim.nome}</h2>

                <div className={styles.profileDescription}>
                    <p>{sobreMim.descricao}</p>
                    <br />
                    <p><strong>Formação:</strong> {sobreMim.formacao}</p>
                    <p><strong>Interesses:</strong> {sobreMim.interesses}</p>
                    <p><strong>Habilidades:</strong></p>
                    <ul>
                        {sobreMim.habilidades.map((habilidade) => (
                            <li>{habilidade}</li>
                        ))}
                    </ul>
                </div>

                {user && (
                    <p>Visualizando como: {user.name}</p>
                )}
            </section>
        </main>
    );
}