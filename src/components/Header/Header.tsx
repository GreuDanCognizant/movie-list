import React, { FC } from "react";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className = ""}) => {
  return (
    <header className={`w-full bg-white shadow-sm border-b ${className}`}>
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center font-bold">
              ML
          </div>

          <span className="text-xl font-semibold text-gray-800">
            MovieList
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
