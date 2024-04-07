import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../Componects/Sidebar/Sidebar";
import Feed from "../../Componects/Feed/Feed";

const Home = ({ sidebar }) => {
  const [category, setCotegory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCotegory={setCotegory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
