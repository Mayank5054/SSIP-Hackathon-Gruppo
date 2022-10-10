import React, { useContext } from "react";
import Logo from "./Logo";
import MyLink from "./MyLink";
import pathContext from "../context/path-context";

const Nav = (props) => {
    const ctx = useContext(pathContext);

    let classes = "fixed w-full top-0 z-10";
    if (props.showBg) {
        classes += " bg-primary-900";
    }
    return (
      <nav className={classes}>
        <div className="flex justify-between items-center h-        ">
          <Logo />
          {props.isLoggedIn && (
            <div className=" w-2/6 h-16 pl-4 rounded-bl-full bg-secondary-900 text-primary-900 text-sm font-medium underline decoration-2 shadow-mine flex justify-between items-center">
              <div
                className="group navIteam cursor-pointer"
                onClick={ctx.navigateToHome}
              >
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/material-outlined/36/440F0F/home--v2.png"
                  alt="home"
                />
                <p className="hidden group-hover:block text-sm">Home</p>
              </div>

              <div
                className="group navIteam cursor-pointer"
                onClick={ctx.navigateToMeets}
              >
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/ios-glyphs/36/440F0F/meeting-room.png"
                  alt="meet"
                />
                <p className="hidden group-hover:block">Meet</p>
              </div>

              <div
                className="group navIteam cursor-pointer"
                onClick={ctx.navigateToCalendar}
              >
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/small/36/440F0F/calendar.png"
                  alt="calender"
                />
                <p className="hidden group-hover:block">Calender</p>
              </div>

              <div className="group navIteam" onClick={ctx.navigateToHistory}>
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/external-creatype-outline-colourcreatype/36/440F0F/external-history-video-player-line-set-creatype-outline-colourcreatype.png"
                  alt="history"
                />
                <p className="hidden group-hover:block">History</p>
              </div>

              <div className="group navIteam" onClick={ctx.navigateToHome}>
                <img
                  className="mx-auto"
                  src="https://img.icons8.com/ios-glyphs/36/440F0F/system-task--v1.png"
                  alt="DashBoard"
                />
                <p className="hidden group-hover:block">DashBoard</p>
              </div>
            </div>
          )}
        </div>
        {props.isLoggedIn && (
          <p
            className="relative text-right pr-6 my-3"
            onClick={ctx.navigateToCreateNewMeet}
          >
            <MyLink text={"Wanna create a new meet?"} />
          </p>
        )}
      </nav>
    );
};

export default Nav;
