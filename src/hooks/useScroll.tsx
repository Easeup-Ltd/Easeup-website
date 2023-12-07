/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useScroll(target: number = 10) {
  const [addBorder, setAddBorder] = useState(false);
  const onScroll = ()=>{
    let lastKnownPosition = window.scrollY;
    if (lastKnownPosition > target) {
      setAddBorder(true);
    } else {
      setAddBorder(false);
    }
  
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return ()=>{
        window.removeEventListener("scroll", onScroll)
    }
  }, [setAddBorder, target]);
  return addBorder;
}

export default useScroll;
