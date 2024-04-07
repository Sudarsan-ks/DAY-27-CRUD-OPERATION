import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context'
import { Typography, CardContent, Card } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Product() {

  const { product, handleedit, handledelete } = useContext(ProductContext)
  return (
    <div className='product'>
      {
        product.map((data, index) => {
          return (
            <Card className="card" key={index}>
              <CardContent>
                <Typography variant='h4'>Name - {data.name}</Typography>
                <Typography variant='body1' >UserName: {data.username}</Typography>
                <Typography variant='body1' >Email: {data.email}</Typography>
                <Typography variant='h6' >Address</Typography>
                <Typography variant='body1' >Street: {data.address.street}</Typography>
                <Typography variant='body1' >Suite: {data.address.suite}</Typography>
                <Typography variant='body1' >City: {data.address.city}</Typography>
                <Typography variant='body1' >Zipcode: {data.address.zipcode}</Typography>
                <Typography variant='body1' >Lattitude: {data.address.geo.lat}</Typography>
                <Typography variant='body1' >Longitude: {data.address.geo.lng}</Typography>
                <Typography variant='body1' >Phone: {data.phone}</Typography>
                <Typography variant='body1' >Website: {data.website}</Typography>
                <Typography variant='h6' >Company</Typography>
                <Typography variant='body1' >Name: {data.company.name}</Typography>
                <Typography variant='body1' >CatchPhrase: {data.company.catchPhrase}</Typography>
                <Typography variant='body1' >Bs: {data.company.bs}</Typography>
              </CardContent>
              <div className="buttons">
                <div className="deletebtn">
                  <DeleteIcon color='secondary' onClick={() => handledelete(data.id)} />
                </div>
                <div className="editbtn">
                  <EditIcon color='primary' onClick={() => handleedit(data.id)} />
                </div>
              </div>
            </Card>
          )
        })
      }
    </div>
  )
}

