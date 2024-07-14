export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const capitalizeAllFirstLetters = (str: string): string => {
  return str
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};
