const wrap = (line, maxLen) => {
  let newArr = [];
  for (let i = 0; i < line.length; i += maxLen) {
    newArr.push(line.substring(i, i + maxLen));
  }

  newArr = newArr.map((item, i) => {
    if (i < newArr.length - 1) {
      let spaceIndex = item.lastIndexOf(' ');

      return (
        item.substring(0, spaceIndex) + '\n' + item.substring(spaceIndex + 1)
      );
    }
    return item;
  });
  return newArr.join('');
};

module.exports = wrap;
