import React, { Component } from "react";

import Post from "./Post";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@mui/icons-material/Create";

import ImageIcon from "@mui/icons-material/Image";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

const initalpost = [{name:'Ram', description:'first post',message:'Hello...'}]
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      posts: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.message) {
      initalpost.push({name:'Ram', description:'posting qoute', message:this.state.message})
        this.setState({
          posts:initalpost
        })
      }

      this.setState({
        message: ""
      })
  };

  componentDidMount(){
    this.setState({
      posts:initalpost
      })
  }


  handdleOnChnage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div className="feed">
        {/* Input feed... */}
        <div className="feed__inputContainer">
          <div className="feed__input">
            <CreateIcon />

            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Start a post"
                value={this.state.message}
                onChange={this.handdleOnChnage}
              />

              <button type="submit"> Send </button>
            </form>
          </div>

          {/* Input Options.... */}
          <div className="feed__inputoption">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption
              Icon={SubscriptionsIcon}
              title="Video"
              color="#E7A33E"
            />
            <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
            <InputOption
              Icon={CalendarViewDayIcon}
              title="Write article"
              color="#7FC15E"
            />
          </div>
        </div>

        {this.state.posts.map((post, index) => {
          return (
            <Post
              key={index}
              name={post.name}
              description={post.description}
              message={post.message}
            />
          );
        })}
      </div>
    );
  }
}

export default Feed;
