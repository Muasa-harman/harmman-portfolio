import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InterestsIcon from '@mui/icons-material/Interests';
import WorkIcon from '@mui/icons-material/Work';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import './sidebar.scss';
import { useState } from 'react';

function Sidebar() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? '' : 'closed'}`}>
    <div className="sidebarWrapper">
        <img className='image' src="https://media.licdn.com/dms/image/D4D03AQG7BUxHF4I8Tg/profile-displayphoto-shrink_800_800/0/1701194850229?e=1710979200&v=beta&t=_4pcIIxCbUnBBApuuGUFLhqB1ocxGyilNSYQWWXUERU" alt="" />
      <div className="sidebarMenu">
        <ul className="sidebarList">
          {/* <Link to="/" className='link'> */}
          <Link to="/" className="sidebarListItem active">
            <InfoIcon className='sidebarIcon'/>
            About
          </Link>
            {/* </Link> */}
          <Link to="/experience" className="sidebarListItem">
            <WorkHistoryIcon className='sidebarIcon'/>
            Experience
          </Link>
          <Link to="/education" className="sidebarListItem">
            <HistoryEduIcon className='sidebarIcon'/>
            Education
          </Link>
         
          <Link to="/skills" className="sidebarListItem">
            <WorkIcon className='sidebarIcon'/>
            Skills
          </Link>
          <Link to="/interest" className="sidebarListItem">
            <InterestsIcon className='sidebarIcon'/>
            Interest
          </Link>
          <Link to="/awards" className="sidebarListItem">
            <EmojiEventsIcon className='sidebarIcon'/>
            Awards
          </Link>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
