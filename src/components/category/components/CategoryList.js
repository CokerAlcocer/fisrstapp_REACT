import React, { useEffect } from 'react'
import axios from "../../../shared/plugins/axios";

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async() =>{
        return await axios({url: "/category/", method:"GET"});
    }

    useEffect(() => {
        getCategories().then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        });
    }, []);
    
  return (
    <div>CategoryList</div>
  )
}
