import React from 'react';
import '../styles/Comic.css';

export default class Comic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHoving: false };
  }

  eventHover = (e) => {
    if (e.type === 'mouseenter')
      this.setState({
        isHoving: true,
      });
    else
      this.setState({
        isHoving: false,
      });
  };

  render() {
    const { title, url } = this.props;
    const { isHoving } = this.state;
    let viewClass = 'view-line';
    if (isHoving) viewClass += ' active';

    return (
      <div
        className="comic"
        onMouseEnter={this.eventHover}
        onMouseLeave={this.eventHover}
        title={title}
      >
        <div className={viewClass}>
          <p className="view-txt">Ver mais</p>
        </div>
        <img src={url} alt={title} />
        <p className="title">{title}</p>
      </div>
    );
  }
}
