import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <div>
        <Link href="/posts/dinamicas/estranho/1/post1">Post1</Link> | 
        <Link href="/posts/dinamicas/estranho/1/post2"> Post2</Link> | 
        <Link href="/posts/dinamicas/estranho/1/post3">Post3</Link> | 
        <Link href="/posts/dinamicas/estranho/1/post4"> Post4</Link> | 
      </div>
    </>
  )
}
