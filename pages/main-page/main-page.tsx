"use client";
import React, { useEffect, useState } from "react";
import styles from "@/pages/main-page/main-page.module.scss";
import Link from "next/link";
import CountriesType from "../../ui/type";

export const MainPage = () => {
  const [countries, setCountries] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const getAllCountry = async () => {
      setLoding(true);
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe"
        );
        const dataCountries = await response.json();
        setCountries(dataCountries);
        setLoding(false);
      } catch (err) {
        alert(err);
      }
    };

    getAllCountry();
  }, []);

  return (
    <div
      className={`${styles.container} flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-violet-100`}
    >
      <h1 className="text-xl text-violet-800 md:text-4xl md:leading-normal">
        Страны Европы:
      </h1>
      { loding ? (
        <p>Загрузка...</p>
      ) : (
        <ul
          className={`${styles.list} flex items-center justify-center text-blue-500 `}
        >
          {countries &&
            countries.map((item: CountriesType, index: number) => (
              <>
                <Link
                  href={`/country/${item.name.common}`}
                  className="text-xl hover:bg-violet-200"
                >
                  <li key={index}>{`${item.name.common}, ${item.capital}`}</li>
                </Link>
              </>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MainPage;
