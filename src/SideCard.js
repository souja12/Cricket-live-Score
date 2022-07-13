import React from "react";
import "./App.css";

export default function SideCard() {
  return (
    <div id="main" className="mainContainer">
      <div className="container">
        <div className="row">
          <div className="col-lg-9"></div>
          <div className="col-lg-3">
            <aside className="sidebar right-sidebar">
              <div className="widget widget-upcoming-match">
                <h3 className="widget-title">Upcoming Matches</h3>
                <div className="card card-shadow">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a data-toggle="tab" href="#series" className="active">
                        Series
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#league">
                        League
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id="series" className="tab-pane fade in show active">
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/afghanistan.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/australia.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/india.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/england.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/bangladesh.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/zimbabwe.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="league" className="tab-pane fade">
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/bangladesh.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/india.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/south-africa.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/sri-lanka.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="score-card">
                        <div className="score-card-body">
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/new-zealand.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ban</span>
                            </div>
                          </div>
                          <div className="score-update m-0 text-center">
                            <h5>22:30</h5>
                            <p className="text-muted">Today</p>
                          </div>
                          <div className="country-info">
                            <div className="flag-avatar">
                              <figure>
                                <img
                                  src="https://demo.themeies.com/cricnotch/assets/images/flags/india.png"
                                  alt=""
                                />
                              </figure>
                              <span className="country-name">ind</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="card-header"></div> */}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
