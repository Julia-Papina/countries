 type CountriesType = {
    name: {
    common?: string,
    official?: string,
   
    }
    continents: string[],
    flags?: {
        svg: string | undefined,
        alt: string | undefined,
    },
    capital: string[],
    population?: number,
  
}

export default CountriesType;


