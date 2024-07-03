import React, { useState } from "react";

function Todo() {
  const [inputVal, setinputVal] = useState("");
  const [todo, setTodo] = useState([]);
  //   console.log(inputVal);
  //   console.log(todo);

  const CreateTodo = () => {
    setTodo((todo) => {
      const UpdatedList = [...todo, inputVal];
      return UpdatedList;
    });
  };

  const Delete = (i) => {
    const Newlist = [...todo];
    Newlist.splice(i, 1);
    setTodo(Newlist);
  };

  const Edit = (i) => {
    const temp = [...todo];
    temp[i] = inputVal;
    setTodo(temp);
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setinputVal(e.target.value)}
      />
      <button onClick={CreateTodo}>Add</button>

      <div>
        {todo.map((data, i) => {
          console.log(i);
          return (
            <div key={i}>
              {data} <button onClick={() => Delete(i)}>remove</button>
              <button onClick={() => Edit(i)}>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
