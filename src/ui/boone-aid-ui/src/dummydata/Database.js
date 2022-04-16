import {nanoid} from 'nanoid';

// defines an age range 
class AgeRange {
  constructor(lower, upper) {
    this.lower = lower;
    this.upper = upper;
    this.id = 'age-range-' + nanoid();
  }

  toString() {
    return `${this.lower} - ${this.upper}`;
  }
}

// defines a gender
class Gender {
  constructor(name) {
    this.name = name;
    this.id = 'gender-' + nanoid();
  }

  toString() {
    return this.name;
  }
}

// defines a resource
class Resource {
  constructor(name, description, picture, link, email, phone, attributes) {
    this.name = name;
    this.description = description;
    this.picture = picture;
    this.link = link;
    this.email = email;
    this.phone = phone;
    this.attributes = attributes;
    this.id = 'resource-' + nanoid();
  }
}

// returns a basic list of genders
export function getGenders() {
  let genders = [];
  genders.push(new Gender("Male"));
  genders.push(new Gender("Female"));
  genders.push(new Gender("Other"));
  return genders;
}

export function getAgeRanges() {
  let ageRanges = [];
  ageRanges.push(new AgeRange(0, 9));
  ageRanges.push(new AgeRange(10, 19));
  ageRanges.push(new AgeRange(20, 29));
  ageRanges.push(new AgeRange(30, 39));
  ageRanges.push(new AgeRange(40, 49));
  ageRanges.push(new AgeRange(50, 59));
  ageRanges.push(new AgeRange(60, 69));
  ageRanges.push(new AgeRange(70, 79));
  ageRanges.push(new AgeRange(80, 89));
  ageRanges.push(new AgeRange(90, 99));
  ageRanges.push(new AgeRange(100, 109));
  return ageRanges;
}

export function getResources() {

  let resources = [];
  
  resources.push(new Resource(
    "Habitat for Humanity", 
    "A nonprofit that builds houses for people in need",
    "https://c.neevacdn.net/image/fetch/s--rMcxSrt---/https%3A//wp.production.patheos.com/blogs/deaconsbench/files/2015/02/habitat-for-humanity-logo.jpg?savepath=habitat-for-humanity-logo.jpg",
    "https://www.habitat.org/",
    "",
    "(800) 422-4828",
    []
  ));
  
  resources.push(new Resource(
    "Watauga Humane Society",
    "An animal shelter in Boone, NC",
    "https://wataugahumane.org/images/logo.png",
    "https://wataugahumane.org/",
    "",
    "828-264-7865",
    []
  ));

  return resources;
}