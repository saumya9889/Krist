import Header from "../Home/Header"; 

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

 