import { useState } from "react";
import PageWrapper from "../PageWrapper";
import Header from "../Header";
import Form from "../Form";
import TodoList from "../TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <PageWrapper>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </PageWrapper>
  );
};

export default Home;
