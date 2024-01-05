import React, { useState } from 'react';
import './todocss.css';
export default     function FirstComponent() {
  
  const [listArr,setarr] = useState([]); 
  const handleInputChange = (event) => {
    if (event.key === 'Enter') {
      if(event.target.value.trim()!==''){
        let obj={
          id:Date.now(),
          task:event.target.value,
          flag:false
        }
        let data=[...listArr]
        data.push(obj);
        setarr(data);
        event.target.value="";
      }
      else{
        alert('Enter somthing')
      }
      
    }
  };
const handleCheckboxChange = (index) => {
    const updatedList = [...listArr];
    const currentItem = updatedList.map((ele)=>{
      if(ele.id===index){
        if (ele.flag) {
          ele.task= ele.task.props.children || ele.task;
          ele.flag=false;
        } else {
          ele.task = <s>{ele.task}</s>;
          ele.flag=true;
        }
      }
    return ele;
    })
    console.log(listArr);
    setarr(currentItem);
  };
  const handleDelete = (index) => {    
    const updatedList = listArr.filter((elemet) => elemet.id !== index);
    setarr(updatedList);
  };
  const divStyle = {
    height: '800px',
    width: '70%',
    float: 'left',
    borderRight: '2px solid black'
  };
   const spa={
    float:"left",
  }
  const big = {
    
    width: '100%'
  };
  return (
    <div style={big}>
      <div>
        <p>सीताराम</p>
        <h1>सियावर रामचंद्र की जय...</h1>
        <hr />
      </div>
      <div style={divStyle} id='divv'>
        <h3>Task List </h3>
        <p>Add task to your list by typing to the right and press Enter & view pending tasks below.</p>
      
        <ul>
        {listArr.map((tas) => (
          <li key={tas.id}>
            <span style={spa}>{tas.task}</span>
            <input className='chk'
              type="checkbox"
              onChange={() => handleCheckboxChange(tas.id)}
            />
            <span className='cros' onClick={() => handleDelete(tas.id)}>&#x00D7;</span>
          </li>
        ))}
      </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="I need to..."
          id="newtodo"
          onKeyDown={handleInputChange}
        />
      </div>
    </div>
  );
}

