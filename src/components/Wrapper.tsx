type PropsType = {
  children: JSX.Element | string;
  className?: string;
};

const Wrapper = ({ children, className, ...otherProps }: PropsType) => {
  return (
    <div
      className={`max-w-screen-lg flex justify-center ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Wrapper;
