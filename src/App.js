import Navbar from "./components/Navbar";
import users from "./json/users.json";
import { useEffect, useRef, useState } from "react";
import LandingPage from "./pages/user/landing-page";

function App() {
  const user = users.find((data) => data.id === 1);

  return (
    <>
      <Navbar user={user} />
      <LandingPage />
    </>
  );
}

export default App;
