import React from 'react'

export default function ComParametro(params) {
    const titulo = params.titulo
    const subtitulo = params.subtitulo
    return (
        <div>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <h3>{params.nota}</h3>
        </div>
    )
}