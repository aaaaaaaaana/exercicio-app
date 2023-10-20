import Link from "next/link";


export default function Cabecalho() {
  return (
    <>
        <header className="bg-gray-800 text-white h-16">
            <nav className="flex flex-row justify-around justify-items-center">
                <Link className=".link-cabecalho" href="/posts/dinamicas/estranho/post1">Post1</Link> | 
                <Link className=".link-cabecalho" href="/posts/dinamicas/estranho/post2"> Post2</Link> | 
                <Link className=".link-cabecalho" href="/posts/dinamicas/estranho/post3">Post3</Link> | 
                <Link className=".link-cabecalho" href="/posts/dinamicas/estranho/post4"> Post4</Link> | 
            </nav>
        </header>
    </>
  )
}