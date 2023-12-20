import React, { useEffect , useState} from 'react'
import { MenuApi } from './utils'
const useMenu = (id) => {
    const [resInfo, setResInfo] = useState([null]);
     const fetchApi = async() =>{
        const data = await fetch(MenuApi+id)
        const response = await data.json();
        setResInfo(response.data)
       
     }
     useEffect(()=>{
        fetchApi()
     },[])

     return resInfo
}

export default useMenu