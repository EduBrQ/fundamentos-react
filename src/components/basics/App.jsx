import React from 'react'
import ComParametro from './ComParametro'
import Fragmento from './Fragmento'
// import Header from './Header'
import Card from './layout/Card/Card';
import "../../App.css"

export default function App(params) {
    const num = Math.random();
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">
                <Card title="Card 01" content="Conteudo do primeiro card.">
                    <ComParametro
                        titulo="Primeiro Componente"
                        subtitulo="Show de bola!"
                        nota={num}
                    />
                </Card>
                <Card title="Card 01" content="Conteudo do primeiro card.">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Show de bola!"
                        nota={num}
                    />
                </Card>
                <Card title="Card 01" content="Conteudo do primeiro card.">
                    <ComParametro
                        titulo="Terceiro Componente"
                        subtitulo="Show de bola!"
                        nota={num}
                    />
                </Card>
                <Card title="Card 01" content="Conteudo do primeiro card.">
                    <Fragmento></Fragmento>
                </Card>
            </div>
        </div>
    )
}