import { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import "./ProductList.scss"
import { Product } from '../../types'

const BASE_URL = 
    process.env.NODE_ENV === "production" ?
    "https://frail-slip-ox.cyclic.app" :
    "http://localhost:3000"

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(BASE_URL + '/api/v1/products')
          console.log(response.data)
          setProducts(response.data)
        } catch(err) {
          console.log(err)
        }
      }
      fetchProducts()
    },[])

    const handleDelete = async(id: any) => {
        try {
          const response = await axios.delete(BASE_URL + `/api/v1/products/${id}`)
          console.log(response.data)
        } catch(err) {
          console.log(err)
        }
    };

    console.log(products)

    const columns: GridColDef[] = [
        { field: "sku", headerName: "SKU", width: 220 },
        {
          field: "title",
          headerName: "Product",
          width: 300,
          renderCell: (params: any) => {
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.image} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 150 },
       
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "active",
          headerName: "Active ?",
          width: 150
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params: any) => {
            return (
              <>
                <Link to={"/product/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
      ];

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <div className="productList">
            <Link to="/newproduct">
                <button className="addProductButton">Create new product</button>
            </Link>
            <DataGrid
                rows={products && products}
                columns={columns}
                getRowId={(row)=>row._id}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
        </div>
    </>
  )
}

export default ProductList