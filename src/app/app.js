import React from 'react'
import Home from './home'
import { Routes, Route } from 'react-router-dom'
import User from './user'
import Layout from './Layout'
import styles from '../styles/styles.css'

function App() {

    return (<div className='app'>


        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="user/:id" element={<User />} />
            </Route>
        </Routes>
    </div>
    )
}

export default App;
