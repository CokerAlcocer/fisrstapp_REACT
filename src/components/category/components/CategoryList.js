import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import axios from "../../../shared/plugins/axios";

export const CategoryList = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const getCategories = async() =>{
        axios({url: "/category/", method:"GET"}).then((response)=>{
            setCategories(response.data);
            setIsLoading(false);
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        setIsLoading(true);
        getCategories();
    }, []);
    
const columns = [
    {
        name: 'Categoria', 
        cell: row => <div>{row.description}</div>
    },
    {
        name: 'Estado', 
        cell: row => row.status.description === "Activo" ? 
        (<Badge pill bg="success">{row.status.description}</Badge>) : (<Badge pill bg="danger">{row.status.description}</Badge>)
    },
];

  return (
    <Row>
        <Col>
            <DataTable columns={columns} data={categories}/>
        </Col>
    </Row>
  )
}
