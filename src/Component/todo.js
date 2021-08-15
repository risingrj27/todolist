import React, { useState } from "react";
import "./style.css";
import Logo from "./logo.jpg";

const Todo = () => {
    const [inputData,setInputData] = useState(" ");
    const [items,setItems] = useState([]);

    const addItem = () => {
        if(!inputData){
            alert("To Add item please write the name of item")
        }else {

            const myNewData = {
                id: new Date().getTime().toString(),
                name : inputData,
            };
            setItems([... items, myNewData]);
            setInputData("");
        }
    }

    // delete item

    const deleteItem = (index) => {
        const updateItem = items.filter((currEle) => {
            return currEle.id !== index;
        });
        setItems(updateItem);
    }
    return(
        <>
            <div className="main_div">
                <div className="sub_div" >
                    <figure>
                        <img className="logo" src={Logo} alt="todo image"/>
                        <figcaption>Add Your Todo Tasks Here</figcaption>
                    </figure>
                    <div className="addItem">
                        <input type="text" placeholder="Add Task"  value={ inputData } onChange={(event) => setInputData(event.target.value)}/>
                        <i className="fas fa-plus add-btn" onClick={addItem}></i>
                    </div>
                    {/* show item  */}
                    <div className="showItem">

                        {items.map((currEle) => {
                            return (
                                <div className="eachItem" key={currEle.id}>
                                <h3>{currEle.name}</h3>
        
                                <div className="todo_Btn">
                                <i className="far fa-edit add-btn1"></i>
                                <i className="fas fa-trash add-btn1" onClick={() => deleteItem(currEle.id)}></i>
                                </div>
                                </div>           
                            )

                        })}
                        

                    </div>

                    {/* remove and check button */}
                    <div className="showItem">
                        <button className="btn">Check List</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;