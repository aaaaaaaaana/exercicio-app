import Link from "next/link";


export default function Cabecalho() {
  return (
    <>
        <header className="bg-teal-900 text-white h-16">
            <nav className="flex flex-row justify-around justify-items-center">
            <Link className='linkCabecalho' href="/item/camisa">Camisa</Link> | 
            <Link className='linkCabecalho' href="/item/calca">Calca</Link> | 
            <Link className='linkCabecalho' href="/item/sapato">Sapato</Link> | 
            <Link className='linkCabecalho' href="/item/oculos">Oculos</Link> | 
            <Link className='linkCabecalho' href="/item/bone">Bone</Link>
            </nav>
        </header>
    </>
  )
}