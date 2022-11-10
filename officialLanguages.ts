/*
  I've got liberty to split the funciton on 5 as the exercise is not very clear if you need to do it separatly or not
  I've put here the functions as I understood how that was meant to be. 

  1 - returns the number of countries in the world
  2 - finds the country with the most official languages, where they officially speak German (de). 
  3 - that counts all the official languages spoken in the listed countries.
  4 - to find the country with the highest number of official languages.
  5 - to find the most common official language(s), of all countries.

  1 - numberOfCountriesInWorld()
  2 - findWithMostOfficialLanguagesAndSpeaksDE()
  3 - findWithHighestNumberOfOfficialLanguages()
  4 - findMostCommonOfficialLang() 
  5 - countAllOfficialLangsSpokenPerCountry()

  To keep it working when developers making small features, we should have unit tests, 
  unit tests in that case should prevent new features break our code.

  We could have BDD with integration tests to test our api calls
*/

interface ICountryLanguages { 
  country: string,
  languages: string[]
}

interface ILangApparition { 
  [key: string]: number, 
}

const countryAndLanguages: ICountryLanguages[] = [
  {
    country:"US",
    languages: ["en"]
  },
  {
    country:"BE",
    languages: ["nl","fr","de"]
  },
  {
    country:"NL",
    languages: ["nl"]
  },
  {
    country:"DE",
    languages: ["de"]
  },
  {
    country:"ES",
    languages: ["es"]
  }]



  export function numberOfCountriesInWorld() { 
    return countryAndLanguages.length;
  }

  export function findWithMostOfficialLanguagesAndSpeaksDE() { 
    let countryFinded = {
      country: '',
      quantityJOfLangs: 0
    };
    for (let item of countryAndLanguages) { 
      if (item.languages.includes("de") && item.languages.length > countryFinded.quantityJOfLangs) { 
        countryFinded = {
          country: item.country, 
          quantityJOfLangs: item.languages.length
        }
      }
    }
    return countryFinded;
  }

 export function findWithHighestNumberOfOfficialLanguages() { 
    let countryFinded = {
      country: '',
      quantityJOfLangs: 0
    };
    for (let item of countryAndLanguages) { 
      if (item.languages.length > countryFinded.quantityJOfLangs) { 
        countryFinded = {
          country: item.country, 
          quantityJOfLangs: item.languages.length
        }
      }
    }
    return countryFinded;
  }

 export function findMostCommonOfficialLang() { 
    let langsApparition: ILangApparition = {}
  
    for (const country of countryAndLanguages) { 
      for (const lang of country.languages) { 
        langsApparition[lang] ? langsApparition[lang] += 1 : langsApparition[lang] = 1
      }
    }
  
    let highestValue = Math.max(...Object.values(langsApparition))

    return Object.keys(langsApparition).filter((lang) => {
      return langsApparition[lang] === highestValue
    })
  }

export function countAllOfficialLangsSpokenPerCountry() { 
    return countryAndLanguages.map((item) => {
      return {
        country: item.country,
        qtyOfLanguagesSpoken: item.languages.length
      }
    })
  }
