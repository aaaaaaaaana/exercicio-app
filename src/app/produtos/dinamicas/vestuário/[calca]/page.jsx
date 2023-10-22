import Link from "next/link";


export default function CalcaSlug() {
    return (
      <div>
          <h1>Dados de Camisas</h1>
          <div>
              <p>O valor é : {params.calca}</p>
              <p><Link href="/">Voltar...</Link> </p>
          </div>
      </div>
    )
  }