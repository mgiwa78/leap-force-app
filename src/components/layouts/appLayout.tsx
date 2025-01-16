import { ReactNode } from "react";
import Menu from "./menu";
import Footer from "./menu/footer";

interface IAppLayout {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <main className="bg-[#FAFBF5]">
      <div className="flex flex-col min-h-screen  max-w-[1550px] mx-auto py-2 px-3 lg:px-3 lg:pt-4 lg:mb-[100px]">
        <Menu />
        <div className="mt-4 flex-grow">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};

export default AppLayout;
