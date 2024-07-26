export const capitalizeFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const capitalizeAllFirstLetters = (str: string): string => {
  return str
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};

export const createSlug = (str: string) => {
  let slug = str.toLowerCase();
  slug = slug.replace(/[\s\W-]+/g, "-");
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
};

export const reverseSlug = (slug: string) => {
  let str = slug.replace(/-/g, " ");
  str = capitalizeAllFirstLetters(str);
  str = str.trim();

  return str;
};
