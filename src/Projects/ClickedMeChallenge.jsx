import React, { useEffect, useState } from "react";

const Clicked = () => {
  const [num, setNum] = useState(0);
  useEffect(()=>{
    document.title=`You clicked ${num} times`;
  },[num])
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Clicked me {num}
      </button>
    </>
  );
};

export default Clicked;
