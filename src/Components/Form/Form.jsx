import "./Form.scss";
import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: input, completed: false, id: Date.now() }]);
    setInput("");
  };

  return (
    <form onSubmit={onFormSubmit} className="d-flex justify-content-center">
      <input
        type="text"
        placeholder="Add Todo ..."
        className="todo-input "
        value={input}
        onChange={onInputChange}
      />
      <button className="btn btn-warning mx-3" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
