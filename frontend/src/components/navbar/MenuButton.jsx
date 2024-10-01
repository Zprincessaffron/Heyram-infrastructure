import React, { useContext } from 'react'
import '../../styles/MenuButton.css'
import { AppContext } from '../../context/AppContext'
function MenuButton() {
    const { showMenu,setShowMenu } = useContext(AppContext)
    function handleMenuClick(){
       if(showMenu == true){
            setShowMenu(false)
            return
        }
        else{
            setShowMenu(true)
            return
        }
    }
  return (
   <div className='menubtnmain'>
     <label  className="hamburger">
  <input type="checkbox" />
  <svg viewBox="0 0 32 32"  onClick={handleMenuClick} >
    <path style={{stroke:`${showMenu?"black":"white"}`}}
      className={`line line-top-bottom`}
      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
    ></path>
    <path style={{stroke:`${showMenu?"black":"white"}`}} className="line"  d="M7 16 27 16"></path>
  </svg>
</label>
   </div>
  )
}

export default MenuButton