import React from "react";
import processData from "./utils/processData";

export default function Process() {
  function Processes() {
    return (
      <div className="processContainer__processWrap flex centerContents flex--cr flex--wrap">
        {processData.map((process, index) => {
          const { title, description } = process;
          return (
            <div
              key={index}
              className="processContainer__process card"
              data-process-no={++index}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section className="processContainer maximumWidth">
      <div className="content">
        <h2 className="heading">This is how it works</h2>
        <Processes />
      </div>
    </section>
  );
}
