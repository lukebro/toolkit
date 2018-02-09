import React from 'react';
import './Showcase.css';

class Showcase extends React.Component {
    render() {
      return (
        <section className="hero is-fullheight is-bold" style={{backgroundColor: this.props.color}}>
          <div className="hero-body is-paddingless">
            <div className="Showcase">
                <div style={{width: this.props.width}}>
                  {this.props.children}
                </div>
            </div>
          </div>
        </section>
      );
    }
}

Showcase.defaultProps = {
  color: '#fff',
  width: '100%'
}

export default Showcase;