let resourcesJson = '[{"name":"Habitat for Humanity","description":"A nonprofit that builds houses for people in need","picture":"https://c.neevacdn.net/image/fetch/s--rMcxSrt---/https%3A//w…for-humanity-logo.jpg?savepath=habitat-for-humanity-logo.jpg","link":"https://www.habitat.org/","email":"","phone":"(800) 422-4828","attributes":[],"id":"resource-A2c48aLwlFSBmqg0fx8rD"},{"name":"Watauga Humane Society","description":"An animal shelter in Boone, NC","picture":"https://wataugahumane.org/images/logo.png","link":"https://wataugahumane.org/","email":"","phone":"828-264-7865","attributes":[],"id":"resource-BqkYVfUjC-45KZvPKducj"}]';
let agesJson = '["0 - 9","10 - 19","20 - 29","30 - 39","40 - 49","50 - 59","60 - 69","70 - 79","80 - 89","90 - 99","100 - 109"]';
let gendersJson = '[{"name":"Male","id":"gender-udsHgWR4gOiW8AYwE-vAn"},{"name":"Female","id":"gender-vEFi_ftPYFNWQsqdI2dC6"},{"name":"Other","id":"gender-0x9SoxsH90X_yjHc3B7Lk"}]';

export function getResources() {
  return JSON.parse(resourcesJson);
}

export function getGenders() {
  return JSON.parse(gendersJson);
}

export function getAgeRanges() {
  return JSON.parse(agesJson);
}
