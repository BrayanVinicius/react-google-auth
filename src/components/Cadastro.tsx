import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import styles from '../App.module.css';

interface User {
    name: string;
    email: string;
    picture: string;
}

interface DadosForm {
    nome: string;
    email: string;
    telefone: string;
    cidade: string;
}

export function Cadastro() {
    const { user } = useOutletContext<{ user: User | null }>();

    const [dadosForm, setDadosForm] = useState<DadosForm>({
        nome: '',
        email: '',
        telefone: '',
        cidade: ''
    });

    const [jsonGerado, setJsonGerado] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setDadosForm((prev) => ({
                ...prev,
                nome: user.name,
                email: user.email
            }));
        }
    }, [user]);

    function processarMudanca(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setDadosForm({ ...dadosForm, [name]: value });
    }

    function processarEnvio(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const json = JSON.stringify(dadosForm, null, 2);
        setJsonGerado(json);
        console.log('Dados do Cadastro:', dadosForm);
    }

    return (
        <main className={styles.mainContent}>
            <h1>Cadastro de Usuário</h1>
            
            <div className={styles.userCard}>
                <form onSubmit={processarEnvio} className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label>Nome:</label>
                        <input 
                            type="text" 
                            name="nome" 
                            value={dadosForm.nome} 
                            onChange={processarMudanca} 
                            required 
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>E-mail:</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={dadosForm.email} 
                            onChange={processarMudanca} 
                            required 
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Telefone (opcional):</label>
                        <input 
                            type="tel" 
                            name="telefone" 
                            value={dadosForm.telefone} 
                            onChange={processarMudanca} 
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Cidade:</label>
                        <input 
                            type="text" 
                            name="cidade" 
                            value={dadosForm.cidade} 
                            onChange={processarMudanca} 
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Finalizar Cadastro
                    </button>
                </form>

                {/* Exibição do JSON gerado para validação  */}
                {jsonGerado && (
                    <div className={styles.jsonResult}>
                        <h3>JSON Gerado:</h3>
                        <pre>{jsonGerado}</pre>
                    </div>
                )}
            </div>
        </main>
    );
}