import { FC } from 'react';
import { DogResponse } from '../interfaces';

interface Props {
    dogs: DogResponse,
    onSubmit: any,
    isLoading: boolean
}
export const DogImage:FC<Props>= ({dogs,onSubmit,isLoading}) => {
  return (
    <>

    <button onClick={onSubmit}>Siguiente</button>
    <hr />
    {
      isLoading 
      ? (<h1>Cargando Imagen....</h1>)
      : (<img placeholder={"Espera un segundo"}  src={dogs?.message}></img>)
    }
   
   
  
    </>
  )
}
