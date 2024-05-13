import React from "react";
import { topDealUsers } from "../Data";

function TopBox() {
  return (
    <div className="topBox">
      <h1 className="text-xl xxl:text-2xl mb-5">Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div
            className="listItem flex items-center justify-between mb-8"
            key={user.id}
          >
            <div className="user flex items-center gap-4">
              <img
                src={user.img}
                alt=""
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover hidden lg:block"
              />
              <div className="userTexts">
                <span className="username text-base lg:text-lg font-semibold">
                  {user.username}
                </span>
                <span className="email text-sm lg:text-base hidden lg:block">
                  {user.email}
                </span>
              </div>
            </div>
            <span className="amount font-semibold">{`$${user.amount}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBox;
