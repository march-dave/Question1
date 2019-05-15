
export const sortAlphabetize = (listItems, propertyName = "", asc = true) => {
  if (propertyName.length > 1) {
    if (asc === true) {
      return listItems.sort((a, b) => {
        if (a[propertyName] === null || b[propertyName] === null) {
          return 0;
        }

        if (a[propertyName].toUpperCase() < b[propertyName].toUpperCase()) {
          return -1;
        }
        if (a[propertyName].toUpperCase() > b[propertyName].toUpperCase()) {
          return 1;
        }
        return 0;
      });
    }

    return listItems.sort((a, b) => {
      if (a[propertyName] === null || b[propertyName] === null) {
        return 0;
      }

      console.log(a)

      if (a[propertyName].toUpperCase() < b[propertyName].toUpperCase()) {
        return 1;
      }
      if (a[propertyName].toUpperCase() > b[propertyName].toUpperCase()) {
        return -1;
      }
      return 0;
    });
  }
};
