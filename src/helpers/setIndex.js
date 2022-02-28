export default function setIndex(location, limit = 3) {
  const splitPathname = location.pathname.split("/");
  if (splitPathname[splitPathname.length - 1] === "blog") return 0;

  let arrayIndex = 1;
  //console.log(splitPathname[splitPathname.length - arrayIndex]);
  while (splitPathname[splitPathname.length - arrayIndex] === "") {
    arrayIndex++;
  }
  if (splitPathname[splitPathname.length - arrayIndex] === "blog") return 0;
  else return (splitPathname[splitPathname.length - arrayIndex] - 1) * limit;
}
