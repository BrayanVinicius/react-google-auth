import { useOutletContext } from 'react-router';
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

import styles from '../App.module.css'

interface User {
    name: string;
    email: string;
    picture: string;
}

export function Home() {
    const { user, setUser } = useOutletContext<{ user: User | null, setUser: (u: User) => void }>();

    function login(credentialResponse: { credential?: string }) {
        if (credentialResponse.credential) {
            const decoded = jwtDecode<User>(credentialResponse.credential)
            setUser(decoded)
            localStorage.setItem('usuarioLogado', JSON.stringify(decoded));
        }
    }

    return (
        <main className={styles.mainContent}>
            <h1>Bem-vindo ao Sistema</h1>

            {!user ? (
                <div className='styles.loginBox'>
                    <h3>Faça login para continuar</h3>
                    <GoogleLogin onSuccess={login} onError={() => console.error('Login falhou')} />
                </div>
            ) : (
                <div>
                    <div className={styles.userInfo}>
                        <img
                            src={user.picture} alt="Perfil"
                            className={styles.profilePicture}
                            crossOrigin="anonymous"
                            referrerPolicy="no-referrer"
                        />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            )}
        </main>
    );
}