import React from 'react';
import '../index.css';

class Quadrato extends React.Component {
    render (){

    return (
        <button 
          className="square"
          onClick={() => this.props.effettuaMossaDiGame()} //Click gestito dentro <Game>
        >
          {this.props.contenuto}
        </button>
      );
    }
}

export default Quadrato;