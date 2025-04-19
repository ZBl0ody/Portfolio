import React from "react";
import { Link } from "react-router-dom";

const Btn = ({ children, type, to }) => {
  const style = { primary: "bg-main rounded-3xl w-32 px- py-1 text-center" };
  return (
    <div className={style.primary}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

export default Btn;
