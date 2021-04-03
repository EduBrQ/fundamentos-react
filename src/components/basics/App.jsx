import React from 'react'
import "../../App.css"

export default function App(params) {
    return (
        <div className="App">
            <h1>{params.titulo}</h1>

            {params.children}
        </div>
    )
}