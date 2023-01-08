import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent context={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl p-3 rounded-full hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((pam) => !pam)}
        color={currentColor}
        className="text-xl"
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("Cart")}
          color={currentColor}
          className="text-xl"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("Chat")}
          color={currentColor}
          className="text-xl"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick("Notification")}
          color={currentColor}
          className="text-xl"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex p-1 hover:bg-light-gray rounded-lg gap-2 items-center cursor-pointer "
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">Ajay</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.Cart && <Cart />}
        {isClicked.Chat && <Chat />}
        {isClicked.Notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
