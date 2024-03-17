import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const boardSize = Dimensions.get('window').width; // Get screen width for responsive design
const tileSize = boardSize / 8; // Divide by 8 for chessboard size

const StartingChessPosition = [
  ['r', 'n', 'b', 'k', 'q', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R']
];

const chessPieceImages={
  r: require("./assets/Rook Black.png"),
  n: require("./assets/Knight Black.png"),
  b:require("./assets/Bishop black.png"),
  k:require("./assets/King Black.png"),
  q:require("./assets/Queen black.png"),
  p:require("./assets/Pawn Black.png"),
  R:require("./assets/Rook White.png"),
  N:require("./assets/Knight White.png"),
  B:require("./assets/Bishop white.png"),
  K:require("./assets/King White.png"),
  P:require("./assets/Pawn White.png"),
  Q:require("./assets/Queen white.png")
};

const ChessBoard = () => {
  const [board, setBoard] = useState(StartingChessPosition);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleSquarePress = (i, j) => {
    if (selectedPiece) {
      let newBoard = [...board];
      newBoard[selectedPiece.x][selectedPiece.y] = null;
      newBoard[i][j] = selectedPiece.type;
      setBoard(newBoard);
      setSelectedPiece(null);
    } else if (board[i][j]) {
      setSelectedPiece({ x: i, y: j, type: board[i][j] });
    }
  };

  const renderSquare = (i, j) => {
    const piece = board[i][j];
    // Determine if the current square is selected
    const isSelected = selectedPiece && selectedPiece.x === i && selectedPiece.y === j;
    return (
      <TouchableOpacity
        key={`${i}-${j}`}
        style={[
          styles.tile,
          { backgroundColor: (i + j) % 2 === 0 ? 'white' : 'grey' },
          isSelected && styles.selectedTile
        ]}
        onPress={() => handleSquarePress(i, j)}
      >
        {piece && (
          <Image
            source={chessPieceImages[piece]}
            style={styles.piece}
          />
        )}
      </TouchableOpacity>
    );
  };

  const renderBoard = () => {
    let squares = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        squares.push(renderSquare(i, j));
      }
    }
    return squares;
  };

  return <View style={styles.board}>{renderBoard()}</View>;
};

const styles = StyleSheet.create({
  board: {
    width: boardSize,
    height: boardSize,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tile: {
    width: tileSize,
    height: tileSize,
  },
  piece: {
    width: tileSize,
    height: tileSize,
    resizeMode: 'contain',
  },
  selectedTile: {
    borderWidth: 2,
    borderColor: 'yellow',
  },
});

export default ChessBoard;
