import React, { useState } from "react";

export const MenuItem = (props) => {
  const [openNav, setOpenNav] = useState(undefined);

  return (
    <div>
      <span
        className="text-[30px] text-white border-1 border-b"
        onClick={() => setOpenNav(!openNav)}
      >
        {props.main}
      </span>
      {openNav && (
        <>
          <ul>
            <li className="text-[18px] ">{props.submenu1}</li>
            <li className="text-[18px]">{props.submenu2}</li>
            <li className="text-[18px]">{props.submenu3}</li>
            <li className="text-[18px]">{props.submenu4}</li>
          </ul>
        </>
      )}
    </div>
  );
};
