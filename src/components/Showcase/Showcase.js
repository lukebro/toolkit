import React from 'react';
import './Showcase.css';

class Showcase extends React.Component {
    render() {
      return (
        <section className="hero is-fullheight" style={{backgroundColor: this.props.color}}>
          <div className="hero-body">
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
  color: '#e6ecf0',
  width: '100%'
}

export default Showcase;