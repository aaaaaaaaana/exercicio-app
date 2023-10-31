import React from 'react' 
import Image from "next/image";
import Link from 'next/link';


export default function Vestuario({params}) {
  return (
    
    <div>
        <figure className='flex flex-col items-center justify-center' >
            <Image src={`/img/${params.vestuario}.jpg`} alt="Produtos" width={320} height={320}></Image>
            <h1 className='text-emerald-800 font-bold text-2xl'>{params.vestuario}</h1>
            <Link href="/">Voltar...</Link>
        </figure>

    </div>
  
  )
}