import React from "react";
import { topDealUsers } from "../Data";
import WorldMap from "react-svg-worldmap";

const Wp = () => {
  const data = topDealUsers.reduce((acc, user) => {
    if (acc[user.country]) {
      acc[user.country]++;
    } else {
      acc[user.country] = 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <WorldMap
        color="red"
        title="Top 10 Populous Countries"
        value-suffix="people"
        size="lg"
        data={data}
      />
    </div>
  );
};

export default Wp;
