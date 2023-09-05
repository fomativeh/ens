type AuthWrapperProps = {
  children: JSX.Element;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className="w-[45%] min-h-[70vh] bg-[#fff] rounded-[8px] px-[100px] py-[45px]">
      {children}
    </section>
  );
};

export default AuthWrapper;
