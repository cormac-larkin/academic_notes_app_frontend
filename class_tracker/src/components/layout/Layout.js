import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {

  return (
    <>
      <NavBar />
      <main className="main">{props.children}</main>
      <Footer text="Cormac Larkin 2022" />
    </>
  );
}

export default Layout;
