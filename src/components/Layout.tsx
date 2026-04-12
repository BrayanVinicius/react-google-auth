import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import { googleLogout } from '@react-oauth/google'

import styles from '../App.module.css'

interface User {
    name: string;
    email: string;
    picture: string;
}

export function Layout() {
    const [user, setUser] = useState<User | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        const savedUser = localStorage.getItem('usuarioLogado')
        if (savedUser) {
            setUser(JSON.parse(savedUser))
        }
    }, []);

    function logout() {
        googleLogout()
        setUser(null)
        localStorage.removeItem('usuarioLogado')
        navigate('/');
    }

    return (
        <div className={styles.pageConteiner}>
            {/* Barra do topo */}
            <header className={styles.topBar}>
                <h2>Trabalho de Desenvolvimento WEB</h2>

                {user && (
                    <nav className={styles.navLinks}>
                        <Link to='/'>Home</Link>
                        <Link to='/Apresentacao'>Apresentação</Link>
                        <Link to='/Cadastro'>Cadastro</Link>
                        <button onClick={logout} className={styles.logoutBtnSmall}>Sair</button>
                    </nav>
                )}
            </header>

            {/* Restante da página */}
            <Outlet context={{ user, setUser }} />
        </div>
    );
}