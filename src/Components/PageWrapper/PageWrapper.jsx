import "./PageWrapper.scss";
const PageWrapper = (props) => {
  return (
    <div className="text-center page-wrapper container  ">{props.children}</div>
  );
};

export default PageWrapper;
