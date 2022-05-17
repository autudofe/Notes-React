export const getContentDates = (content) => {
  let str = content.match(/\d([\/.-])\d\1\d{4}/g);
  return str ? str.join(", ") : "";
};

export const filteredList = (list, trigger) => {
  return list.filter(({ archive }) => archive === trigger);
};

export const getDateNow = () => {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleString("en-US", options);
};

export const checkValidation = (value) => {
  return /^(?=[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9])[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9\s]{1,100}[А-Яа-яёЁЇїІіЄєҐґA-Za-z0-9]$/i.test(
    value
  );
};
