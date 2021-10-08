import React from 'react';
import '../index.css';

class Messaggio extends React.Component {
    elaboraMessaggio(){
        if (this.props.vincitore) {
            return 'VINCITORE: ' + this.props.vincitore;
          } else {
            if (this.props.mosse === 10) {
              return 'PARITA\' !!!';
            } else {
    
              return 'Prossimo giocatore: ' + this.props.nextPlayer;
            }
          }
    }

    render () {
        return (
            <div>{this.elaboraMessaggio()}</div>
        );
    }
}

export default Messaggio;