import React from 'react';
import './TableComponent.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

const TableComponent = () => {

    const [data, setData] = useState([]);

    const fetchApi = async () =>{
        const res = await axios.get('https://fakestoreapi.com/products')
        const response = res.data
        setData(response)
    }

    useEffect(()=>{
        fetchApi()
        // eslint-disable-next-line
    },[]);

    console.log(data)

  return (
    <div className='container' style={{style:"overflow-x:auto;"}}>
        <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return (
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><img className='img' src={item.image} alt={item.title}/></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  )
}

export default TableComponent