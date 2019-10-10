import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selected: "profile"
  };

  choosePageToDisplay = () => {
  if (this.state.selected === "profile") {return <Profile />};
  if (this.state.selected === "photo") {return <Photos />};
  if (this.state.selected === "cocktail") {return <Cocktails />};
  if (this.state.selected === "pokemon") {return <Pokemon />};
  };

  handleClick = event => {
    const buttonClicked = event.target.id
    this.setState({
      selected: buttonClicked
    })
  }

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render 
    either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu 
    item was selected. Which component should have state? Which component should have methods to 
    control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.choosePageToDisplay()}
      </div>
    );
  }
}

export default MainBox;
