import React, { useState, useEffect } from "react";
import styles from "./MainScreen.module.scss";
import Image from "next/image";
import TradingViewMarketTable from "../TradingViewChart/TradingViewChart";

const MainScreen = () => {
  const commodities = [
    {
      commodity: "Ten Tola Bar 1 TTB",
      bid: 54671,
      ask: 54671,
    },
    {
      commodity: "Kilo Bar 9999 1 KG",
      bid: 54671,
      ask: 54671,
    },
    {
      commodity: "Kilo Bar 995 1 KG",
      bid: 54671,
      ask: 54671,
    },
    {
      commodity: "Gold 9999 1 GM",
      bid: 54671,
      ask: 54671,
    },
    {
      commodity: "Gold 22 K",
      bid: 54671,
      ask: 54671,
    },
  ];

  const getFormattedDate = () => {
    const today = new Date();

    const date = today
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .toUpperCase();

    const day = today.toLocaleDateString("en-US", {
      weekday: "long",
    });

    return { date, day };
  };
  const { date, day } = getFormattedDate();

  return (
    <div className={styles.mainscreen_Section}>
      <div className="container">
        <div className={`${styles.mainscreen_container}`}>
          <div className={`${styles.left_screen}`}>
            <ul className={`${styles.table_sec}`}>
              <li>
                <div className={`${styles.title_sec}`}>
                  <h3>Commodity</h3>
                  <h3>BID (Dollar)</h3>
                  <h3>ASK (Dollar)</h3>
                </div>
              </li>

              {commodities.map((data) => (
                <li className={`${styles.detail_content_sec}`}>
                  <div className={`${styles.detail_sec}`}>
                    <span>{data.commodity}</span>
                    <span>{data.bid}</span>
                    <span>{data.ask}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className={`${styles.price_section}`}>
              <ul className={`${styles.price_left}`}>
                <li>
                  <div className={`${styles.label_icon}`}>
                    <Image
                      src={"/icons/gold-icon.svg"}
                      height={300}
                      width={300}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.price_text}`}>
                    <span className={styles.label}>High </span>
                    <span className={styles.value}> 1,234.00</span>
                    <span className={styles.separator}>/</span>
                    <span className={styles.label}>Low </span>
                    <span className={styles.value}> 1,234.00</span>
                  </div>
                  <div className={`${styles.bar_icon}`}>
                    <Image
                      src={"/icons/gold-biscut.png"}
                      height={300}
                      width={300}
                      alt=""
                    />
                  </div>

                  <div className={styles.bidAsk_wrap}>
                    <div className={styles.bid}>
                      <span className={styles.label}>BID</span>
                      <span className={styles.bidValue}>1,234.00</span>
                    </div>
                  </div>

                  <div className={styles.bidAsk_wrap}>
                    <div className={styles.ask}>
                      <span className={styles.label}>ASK</span>
                      <span className={styles.askValue}>1,234.00</span>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={`${styles.label_icon}`}>
                    <Image
                      src={"/icons/silver-icon.svg"}
                      height={300}
                      width={300}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.price_text}`}>
                    <span className={styles.label}>High </span>
                    <span className={styles.value}> 1,234.00</span>
                    <span className={styles.separator}>/</span>
                    <span className={styles.label}>Low </span>
                    <span className={styles.value}> 1,234.00</span>
                  </div>
                  <div className={`${styles.bar_icon}`}>
                    <Image
                      src={"/icons/silver-biscut.png"}
                      height={300}
                      width={300}
                      alt=""
                    />
                  </div>

                  <div className={styles.bidAsk_wrap}>
                    <div className={styles.bid}>
                      <span className={styles.label}>BID</span>
                      <span className={styles.bidValue}>1,234.00</span>
                    </div>
                  </div>

                  <div className={styles.bidAsk_wrap}>
                    <div className={styles.ask}>
                      <span className={styles.label}>ASK</span>
                      <span className={styles.askValue}>1,234.00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.right_screen}`}>
            <div className={`${styles.video_screen}`}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jJYKmLZOOBo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className={`${styles.chart_section}`}>
              <TradingViewMarketTable />
            </div>
            <div className={`${styles.logo_date_sec}`}>
              <div className={`${styles.main_logo}`}>
                <Image
                  src={"/images/logo.svg"}
                  height={300}
                  width={300}
                  alt=""
                />
              </div>
              <div className={`${styles.date_sec}`}>
                <div className={styles.dateBox}>
                  <div className={styles.date}>{date}</div>
                  <div className={styles.day}>{day}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.marquee_Sec}>

        CURUDE OIL : $65.70 (9.9%)
      </div>
    </div>
  );
};

export default MainScreen;
