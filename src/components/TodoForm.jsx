import React,{useState,useRef,useEffect} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  // 
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  // 
const handelChange = (e) => {
 setInput(e.target.value)
}

const handelSubmit = (e) => {
   e.preventDefault()
   props.onSubmit({
     id:Math.floor(Math.random()*10000),
     text:input
   })
    setInput('') 
}
  return (
    <form onSubmit={handelSubmit} className='todo-form'>
    {props.edit ? (
      <>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handelChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={handelSubmit} className='todo-button edit'>
          Update
        </button>
      </>
    ) : (
      <>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handelChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={handelSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    )}
  </form>
  )
}

export default TodoForm
