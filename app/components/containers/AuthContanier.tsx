const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-fit h-full w-full flex items-center justify-center mt-28">
      {children}
    </div>
  );
};

export default AuthContainer;
