import React from "react";
import "./Nutrients.css";
class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  onChangeTab = (index, tab) => {
    this.setState({ activeTab: index });
    this.props.onChange(tab, index);
  };

  render() {
    const { tabs = [] } = this.props;
    return (
      <div className="  d-flex justify-content-around pb-4 ">
        {tabs.map((tab, index) => {
          return (
            <a className="a" onClick={() => this.onChangeTab(index, tab)}>{tab.label}</a>
          );
        })}
      </div>
    );
  }
}
export default Tabs;
