import React, { useEffect, useState } from 'react';
import { Members } from './Members';

export const TransferMember = () => {
    const [reactMembers, setReactMembers] = useState(()=>{
      return [{
          name: "Đinh Tuấn Anh",
          age: 20,
        },
        {
            name: "Ngụy Minh Thắng",
            age: 19,
        },
        {
          name: "Nguyễn Anh Thư",
          age: 21,
        },
       ]
    });
    const [javaMembers, setJavaMembers] = useState(()=>{
      return [{
        name: "Bế Trọng Hiếu",
        age: 20,
      },
      {
          name: "Ngô Huỳnh Đức",
          age: 19,
      },
      {
        name: "Nguyễn Mạnh Dũng",
        age: 21,
      },
     ]
    });
    useEffect(()=>{
      if(javaMembers.length===0){
        alert("Java Class is Empty");
      } else if (reactMembers.length===0){
        alert("React Class is Empty");
      }
    },[reactMembers.length,javaMembers.length])

    const transferReactToJavaMember =(index)=>{
      const el = reactMembers[index];
      reactMembers.splice(index,1);
      javaMembers.push(el);
      setReactMembers([...reactMembers]);
      setJavaMembers([...javaMembers]);
    }
    const transferJavaToReactMember =(index)=>{
      const el = javaMembers[index];
      javaMembers.splice(index,1);
      reactMembers.push(el);
      setReactMembers([...reactMembers]);
      setJavaMembers([...javaMembers]);
    }

    const [formData, setFormData] = useState({
      name:"",
      age:"",
      classType:""
    })

    const handleInput=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value,
      })
    }

    const handleSubmit = ()=>{
      if(formData.classType === "java"){
        javaMembers.push(formData);
        setJavaMembers([...javaMembers]);
      } else{
        reactMembers.push(formData);
        setReactMembers([...reactMembers]);
      }
      setFormData({
        name:"",
        age:"",
        classType:""
      })
    }

  return (
      <div>
        <h1>List member of React Class</h1>
        {
          reactMembers.length>0? reactMembers.map((user, index)=>{
            return <Members name={user.name} age={user.age} key={index} handleTransfer={()=>transferReactToJavaMember(index)}/>
          }):"empty class"
        }
        <h1>List member of Java Class</h1>
        {
          javaMembers.length>0? javaMembers.map((user, index)=>{
            return <Members name={user.name} age={user.age} key={index} handleTransfer={()=>transferJavaToReactMember(index)}/>
          }):"empty class"
        }

        <form onSubmit={(e)=>{
          e.preventDefault();
        }}>
          <h1>Form Add Members</h1>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={(e)=>handleInput(e)}></input>
          {" - "}
          <label>Age: </label>
          <input name="age" value={formData.age} onChange={(e)=>handleInput(e)}></input>
          <select name="classType" value={formData.classType} onChange={(e)=>handleInput(e)}>
            <option value="react">React</option>
            <option value="java">Java</option>
          </select>
          <button onClick={()=>handleSubmit()}>Submit</button>
        </form>
      </div>
  )
}
