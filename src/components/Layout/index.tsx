import * as React from "react";

import Menu from "../Menu";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <main className="w-full p-[20px] flex">
      <Menu />
      <div className="flex flex-col items-start gap-[20px] m-auto">
        {children}
      </div>
    </main>
  );
}
