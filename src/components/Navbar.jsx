import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems=" center"
    p={1}
    sx={{ postion: "sticky", top: 0, justifyContent: "space-between" }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={30} />
    </Link>

    <SearchBar />

    <Stack direction="row"   className="menu-list" sx={{ gap: "2rem" }}>

        <Link to="/learn">
        <Stack direction="column" alignItems="center" m={1}>
          <LocalLibraryOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#3A8891",
              ml: "5px",
              alignItems: "center",
            }}
          />
          Learn
        </Stack>
         </Link>

       <Link to="/practice">
        <Stack direction="column" alignItems="center" m={1}>
          <CrisisAlertOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#3A8891",
              ml: "5px",
              alignItems: "center",
            }}
          />
          Practice
        </Stack>
       </Link>

       <Link to="/compete">
        <Stack direction="column" alignItems="center" m={1}>
          <LeaderboardOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#3A8891",
              ml: "5px",
              alignItems: "center",
            }}
          />
          Compete
        </Stack>
       </Link>
       

       <Link to="/mentor">
        <Stack direction="column" alignItems="center" m={1}>
          <WbIncandescentOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#3A8891",
              ml: "5px",
              alignItems: "center",
            }}
          />
          Mentorship
        </Stack>
       </Link>

       <Link to="/blog">
        <Stack direction="column" alignItems="center" m={1}>
          <BusinessCenterOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#3A8891",
              ml: "5px",
              alignItems: "center",
            }}
          />
          Blog
        </Stack>
       </Link>

       <button className="category-btn"
              style={{
                background: '#3A8891',
                color : 'white'
              }} >
              <CampaignOutlinedIcon
            sx={{
              fontSize: 20,
              color: "#fff",
              alignItems: "center",
            }}
          />
            Host
      </button>

    </Stack>


  </Stack>
);

export default Navbar;
