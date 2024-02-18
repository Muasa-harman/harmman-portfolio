import { useState,useEffect } from "react";
import "./menu.scss"

const Menu = () => {
   const [isDropdownVisible, setDropdownVisible] = useState(false);


  const handleFunction = () =>{
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (e) =>{
    if(!e.target.matches('.dropbtn')){
      setDropdownVisible(false);
    }
  };

  useEffect(()=>{
    window.addEventListener('click', handleOutsideClick);

    return () =>{
      window.removeEventListener('click', handleOutsideClick);
    };
  },[]);
  return (
    <div className={'dropdown'}>
    <button onClick={handleFunction} className='dropbtn'>Projects</button>
    <div className={`dropdown-content ${isDropdownVisible ? 'show': ''}`}>
      <a className="link" target='_blank'  rel="noopener noreferrer"  href="https://hotel-reservation-app-uesu.onrender.com/">Hotel Reservation System</a>
      <a  className="link" target='_blank'  rel="noopener noreferrer" href="https://property-management-rh6h.onrender.com/"> 
      Property Management</a>
      <a className="link" target='_blank'  rel="noopener noreferrer"  href="https://myportfolioblogapp.onrender.com">Javascript & library blog</a>
      <a className="link" target='_blank'  rel="noopener noreferrer"  href="https://yala-finance-dashboard-demo.vercel.app/">Finance-System Dashboard</a>
      <div className="">
      <a className="link" href="#">Contacts</a>
      </div>
    </div>
  </div> 
  )
}

export default Menu