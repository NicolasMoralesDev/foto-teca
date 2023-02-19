import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { getFotos } from "../api/HomeGet";
import Pagination from "react-bootstrap/Pagination";
import Placeholders from "../components/Placeholders";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';


const resultados = () => {

    const searchParams = useSearchParams();
    const [busqueda, setBusqueda] = useState([]);
    const [total, setTotal] = useState();
    const [page, setPage] = useState(1);
    let paginacion = [];
  
    for (let i = 1; i <= total; i++) {
      paginacion.push(i);
    }
  
  
    async function fetchData(page) {
      
      const queryid = searchParams.get("q");
      const response = await getFotos(queryid, page);
      const { total_pages } = response;
      setBusqueda(response.results);
      setTotal(total_pages);
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
  /*   if(busqueda.length == 0){
      swal("No se encontro ningun resultado para tu Busqueda!", "intente de nuevo" , "error")
    } */
    
    return (
  
      <>
        <div className="d-flex justify-content-center flex-row gap-3 flex-wrap   m-5">
        { busqueda.length > 0 ? 
            busqueda.map((element) => (
              <>
              <Card className="h-50">
                <Link
                  href={`/detalle/${element.id}`}
                  className="btn btn-danger position-absolute"
                  >
                  +
                </Link> 
                <img key={element.id} src={`${element.urls.raw}`} alt={element.id} />
              </Card>
              </>
            )) 
          : ( <>
            <Placeholders/> <Placeholders/> <Placeholders/>
          </>
        )}
        </div> 
        <div className="d-flex justify-content-center  mt-5 flex-wrap flex-row ">
            <Pagination className="flex-wrap">
            
              <Pagination.First  onClick={() => { fetchData(1), setPage(1)}}/>
              <Pagination.Prev onClick={() => { fetchData(page), setPage(-1)}} />
              {paginacion.map((element) => {
                return ( 
  
                   element == page ?
                  <Pagination.Item active  key={element} onClick={() =>{ fetchData(element), setPage(element)}}>
                    {element}
                  </Pagination.Item> :
                  <Pagination.Item key={element} onClick={() =>{ fetchData(element), setPage(element)}}>
                    {element}
                  </Pagination.Item>
                  
                );
              })}
              <Pagination.Next onClick={() => {fetchData(page)  , setPage(+1)}}/>
              <Pagination.Last onClick={() => {fetchData(page)  , setPage(total)}} />
            </Pagination>
          </div>
      </>
  
    );
  };
  
  export default resultados;
  