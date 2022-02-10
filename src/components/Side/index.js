//import useState hook to create menu collapse state
import React, { useState } from "react";



//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import { FiArrowLeftCircle, FiArrowRightCircle, FiCheck, FiGlobe , FiAlignJustify} from "react-icons/fi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Side.css";


const Side = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  
  

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "" : "Links Exteriores"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FiCheck />}><a href="https://www.cbf.com.br/" target="_blank" rel="noopener noreferrer">Seleção do Brasil</a>
                
              </MenuItem>
              <MenuItem  icon={<FiGlobe />}><a href="https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2021" target="_blank" rel="noopener noreferrer">Nacional</a></MenuItem>
              <MenuItem  icon={<FiAlignJustify />}><a href="https://pt.uefa.com/uefachampionsleague/" target="_blank"rel="noopener noreferrer" >Champions</a></MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Side;