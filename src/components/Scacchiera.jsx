import React from 'react';
import Quadrato from './Quadrato';
import '../index.css';

class Scacchiera extends React.Component {
    visualizzaQuadrato(i) {
      return (
        <Quadrato 
          contenuto={this.props.scacchiera[i]}
          effettuaMossaDiGame={() => this.props.effettuaMossa(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.visualizzaQuadrato(0)}
            {this.visualizzaQuadrato(1)}
            {this.visualizzaQuadrato(2)}
          </div>
          <div className="board-row">
            {this.visualizzaQuadrato(3)}
            {this.visualizzaQuadrato(4)}
            {this.visualizzaQuadrato(5)}
          </div>
          <div className="board-row">
            {this.visualizzaQuadrato(6)}
            {this.visualizzaQuadrato(7)}
            {this.visualizzaQuadrato(8)}
          </div>
        </div>
      );
    }
  }

  export default Scacchiera;