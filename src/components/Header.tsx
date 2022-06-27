import { List, X } from "phosphor-react";
import { Logo } from "./Logo";

type HeaderProps = {
  isVisibleSidebar: boolean;
  toggleSidebar: () => void;
};

export const Header = ({ isVisibleSidebar, toggleSidebar }: HeaderProps) => {
  return (
    <header
      className={
        "py-5 bg-gray-700 flex items-center justify-between lg:justify-center border-b border-gray-600 px-5 h-[4.5rem] fixed inset-x-0 top-0 z-[51]"
      }
    >
      <Logo />
      <button
        onClick={toggleSidebar}
        className="flex items-center gap-1 lg:hidden"
      >
        <span>Aulas</span>
        {isVisibleSidebar ? (
          <X className="text-blue-500 text-2xl" />
        ) : (
          <List className="text-blue-500 text-2xl" />
        )}
      </button>
    </header>
  );
};
