import Link from "next/link";


export default function Cabecalho() {
  return (
    <>
        <header className="bg-teal-900 text-white h-16">
            <nav className="flex flex-row justify-around justify-items-center">
                <Link className=".link-cabecalho" href="/produtos/card">Card</Link>
            </nav>
        </header>
    </>
  )
}