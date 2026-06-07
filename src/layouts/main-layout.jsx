import { Link } from "react-router";
import ContainerLayout from "./container-layout";
import Header from "./header";

export default function MainLayout({children}) {
  return (
    <>
      <Header>
        <Link to={"/about"}>
        <button>Tentang Kami</button>
      </Link>
      </Header>
      <ContainerLayout>{children}</ContainerLayout>
    </>
  );
}
