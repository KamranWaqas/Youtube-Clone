import React from "react";
import SidebarRow from "./SidebarRow.jsx";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '../Styles/sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Home" />
      <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscription" />
      <hr/>
      <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
      <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
      <SidebarRow Icon={SmartDisplayOutlinedIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
      <SidebarRow Icon={KeyboardArrowDownOutlinedIcon} title="Show More" />
      <hr/>
    </div>
  );
};

export default Sidebar;
