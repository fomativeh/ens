type AuthWrapperProps = {
  children: JSX.Element;
};

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  return (
    <section className={`desktopLG:w-[45%] min-h-[70vh] w-[90%] tablet:max-w-[70%] min-w-[300px] bg-[#fff] rounded-[8px] px-[50px] mt-[100px] 
    desktopLG:mt-0 desktopLG:px-[100px] py-[45px] `}>
      {children}
    </section>
  );
};

export default AuthWrapper;
