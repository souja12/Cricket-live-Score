import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

export default function Card(fetchData, data) {
  const [dataa, setDataa] = useState([]);
  fetchData = async () => {
    const res = await fetch(
      "https://api.cricapi.com/v1/currentMatches?apikey=5170ae7b-9565-4775-9d51-79471ee58e9a&offset=0"
    );

    const data = await res.json();
    setDataa(data.data);
    // console.log("new data", data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataa.map((value) => {
        return (
          <div className="container">
            <div className="live-matches p-5">
              <div className="card card-shadow p-0">
                <div className="score-card score-card-lg d-md-flex p-0">
                  <div className="score-card-inner flex-grow-1 px-20 py-20">
                    <div className="score-card-header mb-15">
                      <strong className="text-red">{value.status}</strong>
                      <span>{value.name}</span>
                      <span>{value.venue}</span>
                    </div>
                    <div className="score-card-body">
                      <div className="country-info">
                        <div className="flag-avatar">
                          <figure>
                            <img src={value.teamInfo[0].img} alt="" />
                          </figure>
                          <span className="country-name">
                            {value.teamInfo[0].shortname}
                          </span>
                        </div>
                        <div className="score-update ml-10">
                          <h5>
                            {value.score[0].r}/{value.score[0].w}
                          </h5>
                          <p className="text-muted">{value.score[0].o} ov.</p>
                          <p> CRR: {value.score[0].r / 20}</p>
                        </div>
                      </div>

                      <div className="country-info flex-row-reverse">
                        <div className="flag-avatar ml-10">
                          <figure>
                            <img src={value.teamInfo[1].img} alt="" />
                          </figure>
                          <span className="country-name">
                            {value.teamInfo[1].shortname}
                          </span>
                        </div>
                        <div className="score-update">
                          <h5>
                            {value.score[1]?.r}/{value.score[1]?.w}
                          </h5>
                          <p className="text-muted">{value.score[1]?.o} ov.</p>
                          <p> CRR: {value.score[1]?.r / 20}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
