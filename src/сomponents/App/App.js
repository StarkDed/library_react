export function sortingBooks(listBooks, sortingName) {
  switch (sortingName) {
    case "По названию":
      return [...listBooks].sort((a, b) => a.name.localeCompare(b.name));
    case "По автору":
      return [...listBooks].sort((a, b) => a.author.localeCompare(b.author));
    default:
      return listBooks;
  }
}
