import React from 'react'
import Main from '../templates/Main'

const Home = props => {
    return (
        <Main icon="home" title="inicio" 
            subtitle="Projeto para praticar CRUD usando ReactJS e JSON server" >
            
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">
                Sistema para exemplificar a construção de um cadastro desenvolvido em ReactJS!
            </p>

        </Main>
    )
}

export default Home