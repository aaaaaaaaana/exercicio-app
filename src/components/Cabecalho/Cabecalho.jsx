import Link from "next/link";


export default function Cabecalho() {
  return (
    <div>
        <header className="bg-teal-900 text-white h-16">
            <nav className="flex flex-row justify-around justify-items-center">
            <Link className='linkCabecalho' href="/produtos/item/camisa">Camisa</Link> | 
            <Link className='linkCabecalho' href="/produtos/item/calca">Calca</Link> | 
            <Link className='linkCabecalho' href="/produtos/item/sapato">Sapato</Link> | 
            <Link className='linkCabecalho' href="/produtos/item/oculos">Oculos</Link> | 
            <Link className='linkCabecalho' href="/produtos/item/bone">Bone</Link>
            </nav>
        </header>
    </div>
  )
}