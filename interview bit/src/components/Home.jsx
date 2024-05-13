import React from "react";
import BarChartBox from "./BarChartBox";
import BigChartBox from "./BigChartBox";
import ChartBox from "./ChartBox";
import PieChartBox from "./PieChartBox";
import TopBox from "./TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../Data";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} unit="visitors" />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} unit="profit" />
      </div>
    </div>
  );
};

export default Home;
