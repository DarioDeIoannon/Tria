import React from 'react';
import ReactDOM from 'react-dom';
import { Scacchiera, Messaggio, StoricoMosse } from './components/components'
import './index.css';

  class Game extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        scacchiera: Array(9).fill(null),
        numeroMossa: 0,
        xIsNext: true,
        storicoMosse: [{
          scacchiera: Array(9).fill(null)
        }],
      };
    }

    ricomincia() {
      this.setState({
        scacchiera: Array(9).fill(null),
        numeroMossa: 0,
        xIsNext: true,
        storicoMosse: [{
          scacchiera: Array(9).fill(null)
        }],
      });
    }

    //Gestione del click su <Quadrato>
    handleClick(i) {
      const storico = this.state.storicoMosse.slice(0, this.state.numeroMossa + 1);
      const scacchiera = this.state.scacchiera.slice();
      if (calcolaVincitore(scacchiera) || scacchiera[i]) {
        return;
      }
      scacchiera[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        scacchiera: scacchiera,
        numeroMossa: storico.length,
        xIsNext: !this.state.xIsNext,
        storicoMosse: storico.concat([{scacchiera: scacchiera}]),
      });
    }

    vaiAllaMossa(numMossa) {
      const storico = this.state.storicoMosse.slice(0, numMossa + 1);
      const scacchiera = storico[numMossa].scacchiera.slice();

      this.setState({
        numeroMossa: numMossa,
        xIsNext: (numMossa % 2) === 0,
        scacchiera: scacchiera,
        storicoMosse: storico,
      });
    }

    render() {
      const storico = this.state.storicoMosse;
      const statoCorrente = storico[this.state.numeroMossa];
      const vincitore = calcolaVincitore(this.state.scacchiera);

      return (
        <div className="game">
          <div className="game-board">
            <Scacchiera 
              scacchiera={statoCorrente.scacchiera}
              effettuaMossa={(i) => this.handleClick(i)} 
            />
            <br/>
            <div>
              <button onClick={() => this.ricomincia()}>Ricomincia</button>
            </div>
          </div>
          <div className="game-info">
            <div>
              <Messaggio
                vincitore={vincitore}
                mosse={this.state.storicoMosse.length}
                nextPlayer={this.state.xIsNext ? 'X' : 'O'}
              />
            </div>
            <div>
              <StoricoMosse 
                mosse={storico}
                vaiAllaMossa={(mossa) => this.vaiAllaMossa(mossa)}
              />
            </div>
          </div>
        </div>
      );
    }
  }

  function calcolaVincitore(scacchiera) {
    const sequenzeVincenti = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < sequenzeVincenti.length; i++) {
      const [a, b, c] = sequenzeVincenti[i];
      if (scacchiera[a] && scacchiera[a] === scacchiera[b] && scacchiera[a] === scacchiera[c]) {
        return scacchiera[a];
      }
    }
    return null;
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
