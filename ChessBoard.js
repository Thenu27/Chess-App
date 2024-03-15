import React from 'react';
import { View, StyleSheet, Dimensions,Image } from 'react-native';


const boardSize = Dimensions.get('window').width; // Get screen width for responsive design
const tileSize = boardSize / 8; // Divide by 8 for chessboard size

const StartingChessPosition=[['r','n','b','k','q','b','n','r'],
                             ['p','p','p','p','p','p','p','p'],
                             [null,null,null,null,null,null,null,null],
                             [null,null,null,null,null,null,null,null],
                             [null,null,null,null,null,null,null,null],
                             [null,null,null,null,null,null,null,null],
                             ['P','P','P','P','P','P','P','P'],
                             ['R','N','B','K','Q','B','N','R']

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
  const renderSquare = (i, j, piece) => (
    <View
      key={`${i}-${j}`}
      style={[
        styles.tile,
        { backgroundColor: (i + j) % 2 === 0 ? 'white' : 'black' },
      ]}>
      {piece && (
        <Image
          source={chessPieceImages[piece]}
          style={styles.piece}
        />
      )}
    </View>
  );
  

  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const piece = StartingChessPosition[i][j]; // Get the piece from the starting position
        board.push(renderSquare(i, j, piece));
      }
    }
    return board;
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
    width: tileSize, // Adjust size as needed
    height: tileSize, // Adjust size as needed
    resizeMode: 'contain', // Ensure the image scales correctly
  },
});

export default ChessBoard;
