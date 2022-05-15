import React, { useState, useEffect } from "react";
import MobileNav from "../layout/MobileNav";

export const Preload = ({ page }) => {
  const [loader, setLoader] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 5000);
  }, []);

  return (
    <div>
      {!loader ? (
        <div className="flex flex-col justify-center items-center h-[100vh] bg-[#0c2c41] text-white">
          <span className="text-white border-t border-b text-[23px]">
            zo<span className="text-secondaryAlternative">ft</span>
          </span>
        </div>
      ) : (
        <div>page={<MobileNav />}</div>
      )}
    </div>
  );
};
