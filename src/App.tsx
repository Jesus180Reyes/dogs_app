import { timeSince } from './helpers/timeSince';
import { useAxiosGetUsers } from './hooks/useAxiosGetUsers';

export const  App = ()=>  {  
  //   }
    const {users,user,isError,getUserByClick, usersNew }  =  useAxiosGetUsers();
    
    if(isError === true) return <h1>No data</h1>
  return (
    <>
    <h1>Hola mundo</h1>
    <button onClick={getUserByClick}>Siguiente</button>
    {

      usersNew?.usuario.map(({nombre,email,id,createdAt},i) => {
        return <div key={id}>
          <p>{i + 1}</p>
          <li>
            <ul>{nombre}</ul>
            <ul>{email}</ul>
            <ul>Se Creo hace: {timeSince(createdAt.toString())}</ul>
          </li>
        </div>
      })
    }
      
    
    {/* <h1>{user?.usuario.email}</h1> */}
    </>
  )
}

export default App
