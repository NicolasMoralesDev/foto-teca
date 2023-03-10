import Head from 'next/head'
import Buscador from '../components/Buscador'
import Resultados from './resultados'


export default function Home() {
  return (
    <>

      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="1298736-3f51b5.svg" />
        <meta name="description" content="Encuentra aqui las mejores imagenes de internet en alta calidad" />
      </Head>

      <>

        <div className="mb-4 h-75">
        <h1 className='text-center titulo-home text-white p-5'>Buscador de Imagenes Online</h1>
        </div>

      <div className='m-5 mt-0 gap-2'>
      <div>
    <Buscador/>
        </div>
        <Resultados/>  
      </div>
    
    </>

    </>

  )
}
