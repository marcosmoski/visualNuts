import { test, expect, vi } from 'vitest'
import { countAllOfficialLangsSpokenPerCountry, findMostCommonOfficialLang, findWithHighestNumberOfOfficialLanguages, 
         findWithMostOfficialLanguagesAndSpeaksDE, 
         ICountryLanguages, 
         numberOfCountriesInWorld } from '../officialLanguages'

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


test('should return the correct number of coutries that we have on defined array', () => { 
  expect(numberOfCountriesInWorld(countryAndLanguages)).toBe(5);
})

test('should return the most official languages that speake DE', () => { 
  expect(findWithMostOfficialLanguagesAndSpeaksDE(countryAndLanguages)).toEqual({ country: 'BE', quantityJOfLangs: 3 });
})

test('should return country(s) with higher number of official languages spoken', () => { 
  expect(findWithHighestNumberOfOfficialLanguages(countryAndLanguages)).toEqual({ country: 'BE', quantityJOfLangs: 3 });
})

test('should return country(s) with higher number of official languages spoken', () => { 
  expect(findWithHighestNumberOfOfficialLanguages(countryAndLanguages)).toEqual({ country: 'BE', quantityJOfLangs: 3 });
})

test('should return the most common official languages', () => { 
  expect(findMostCommonOfficialLang(countryAndLanguages)).toHaveLength(2)
  expect(findMostCommonOfficialLang(countryAndLanguages)).toContain("nl")
  expect(findMostCommonOfficialLang(countryAndLanguages)).toContain("de")
})

test('should return count off all official languages spoken per contry', () => { 
  const expectedResult = [
    {
      country: 'US',
      qtyOfLanguagesSpoken: 1
    },
    {
      country: 'BE',
      qtyOfLanguagesSpoken: 3
    },
    {
      country: 'NL',
      qtyOfLanguagesSpoken: 1
    },
    {
      country: 'DE',
      qtyOfLanguagesSpoken: 1
    },
    {
      country: 'ES',
      qtyOfLanguagesSpoken: 1
    },
  ]
  expect(countAllOfficialLangsSpokenPerCountry(countryAndLanguages)).toHaveLength(5)
  expect(countAllOfficialLangsSpokenPerCountry(countryAndLanguages)).toBeTypeOf('object')
  expect(countAllOfficialLangsSpokenPerCountry(countryAndLanguages)).toEqual(expectedResult)
  
})