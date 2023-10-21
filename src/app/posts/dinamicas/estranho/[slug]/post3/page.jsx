import Link from "next/link";
import Image from 'next/image'

export default function Post3() {
    return (
      <div>
        <h1>Post 3</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic inventore expedita facere 
           quis officiis minus vel nulla nisi possimus aliquid ex, odio modi eos est recusandae? 
           Quam accusantium ducimus ad.
        </p>

      <p><Link href = "/">VOLTAR</Link></p>

      <figure>
        <Image src="/images/post3.png"
        width={500}
        height={500}
        alt="Post3"
        />
      </figure>

      </div>
    )
  }