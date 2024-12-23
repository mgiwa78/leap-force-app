import { ReactNode } from "react";
import Menu from "./menu";

interface IAppLayout {
  children: ReactNode;
}

const AppLayout = ({ children }: IAppLayout) => {
  return (
    <main className="max-w-6xl mx-auto py-2 px-3 lg:px-0 lg:py-4">
      <Menu />
      <div className="mt-4">{children}</div>
    </main>
  );
};

export default AppLayout;
