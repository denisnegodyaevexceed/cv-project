const makeUnique = (array) => {
    array = array.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.title.toLowerCase() === item.title.toLowerCase())
  );

return array
}

export default makeUnique