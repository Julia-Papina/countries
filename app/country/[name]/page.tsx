"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountriesType from "@/pages/main-page/type";
export default function Home({ params }: { params: { name: string } }) {
  const [country, setCountry] = useState<CountriesType[]>([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    const getCountry = async () => {
      setLoding(true);
      try{
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${params.name}`
        );
        const data = await response.json();
        setCountry(data);
        setLoding(false);
      } catch(err) {
        <p>Что-то пошло не так...</p>
        console.error('Ошибка', err)
      }

    };
    getCountry();
  }, [params]);

  return (
    <section className=" flex flex-col justify-center  items-center bg-violet-100 w-full h-screen">
      {loding ? (
        <p>Загрузка...</p>
      ) : (
        <article
          className="flex flex-col justify-center items-center bg-violet-100 w-full h-screen"
        >
          <h1 className="text-xl text-violet-800 md:text-4xl md:leading-normal mb-10">{country[0]?.name?.common}</h1>
          <p className="flex text-violet-800 md:text-2xl md:leading-normal mb-10">{`Столица: ${country[0]?.capital}`}</p>
          <p className="flex text-violet-800 md:text-2xl md:leading-normal mb-10">{`Численность: ${country[0]?.population}`}</p>
          <Image
            alt={country[0]?.flags?.alt}
            src={country[0]?.flags?.svg}
            width={500}
            height={300}
          />
        </article>
      )}
    </section>
  );
}
