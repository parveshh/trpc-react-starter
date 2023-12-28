import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        id="wrapper"
        className="container lg mt-20 flex flex-col m-auto text-xl"
      >
        {children}
      </div>
    </>
  );
}
