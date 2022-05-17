import React from "react";
import Row from "./Row/Row";
import { useSelector } from "react-redux";
import { getStatistic } from "./Row/helpers";

const Content = () => {
  const data = useSelector((state) => state.lists.lists);
  const statistics = getStatistic(data);

  return (
    <>
      {statistics.length > 0 ? (
        <>
          {statistics.map((statistic) => {
            return (
              <div key={statistic.category}>
                <Row statistic={statistic} />
              </div>
            );
          })}
        </>
      ) : (
        <div>No content</div>
      )}
    </>
  );
};

export default Content;