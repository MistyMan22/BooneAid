import {getResources, getAgeRanges, getGenders} from "./HardDatabase";

// simulate getting the resources from the api
export function getResourcesFromDatabase() {
  return JSON.stringify(getResources());
}

// simulate getting age ranges from the api
export function getAgeRangesFromDatabase() {
  return JSON.stringify(getAgeRanges().map(range => range.toString()));
}

// simulate getting genders from the api
export function getGendersFromDatabase() {
  return JSON.stringify(getGenders());
}