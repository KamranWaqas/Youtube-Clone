import React, { useState } from "react";
import myImage from "../images/Picture.jpeg";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import "../Styles/header.css";
import { Link } from 'react-router-dom';

const Header = () => {

  const [searchInput, setSearchInput] = useState("");

  return (
      <div className="header">
        <div className="left">
          <MenuIcon className="icon-width" />
          <Link className="yt-logo-main" to={"/"}>
            <div className="logo">
              <YouTubeIcon className="yt-logo" />
              <h1>YouTube</h1>
            </div>
          </Link>
        </div>

        <div className="center">
          <div className="search-part">
            <input onChange={e => setSearchInput(e.target.value)} value={searchInput} type="text" placeholder="Search"></input>
            <Link to={`/search/${searchInput}`}>
              <div className="search-icon">
                <SearchSharpIcon className="search-btn icon-width"/>
              </div>
            </Link>
          </div>
          <div className="audio-input">
            <MicSharpIcon />
          </div>
        </div>

        <div className="right">
          <VideoCallSharpIcon className="icon-width" />
          <NotificationsNoneSharpIcon className="icon-width" />
          <div className="profile-img">
            <img src={myImage} alt="Description of the image" />
          </div>
        </div>
    </div>
  );
};

export default Header;
