import {userApi} from '../api';
import { UserResponse,UsersResponse } from '../interfaces';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const useAxiosGetUsers = () => {
   
    const [users, setUsers] = useState<UsersResponse>();
    const [isError, setIsError] = useState<boolean>();
    const [user, setUser] = useState<UserResponse>();
    const [query,setQuery] = useState<number>(6);
    const [id, setId] = useState<number>(6);
    const [usersNew, setUsersNew] = useState<UsersResponse>();

    // const getUsersPagination =async ():Promise<UserResponse> => {
    //     const resp = await userApi.get<UserResponse>(`/api/users?limit=${query}`);
    //     const data:UserResponse = resp.data;
    //     setUsers(data);
    //     return data


    const getUsers = async():Promise<UsersResponse> => {
        const resp = await userApi.get("/api/users");
        const data = resp.data
        console.log(data);
        setUsersNew(data);
        return data
    }
   
  
    

    const getUserById = async():Promise<UserResponse> => {
       
        try {
            const resp = await userApi.get<UserResponse>(`/api/users/${id}`);
           
            const data:UserResponse = resp.data;
            console.log(data);
            setUser(data);
            setIsError(false);
            return data;
    
        } catch (error:any) {
            const isError = error.response.data.msg; 
            console.log();
            Swal.fire({title: "Error", text: isError ,icon:'error'});
            return  isError;
        }
           
           
    }
      
      const getUserByClick = (e:any)=> {
        e.preventDefault();
        setQuery(query + 1);
        setId(id + 1);
      }
    //   useEffect(() => {
    //     // getUsersPagination()
    
    //   }, [query]);

      useEffect(() => {
        
        getUserById();
      
        
      }, [id]);
      useEffect(() => {
      getUsers();
        
      }, [])
      
      


  return {
    // * Propiedades
    users,
    user,
    id,
    isError,
    usersNew,
    // * Metodos
    getUserByClick,
    getUserById,
    setId,
    getUsers,

    
  }
}
