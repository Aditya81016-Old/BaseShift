export function changeBase(statement: string, base: number): string {
    let output = ""
    const arr = statement.split(" ")

    for (let i = 0; i < arr.length; i = i + 2) {
        arr[i] = parseFloat(arr[i]).toString(base)
    }

    output = arr.toString().replaceAll(",", " ")
    return output
}