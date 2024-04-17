import React, { useState } from 'react';
import './Laptop.css';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';

const Laptop = ({id, name, price, imgUrl, processorType, processorCount, ram, SSDrom, HDDrom}) => {
    const [newName, setNewName] = useState(name);
    const [newPrice, setNewPrice] = useState(price);
    const [newProcessorType, setNewProcessorType] = useState(processorType);
    const [newProcessorCount, setNewProcessorCount] = useState(processorCount);
    const [newRam, setNewRam] = useState(ram);
    const [newSSDrom, setNewSSDrom] = useState(SSDrom);
    const [newHDDrom, setNewHDDrom] = useState(HDDrom);

    const handleSaveChanges = () => {
        fetch(`http://localhost:3000/laptops/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    imgUrl,  
                    price: newPrice,  
                    processorType: newProcessorType,  
                    processorCount: newProcessorCount,
                    ram: newRam,
                    SSDrom: newSSDrom,
                    HDDrom: newHDDrom
                })
            })
            .then(res => console.log(res.json()));
    }
    const handleDelete = () => {
        fetch(`http://localhost:3000/laptops/${id}`,
            {
                method: 'DELETE',
            })
            .then(res => console.log(res.json()));
    }
  return (
    <form className='laptop-wrapper'>
        <img src={imgUrl}/>
        <div className='info-wrapper'>
                <TextField className='input' id="standard-basic" label="Name" variant="standard" size="small" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <TextField className='input' id="standard-basic" label="Processor Type" variant="standard" size='small' value={newProcessorType} onChange={(e) => setNewProcessorType(e.target.value)}/>
                <TextField className='input' id="standard-basic" label="Processor Count" variant="standard" size="small" value={newProcessorCount} onChange={(e) => setNewProcessorCount(e.target.value)}/>
                <TextField className='input' id="standard-basic" label="Ram" variant="standard" size="small" value={newRam} onChange={(e) => setNewRam(e.target.value)}/>
                <TextField className='input' id="standard-basic" label="SSD" variant="standard" size="small" value={newSSDrom} onChange={(e) => setNewSSDrom(e.target.value)}/>
                <TextField className='input' id="standard-basic" label="HDD" variant="standard" size="small" value={newHDDrom} onChange={(e) => setNewHDDrom(e.target.value)}/> 
                <TextField className='input' id="standard-basic" label="Price" variant="standard" size="small" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
            <div className='buttons'>
                <Button variant="contained" color="secondary" onClick={() => handleSaveChanges()}>save changes</Button>
                <Button type='submit' variant="contained" color="error" onClick={() => handleDelete()}>delete</Button>
            </div>
        </div>
    </form>
  )
}

export default Laptop