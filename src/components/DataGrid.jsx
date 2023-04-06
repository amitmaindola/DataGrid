import { Check, Close, SettingsEthernet } from '@mui/icons-material';
import { Button, Divider, TextField } from '@mui/material'
import React, { useState } from 'react'

function DataGrid() {
  const [data, setData] = useState([
        { id: 1, name: "Sudheer", dob: "13-05-1989", occupation: "Engineer" },
        { id: 2, name: "Ajay", dob: "12-04-1994", occupation: "Manager" },
        { id: 3, name: "Puja", dob: "12-12-1996", occupation: "Architect" }
    ]);
 
 const [id, setId] = useState(4)
 const [name, setName] = useState("")
 const [dob, setDob] = useState("")
 const [occupation, setOccupation] = useState("")
 const [editId, setEditId] = useState(-1)
 const [editName, setEditName] = useState("")
 const [editDob, setEditDob] = useState("")
 const [editOccupation, setEditOccupation] = useState("")

 const handleNameChange = (e) => {
    setName(e.target.value)
 }

 const handleDOBChange = (e) => {
    setDob(e.target.value)
 }

 const handleOccupationChange = (e) => {
    setOccupation(e.target.value)
 }

 const handleEditNameChange = (e) => {
    setEditName(e.target.value)
 }

 const handleEditDOBChange = (e) => {
    setEditDob(e.target.value)
 }

 const handleEditOccupationChange = (e) => {
    setEditOccupation(e.target.value)
 }

 const addItem = () => {
    setData([...data, {
        id : id,
        name: name,
        dob: dob,
        occupation: occupation
    }])
    setId(id+1)
 }

 const deleteItem = (id) => {
    setData(data.filter((dataItem) => dataItem.id !== id))
 }


 const editItem = () => {
    var newData = data.map((dataItem)=>{
        if(dataItem.id === editId){
            return {
                id: dataItem.id,
                name: editName,
                dob: editDob,
                occupation: editOccupation
            }
        }
        else return dataItem;
    })


    setData(newData);

    setEditId(-1);
 }

 const cancelEdit = () => {
    setEditId(-1)
 }

  return (
    <div style={{width:'80%', margin: 'auto'}}>
        <h1>Table</h1>
        <div>
            <TextField onChange={handleNameChange} value={name} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
            <TextField onChange={handleDOBChange} value={dob} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
            <TextField onChange={handleOccupationChange} value={occupation} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
            <Button onClick={addItem} size='large' variant='contained'>Add New</Button>
        </div>
        <div style={{marginTop: 30}}>
            <div style={{display: 'flex', width: '100%', maxWidth: 900, justifyContent: 'space-around', fontSize: 20}}>
                <b style={{flexGrow: 1, width:100}}>Name</b>
                <b style={{flexGrow: 1, width:100}}>DOB</b>
                <b style={{flexGrow: 1, width:100}}>Occupation</b>
                <b style={{flexGrow: 1, width:100}}>Actions</b>
            </div>
            <Divider />
            {data.map((dataItem)=>{
                return <div style={{display: 'flex', width: '100%', maxWidth: 900, justifyContent: 'space-around', fontSize: 20}}>
                    <p style={{flexGrow: 1, width:100}}>{dataItem.name}</p>
                    <p style={{flexGrow: 1, width:100}}>{dataItem.dob}</p>
                    <p style={{flexGrow: 1, width:100}}>{dataItem.occupation}</p>
                    <p style={{flexGrow: 1, width:100}}>
                        <Button size='small' onClick={()=>{setEditId(dataItem.id); setEditName(dataItem.name); setEditDob(dataItem.dob); setEditOccupation(dataItem.occupation)}} color='primary' variant='contained' style={{marginRight: 10}}>Edit</Button>
                        <Button onClick={() => deleteItem(dataItem.id)} size='small' color='warning' variant='contained'>Delete</Button>
                    </p>
                </div>
            })}
        </div>
        {(()=>{
            if(editId!==-1){
                return <div style={{width: '100%'}}>
                        <p style={{marginTop: 30, fontSize: 20}}><b>Edit Values</b></p>
                        <TextField onChange={handleEditNameChange} value={editName} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
                        <TextField onChange={handleEditDOBChange} value={editDob} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
                        <TextField onChange={handleEditOccupationChange} value={editOccupation} sx={{border: "1px solid #aaf", borderRadius:2, marginRight: 1}} size='small'/>
                        <Button onClick={editItem} size='large' style={{marginRight: 10}} variant='contained'>
                            <Check />
                        </Button>
                        <Button onClick={cancelEdit} size='large' variant='contained'>
                            <Close />
                        </Button>
                    </div>
            }
        })()}
    </div>
  )
}

export default DataGrid