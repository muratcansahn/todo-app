import PageWrapper from "../PageWrapper";
import Header from "../Header";
import Form from "../Form";
import TodoList from "../TodoList";

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Form />
      <TodoList />
    </PageWrapper>
  );
};

export default Home;
