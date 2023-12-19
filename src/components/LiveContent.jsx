import Header from "./Header";
import SportContent from "../components/SportContent";
import LiveGame from "../components/LiveGame";
import { createContext, useState } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

export const SportTypeIdContext = createContext({});

export default function LiveContent() {
  const [sportTypeid, setSportTypeid] = useState(-1);
  const [searchText, setSearchText] = useState("sfsdfsdf");
  const contex = {};
  return (
    <>
      <SportTypeIdContext.Provider
        value={{ sportTypeid, setSportTypeid, searchText, setSearchText }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<SportContent />}></Route>
            <Route path="/lives" element={<SportContent />}></Route>
            <Route path="/live/:id/:sport" element={<LiveGame />}></Route>
          </Routes>
        </BrowserRouter>
      </SportTypeIdContext.Provider>
    </>
  );
}
