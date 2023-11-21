import React from "react";

function Bottombar() {
  return (
    <div className="w-full h-14 center bg-[#003a5b]">
      <div className=" w-full px-[50px] center justify-between max-w-7xl">
        <div className="text-[#cde7f7]">© 2023 Edzorb Law Private Limited</div>
        <ul className="center gap-5 ">
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            F.A.Q
          </li>
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            About Us
          </li>
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            Career
          </li>
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            Blog
          </li>
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            Privacy Policy
          </li>
          <li className="text-[#cde7f7] hover:text-white cursor-pointer">
            Terms & Conditions
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottombar;
