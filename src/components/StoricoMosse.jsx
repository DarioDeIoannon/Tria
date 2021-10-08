import React from 'react';
import '../index.css';

class StoricoMosse extends React.Component {

    render () {
        const mosse = this.props.mosse.map((step, mossa) => {
            const desc = mossa ?
              'Mossa #' + mossa :
              'Inizio del gioco';
            return (
              <li key={mossa}>
                <button onClick={() => this.props.vaiAllaMossa(mossa)}>{desc}</button>
              </li>
            );
          });

        return (
            <ol>{mosse}</ol>
        );
    }
}

export default StoricoMosse;