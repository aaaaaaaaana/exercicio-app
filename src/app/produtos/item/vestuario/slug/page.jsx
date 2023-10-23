'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const produtos = {
    calca: '/img/calca.jpg',
    camisa: '/img/camisa.jpg',
    bone: '/img/bone.jpg',
    oculos: '/img/oculos.jpg',
    sapato: '/img/sapato.jpg'
}

export default function Produto() {
    const router = useRouter();
    const { item } = router.query;

    const imagem = produtos[item];
    return (
        <div>
            <h2>{item}</h2>
            <img src={imagem} alt={item} />
        </div>
    );
}