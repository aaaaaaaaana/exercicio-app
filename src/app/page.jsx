import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <div>
        <Link href="posts/dinamicas/estranho/[slug]/post1">Post1</Link> | 
        <Link href="posts/dinamicas/estranho/[slug]/post2"> Post2</Link> | 
        <Link href="posts/dinamicas/estranho/[slug]/post3">Post3</Link> | 
        <Link href="posts/dinamicas/estranho/[slug]/post4"> Post4</Link> | 
      </div>
    </>
  )
}
