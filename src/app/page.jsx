import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <div>
        <Link href="posts/post1">Post1</Link> | 
        <Link href="posts/produto/tenis-preto"> Post2</Link> | 
        <Link href="posts/post1">Post3</Link> | 
        <Link href="posts/produto/tenis-preto"> Post4</Link> | 
      </div>
    </>
  )
}
