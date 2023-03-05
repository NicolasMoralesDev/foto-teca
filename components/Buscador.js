import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import swal from 'sweetalert';
import { useRouter } from "next/router";

  const Buscador = () => {
    const router = useRouter();

  const buscar = (e) => {

      e.preventDefault()
      const busqueda = e.currentTarget.keyword.value.trim();
        if ( busqueda.length < 4 ) {  swal("Por favor ingrese una busqueda!", "maximo 4 caracteres" , "warning");
      } else {
      router.push( `resultados?q=${busqueda}`);
    /* modal */
    } }
  
    return (
  <form action="get" onSubmit={buscar} >
      <InputGroup className="mb-3">
          <Form.Control
            name="keyword"
            placeholder="Ingrese su Busqueda..."
            aria-label="Buscador"
          />
          <Button  type='submit' variant="outline-secondary">
            Buscar
          </Button>
        </InputGroup>
      </form>
    )
  }

export default Buscador