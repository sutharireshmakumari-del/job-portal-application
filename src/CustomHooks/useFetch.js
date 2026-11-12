import { useState ,useState} from "react"
import axios from 'axios'


const useFetch = (url) => {
  let {apiData,setApiData}=useState(null)
  useFetch(()=>{
    let api=async()=>{
      let {data}=await axios.get(url)
    }
    api()
  },[])
  return {apiData}
}

export default useFetch