import { UserButton } from "@clerk/nextjs";
import React from "react";

function Home() {
  return (
    <header>
      <UserButton afterSignOutUrl="/" />
    </header>
  );
}

export default Home;
