import Link from "next/link";


export default function Oculos() {
  return (
    <div>
        <h1>Dados de Camisas</h1>
        <div>
            <p>O valor é : {params.camisa}</p>
            <p><Link href="/">Voltar...</Link> </p>
        </div>
    </div>
  )
}