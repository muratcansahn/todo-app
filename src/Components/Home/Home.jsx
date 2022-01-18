import { useState } from "react";
import { PageWrapper, Header, Form, TodoList } from ".";

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
