export function changeBase(
  statement: string,
  from: number,
  to: number
): string {
  let output = "";
  const arr = statement.split(" ");

  for (let i = 0; i < arr.length; i = i + 2) {
    let x;
    if (arr[i].indexOf(".") > -1) {
      const value = arr[i];
      const wholePart = parseInt(value, from);
      const fractionalPart = parseInt(value.split(".")[1], from) / (Math.pow(from, value.split(".")[1].length));
      x = wholePart + fractionalPart;
    } else {
      const value = arr[i];
      x = parseInt(value, from);
    }
    x = isNaN(x) ? "" : x;
    arr[i] = x.toString(to);
  }

  output = arr.toString().replaceAll(",", " ");
  return output;
}
