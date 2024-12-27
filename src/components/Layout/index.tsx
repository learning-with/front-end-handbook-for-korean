import * as React from "react";

import Menu from "../Menu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="w-full justify-center">
      <Menu />
      <div className="w-full max-w-[1000px] m-auto flex flex-col items-center p-[20px]">
        {children}
      </div>
    </main>
  );
}
