// capitalize.js
function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return string; // Return the input string unchanged if it's not a string or empty
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  capitalize,
};
