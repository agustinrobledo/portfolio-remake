type PropsType = {
  children: JSX.Element | string;
  className?: string;
};

const Wrapper = ({ children, className, ...otherProps }: PropsType) => {
  return (
    <div
      className={`max-w-screen-2xl w-full mx-auto flex justify-center ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Wrapper;
