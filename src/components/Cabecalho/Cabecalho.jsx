import Link from "next/link";


export default function Cabecalho() {
  return (
    <>
        <header className="bg-teal-900 text-white h-16">
            <nav className="flex flex-row justify-around justify-items-center">
            <Link className='linkCabecalho' href="/produto/item/camisa">Camisa</Link> | 
            <Link className='linkCabecalho' href="/produto/item/calca">Calca</Link> | 
            <Link className='linkCabecalho' href="/produto/item/sapato">Sapato</Link> | 
            <Link className='linkCabecalho' href="/produto/item/oculos">Oculos</Link> | 
            <Link className='linkCabecalho' href="/produto/item/bone">Bone</Link>
            </nav>
        </header>
    </>
  )
}