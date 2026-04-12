import { BrowserRouter, Routes, Route } from 'react-router';

import { Home } from './src/components/Home.tsx';
import { Apresentacao } from './src/components/Apresentacao.tsx';
import { Cadastro } from './src/components/Cadastro.tsx';
import { Layout } from './src/components/Layout.tsx';

export function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home/>}/>
                    <Route path='/Apresentacao' element={<Apresentacao/>}/>
                    <Route path='/Cadastro' element={<Cadastro/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}