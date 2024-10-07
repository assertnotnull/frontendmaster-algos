const gameGrid = [
  "XOX",
  "OOX",
  "XOO"]
const game = gameGrid.join("");

function parseGame(game: string) {
  const lines = game.match(/\w{3}/g)
  if (lines) {
    const matrix = lines.map((line) => line.split(""));
    const invertedMatrix = matrix.map((_, colIndex) =>
      matrix.map((row) => row[colIndex])
    );

    const isX = (cell: string) => cell === "X";
    const isO = (cell: string) => cell === "O";

    const rowOutput = matrix.map((row) =>
      row.every(isX) ? "X" : row.every(isO) ? "O" : "D"
    );
    const colOutput = invertedMatrix.map((row) =>
      row.every(isX) ? "X" : row.every(isO) ? "O" : "D"
    );
    const diagonalOutput = [
      [0, 4, 8],
      [2, 4, 6],
    ].map((diagonal) =>
      diagonal.every((index) => game[index] === "X")
        ? "X"
        : diagonal.every((index) => game[index] === "O")
          ? "O"
          : "D"
    );

    const winner =
      [...rowOutput, ...colOutput, ...diagonalOutput].find(
        (cell) => cell !== "D"
      ) ?? "D";

    if (winner !== "D") console.log(`winner is ${winner}`);
    else console.log("no winner");
  }
}
console.log("Game:")
gameGrid.forEach(row => console.log(row))
parseGame(game);
