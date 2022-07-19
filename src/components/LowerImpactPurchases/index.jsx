import React, { useState } from "react";
import "./styles.scss";
import { oneMonth, oneYear } from "./data";

export const LowerImpactPurchases = () => {
  function tabClick() {
    const monthTab = document.querySelector("#monthTab");
    const yearTab = document.querySelector("#yearTab");
    const monthTable = document.querySelector("#monthTable");
    const yearTable = document.querySelector("#yearTable");

    monthTab.addEventListener("click", () => {
      if (monthTable.classList.contains("hidden")) {
        monthTable.classList.remove("hidden");
        if (monthTab.classList.contains("inactive")) {
          monthTab.classList.remove("inactive");
        }
      }
      if (!yearTable.classList.contains("hidden")) {
        yearTable.classList.add("hidden");
        if (!yearTab.classList.contains("inactive")) {
          yearTab.classList.add("inactive");
        }
      }
    });

    yearTab.addEventListener("click", () => {
      if (yearTable.classList.contains("hidden")) {
        yearTable.classList.remove("hidden");
        if (yearTab.classList.contains("inactive")) {
          yearTab.classList.remove("inactive");
        }
      }
      if (!monthTable.classList.contains("hidden")) {
        monthTable.classList.add("hidden");
        if (!monthTab.classList.contains("inactive")) {
          monthTab.classList.add("inactive");
        }
      }
    });
  }

  // const [tabActive, setTabInactive] = useState(false);

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
        <div id="monthTab" className="tableTab" onClick={tabClick}>
          Last 30 Days
        </div>
        <div id="yearTab" className="tableTab inactive" onClick={tabClick}>
          Last 12 Months
        </div>
      </div>

      <div id="monthTable" className="table">
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
      <div id="yearTable" className="table hidden">
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
