import './todo_list.css'
import React, { useEffect, useState } from 'react'
import IMG from '../images/list.png'
import { BiEdit } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

// get the localstorage data


const getLocalData =()=>{
  const lists = localStorage.getItem('mytodolist')

  if(lists){
    return JSON.parse(lists)
  }
  else{
    return []
  }
}


const Todolist = () => {

  const [inputdata, setInputdata] = useState("")
  const [items, setItems] = useState(getLocalData())
  const [isEditItem, setIsEditItem] = useState('')
  const [toggleButton, setToggleButton] = useState(false)

  // =========== add items =============

  const addItem = () => {
    if (!inputdata) {
      alert('please add data..!')
    }
    else if(inputdata && toggleButton){
      setItems(
        items.map((curEl)=>{
          if(curEl.id ===isEditItem){
            return {...curEl, name:inputdata}
          }
          return curEl
        })
      )
      setInputdata('')
      setIsEditItem(null)
      setToggleButton(false)
    }
    else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata
      }
      setItems([...items, myNewInputData])
      setInputdata('')
    }
  }
  // ================= edit the item================

  const editItem =(index)=>{
    const itemEdited = items.find((curEl)=>{
      return curEl.id === index
    })

    setInputdata(itemEdited.name)
    setIsEditItem(index)
    setToggleButton(true)

  }

  // ============== how to delete item ===============

  const deleteItem = (index) => {
    const updatedItem = items.filter((currEl) => {
      return currEl.id !== index

    });
    setItems(updatedItem)
  }

  // ================ remove all ====================

  const removeAll = () => {
    setItems([])
  }

  // local Storage
  
  useEffect(()=>{
    localStorage.setItem('mytodolist', JSON.stringify(items))
  },[items]
)


  return (
    <>
      <div className="main_div">
        <div className="list_img">
          <figure >
            <img src={IMG} alt="todo_list" className='todo_img' />
            <figcaption>Add Your List Here ✌..!</figcaption>
          </figure>
        </div>
        <div className="add_items">

          <input type="text" placeholder='✍ Add Item' className='form_control'
            value={inputdata}
            onChange={(event) => {
              setInputdata(event.target.value)
            }
            } />

          {toggleButton?(<BiEdit className='plus_icon' onClick={addItem} />):(<AiOutlinePlus className='plus_icon' onClick={addItem} />)}
          
        </div>

        {/* SHOW ITEMS */}

        {items.map((currEl) => {
          return (
            <>
              <div key={currEl.id} className="each_item">
                <h5>{currEl.name}</h5>
                <div className="todo_btn">
                  <BiEdit className='icm' onClick={()=>editItem(currEl.id)} />
                  <BsTrash className='icn' onClick={() => deleteItem(currEl.id)} />
                </div>
              </div>
            </>)

        })}

        <div className="show_item">
          <button className='btn' onClick={removeAll}>
            <span>REMOVE ALL</span>
          </button>
        </div>
      </div>
    </>

  )
}

export default Todolist

