const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/\s/g, "-") // Replace white space
    .replace(/[^a-zA-Z0-9-_]/g, "-") // Replace non alphanum-_ chars
    .replace(/-{2,}/g, "-") // Remove extra - occurences
    .replace(/-$/g, "") // Remove - at the begening of slug
    .replace(/^-/g, ""); // Remove - at the end of slug
};

export default slugify;
