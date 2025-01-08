import { ReactNode } from "react";
import Menu from "./menu";
import Footer from "./menu/footer";

interface IAppLayout {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <main className="flex flex-col min-h-screen  ">
      <div className="max-w-[1550px] mx-auto py-2 px-3 lg:px-3 ">
        <Menu />
        <div className="mt-4 flex-grow">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default AppLayout;
