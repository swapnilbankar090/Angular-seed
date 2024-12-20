import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer: string = 'X';
  winner: string | null = null;
  isDraw: boolean = false;

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '' && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (this.checkDraw()) {
        this.isDraw = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    // Check rows, columns, and diagonals
    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== '') {
        return true;
      }
      if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== '') {
        return true;
      }
    }
    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== '') {
      return true;
    }
    if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== '') {
      return true;
    }
    return false;
  }

  checkDraw(): boolean {
    return this.board.every(row => row.every(cell => cell !== ''));
  }

  resetGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
}
