import { useRef, useState } from "react"


function Todo(){
    const [toDos,setToDos]=useState([])
    const [toDo,setToDo]=useState('')
    const [update,setUpdate]=useState(true)
    const [updateTodo,setUpdateTodo]=useState({})
    const inp = useRef()
  function submit(){

    setToDos(prev => prev.map(obj=>{
      console.log(updateTodo);
      if(obj.key === updateTodo.key){
          obj = updateTodo
          console.log(obj);
      }
      return obj;
  }))


  setUpdate(true) 

  }

  function handleOnchange(e){
    setUpdateTodo({
      ...updateTodo,
      text:inp.current.value
    })

    console.log(updateTodo,'updateTodo')
  }

return(
    <div className="app">

    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🙁 ⚽ </h2>
    </div>
    <div className="input">
      <input value={toDo} ref={inp} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      
      <i onClick={()=>{
        if(toDo){
          setToDos([...toDos,{key:Date.now(),text:toDo,status:false}])
        setToDo('')
          inp.current.focus()
        }
    }} className="fas fa-plus"></i>
    
    </div>
    {update ?<div className="todos">
      
        { 

            toDos.map((ob)=>{
             return(
                <div className="todo">
                <div className="left">
                  <input value={ob.status}  onChange={(e)=>{ 
                   
                    setToDos(toDos.filter(obj=>{
                        if(obj.key===ob.key){
                            console.log(toDos);
                            ob.status=e.target.checked
                        }
                        
                        return obj
                       
                    }))
                   

                  }} type="checkbox" name="" id="" />
                  
                  {ob.status ? <p style={{color:'red'}}><del>{ob.text}</del></p>:<p>{ob.text}</p>}
                </div>
                { !ob.status ?
                <div className="right">
                <i className="fas fa-times" onClick={(e)=>{
               
                  setToDos(toDos.filter(obj=>{
                      console.log('delete');
                      return obj.key !== ob.key
                  }))
                  console.log(toDos);
                }} ></i>
                <i class="fa-solid fa-pen" onClick={()=>{

                  setUpdate(false) 
                  setUpdateTodo(ob)

                  console.log(ob);

                }} ></i>
              </div>:<div></div>}
              </div>

             )  

            })
        }
     
    </div>:<div className="input" >
       <input value={updateTodo.text} ref={inp} type="text" onChange={handleOnchange} />
       <button onClick={submit}>Update</button>
       </div>}
      
    
    
    
  </div>
)

}
export default Todo