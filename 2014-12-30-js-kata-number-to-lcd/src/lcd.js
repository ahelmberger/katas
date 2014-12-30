'use strict';

const figures = [
  [' _ ', '   ', ' _ ', ' _ ', '   ', ' _ ', ' _ ', ' _ ', ' _ ', ' _ '],
  ['| |', '  |', ' _|', ' _|', '|_|', '|_ ', '|_ ', '  |', '|_|', '|_|'],
  ['|_|', '  |', '|_ ', ' _|', '  |', ' _|', '|_|', '  |', '|_|', ' _|']
];

function print(number) {
  if (!/^\d+$/.test(String(number))) {
    return undefined;
  }

  const digits = Array.prototype.slice.call(String(number));
  return figures.map(figureLine => digits.map(digit => figureLine[digit]).join(''));
}

export default { print };
