import Image from "next/image";
import CountriesType from "@/pages/main-page/type";
const Country = (country: CountriesType) => {
  const   { name, continents, capital } = country || {};
  const { common } = name || {};
    return (
        <div>
            <h2>{`Страна ${common}`}</h2>
            <p>{`Континент ${continents[0]}`}</p>
            <p>{`Столица ${capital}`}</p>
          
      { /*  <Image src={country.flags} alt='флаг' width={300} height={200}/> */ }

        </div>
    )
}
export default Country;