import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  clickEvent = () => {
    this.setState((prev) => {
      return { isOpen: !prev.isOpen };
    });
  };

  render() {
    const { isOpen } = this.state;
    let filterBoxClass = 'filter-box';

    if (isOpen) filterBoxClass += ' grow';

    return (
      <div className={filterBoxClass} onClick={this.clickEvent}>
        <div className="filter"></div>
      </div>
    );
  }
}
