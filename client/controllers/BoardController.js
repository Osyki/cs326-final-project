import Board from "../models/BoardModel.js";

/**
 * Sends a request to the server to get a new board.
 * @param {int} size
 * @param {int} category_id
 * @returns {} An object containing the board and the words.
 */
async function fetchBoard(size, category_id) {
  try {
    const response = await fetch("/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: size,
        category: category_id,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function setupBoard(size, category_id) {
  try {
    const boardData = await fetchBoard(size, category_id);
    console.log(JSON.stringify(boardData));
    return new Board(boardData.board, size, boardData.words);
  } catch (error) {
    console.log(error);
  }
}

export { setupBoard };