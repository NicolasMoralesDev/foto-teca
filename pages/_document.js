import Navegacion from '@/components/Navegacion'
import Pie from '@/components/Pie'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />

      <body>

      <Navegacion/>
        <Main />
        <NextScript />
        <Pie/>

      </body>

    </Html>
  )
}
