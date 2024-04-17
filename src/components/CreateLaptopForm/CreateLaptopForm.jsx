import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import './CreateLaptopForm.css';

const CreateLaptopForm = () => {
    const [newName, setNewName] = useState();
    const [newImgUrl, setNewImgUrl] = useState();
    const [newPrice, setNewPrice] = useState();
    const [newProcessorType, setNewProcessorType] = useState();
    const [newProcessorCount, setNewProcessorCount] = useState();
    const [newRam, setNewRam] = useState();
    const [newSSDrom, setNewSSDrom] = useState();
    const [newHDDrom, setNewHDDrom] = useState();
    const [newAmount, setNewAmount] = useState();

    const handleCreate = () => {
        fetch(`http://localhost:3000/laptops`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: newName,
                    price: newPrice,
                    imgUrl: newImgUrl,
                    processorType: newProcessorType,
                    processorCount: newProcessorCount,
                    ram: newRam,
                    SSDrom: newSSDrom,
                    HDDrom: newHDDrom,
                    amount: newAmount
                })
            })
            .then(res => console.log(res.json()));
    }
    const handleReset = () => {
        
    }
  return (
    <form className='form-wrapper'>
        <TextField className='input' id="standard-basic" label="Name" variant="standard" size="small" value={newName} onChange={(e) => setNewName(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="Image Link" variant="standard" size="small" value={newImgUrl} onChange={(e) => setNewImgUrl(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="Processor Type" variant="standard" size='small' value={newProcessorType} onChange={(e) => setNewProcessorType(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="Processor Count" variant="standard" size="small" value={newProcessorCount} onChange={(e) => setNewProcessorCount(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="Ram" variant="standard" size="small" value={newRam} onChange={(e) => setNewRam(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="SSD" variant="standard" size="small" value={newSSDrom} onChange={(e) => setNewSSDrom(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="HDD" variant="standard" size="small" value={newHDDrom} onChange={(e) => setNewHDDrom(e.target.value)}/> 
        <TextField className='input' id="standard-basic" label="Price" variant="standard" size="small" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/>
        <TextField className='input' id="standard-basic" label="Amount" variant="standard" size="small" value={newAmount} onChange={(e) => setNewAmount(e.target.value)}/>
        <div className='buttons'>
            <Button variant="contained" color="secondary" onClick={() => handleCreate()}>Create Laptop</Button>
            <Button type='submit' variant="contained" color="error" onClick={() => handleReset()}>Reset</Button>
        </div>
    </form>
  )
}

export default CreateLaptopForm