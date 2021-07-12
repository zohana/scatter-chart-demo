import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { dataReducer } from "../../reducers/Reducers";
import { SET_DATA } from "../../actions/Actions";

import CustomToolTip from "../ui/toolTip/CustomToolTip";
import Blurb from "../ui/blurb/Blurb";
import CustomButton from "../ui/button/CustomButton";

import "./Chart.css";

const legendStyle = {
  position: "relative",
  top: "0px",
};

const styleToolTip = {
  width: "auto",
  height: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
};

const Chart = (props) => {
  console.log(props.location.data);
  let history = useHistory();
  const [data, dispatch] = useReducer(dataReducer, []);
  const [pageInitialization, setPageInitialization] = useState(false);

  const getData = () => {
    dispatch({ type: SET_DATA, payload: props.location.data });
    setPageInitialization(true);
  };

  useEffect(() => {
    if (!pageInitialization) {
      getData();
    }
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <Blurb text="Vola!" />
          <br />
          <ResponsiveContainer width="80%" aspect={2}>
            <ScatterChart
              width={400}
              height={400}
              animationBegin={15000}
              animationDuration={20000}
              animationEasing="ease-out"
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <Legend
                verticalAlign="bottom"
                height={36}
                wrapperStyle={legendStyle}
              />
              <XAxis
                type="number"
                interval={0}
                dataKey="x"
                stroke="#cccccc"
                strokeWidth="2"
                name="X axis"
                label={{ value: "X axis", position: "bottom", offset: 10 }}
                tickCount={10}
                unit=""
                tick={{
                  stroke: "#b3b3b3",
                  strokeWidth: 1,
                  fontSize: "13",
                  angle: "320",
                  textAnchor: "end",
                }}
              />
              <YAxis
                type="number"
                dataKey="y"
                stroke="#cccccc"
                strokeWidth="2"
                name="Y axis"
                interval={0}
                tickCount={10}
                unit="mm"
                label={{
                  value: "Y axis",
                  angle: -90,
                  position: "insideLeft",
                  offset: "-10",
                }}
                tick={{
                  stroke: "#b3b3b3",
                  strokeWidth: 1,
                  fontSize: "12",
                }}
              />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={<CustomToolTip />}
                contentStyle={styleToolTip}
                animationBegin={100}
                animationDuration={500}
                animationEasing="ease"
              />
              <Scatter
                name="Point"
                data={data}
                fill="#ff8533"
                stroke="#ff8533"
                strokeWidth="8"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
          <br />
          <br />
          <p>Create another scatter chart?</p>
          <CustomButton
            handleOnClick={() => history.goBack()}
            children="Set Coordinates"
          />
        </div>
      ) : (
        <div>
          <p>Please enter the coordinates to create your scatter chart</p>
          <CustomButton
            handleOnClick={() => history.goBack()}
            children="Set Coordinates"
          />
        </div>
      )}
    </div>
  );
};

Chart.propTypes = {
  props: PropTypes.any,
};

export default Chart;
