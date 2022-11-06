type PropsType = {
  children: JSX.Element | string;
};

const Wrapper = ({ children, ...otherProps }: PropsType) => {
  return (
    <div className="max-w-screen-xl mx-auto" {...otherProps}>
      {children}
    </div>
  );
};

export default Wrapper;
