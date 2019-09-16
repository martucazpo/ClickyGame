import React, {
  Component
} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clickedArray : [],
    count : 0,
    losses : 0,
    wins : 0
  };

  clickFriend = id => {
    const shuffledArray = this.shuffleArray(friends);
    this.setState({friends : shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickedArray
    if (this.state.clickedArray.includes(id)) {
      this.setState({ count : 0, clickedArray : [], losses : this.state.losses + 1});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        count: this.state.count + 1,
      });
    }
    if (this.state.clickedArray[10] && this.state.clickedArray.includes(id) === false){
      this.setState({ wins: this.state.wins + 1, count : 0, clickedArray : [] });
    }
  
  }
  shuffleArray = (friends) => {
      for (let i = friends.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [friends[i], friends[j]] = [friends[j], friends[i]];
      }
      return friends;
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return ( 
    <Wrapper >
      <Title
      count={this.state.count}
      wins={this.state.wins}
      losses={this.state.losses}
      > Clicky Game! </Title> {
        this.state.friends.map(friend => ( 
          <FriendCard
          clickFriend = {this.clickFriend}
          id = {
            friend.id
          }
          key = {
            friend.id
          }
          clicked = {
            friend.clicked
          }
          timesClicked = {
            friend.timesClicked
          }
          name = {
            friend.name
          }
          image = {
            friend.image
          }
          occupation = {
            friend.occupation
          }
          location = {
            friend.location
          }
          />
        ))
      } </Wrapper>
    );
  }
}

export default App;