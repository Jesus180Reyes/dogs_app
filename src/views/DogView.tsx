import { DogImage } from "../components";
import { useAxiosGetDogs } from "../hooks";

export const DogView = () => {
    
    const {dogs,isLoading,onSubmit} = useAxiosGetDogs();

    
  return (
    <>
    <div className='card-grid-container'>

    <div className="card">
     <h1>Dogs</h1>
    <DogImage dogs={dogs!} onSubmit={onSubmit} isLoading={isLoading!}/>
    </div>
    
    </div>
    </>
  )
}
