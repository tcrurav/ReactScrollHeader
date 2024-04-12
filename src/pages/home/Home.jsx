import { useState } from "react";
import Header from "../../components/header/Header";
import LongContent from "../../components/long-content/LongContent";
import "./Home.css";

function Home() {
  const [scrollOn, setScrollOn] = useState(false);

  const changedScrollY = (e) => {
    setScrollOn(e.target.scrollTop > 90 ? true : false);
  }

  return (
    <>
      <Header scrollOn={scrollOn} />
      <div className="home-long-content-wrapper" onScroll={changedScrollY}>
        <LongContent />
      </div>
    </>
  )
}

export default Home;