import React, { useState } from "react";
import "./styles.scss";
import { oneMonth, oneYear } from "./data";

export const LowerImpactPurchases = () => {
  const [tabActive, setTabInactive] = useState(false);

  return (
    <div className="lower-impact-purchases section">
      <h2>Your Table Here</h2>
      <hr />
      <h1>Lower Impact Purchases</h1>
      <p>
        There are {oneMonth.length} lower impact companies in the past month and{" "}
        {oneYear.length} lower impact companies in the past 12 months.
      </p>
      <div className="tabs">
        <div
          id="monthTab"
          className={`tableTab ${tabActive ? "" : "inactive"}`}
          onClick={() => setTabInactive(!tabActive)}
        >
          Last 30 Days
        </div>
        <div
          id="yearTab"
          className={`tableTab ${!tabActive ? "" : "inactive"}`}
          onClick={() => setTabInactive(!tabActive)}
        >
          Last 12 Months
        </div>
      </div>

      <div id="monthTable" className={`table ${tabActive ? "" : "hidden"}`}>
        {oneMonth.map((d, idx) => {
          return (
            <a
              href={d.company.url}
              target="_blank"
              className="tableRow"
              key={idx}
            >
              <div className="rowLeft">
                <img
                  src={`../emoji-${d.company.rating}.svg`}
                  alt={`${d.company.rating} face emoji`}
                />
                <div className="companyName">{d.company.companyName}</div>
              </div>
              <div className="rowRight">
                <div className="spent">
                  $
                  {Number(d.totalSpent)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div>&#8250;</div>
              </div>
            </a>
          );
        })}
      </div>
      <div id="yearTable" className={`table ${!tabActive ? "" : "hidden"}`}>
        {oneYear.map((d, idx) => {
          return (
            <a
              href={d.company.url}
              target="_blank"
              className="tableRow"
              key={idx}
            >
              <div className="rowLeft">
                <img
                  src={`../emoji-${d.company.rating}.svg`}
                  alt={`${d.company.rating} face emoji`}
                />
                <div className="companyName">{d.company.companyName}</div>
              </div>
              <div className="rowRight">
                <div className="spent">
                  $
                  {Number(d.totalSpent)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </div>
                <div>&#8250;</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
