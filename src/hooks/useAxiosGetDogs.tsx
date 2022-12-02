import { useEffect, useState } from "react";
import {DogApi} from "../api";
import { DogResponse } from "../interfaces";

export const useAxiosGetDogs = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
    const [ dogs, setDogs] = useState<DogResponse>();
    const getDogByName = async():Promise<DogResponse>=> {
      setIsLoading(true);
        const resp = await DogApi.get<DogResponse>("/breeds/image/random");
        const data:DogResponse = resp.data;
        setDogs(data);
        setIsLoading(false);
        return data
    }
    const onSubmit = (e:any)=> {
        e.preventDefault();
        getDogByName();
    }
    useEffect(() => {
      getDogByName();
    
      
    }, []);
  return {
    // * Propiedades
    dogs,
    isLoading,
    // * Metodos
    setDogs,
    onSubmit

  }
}
