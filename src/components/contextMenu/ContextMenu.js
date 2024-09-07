import React from "react";
import "./ContextMenu.css"




export default function ContextMenu({toggleVisibility,position}) {
  
  

  return (
    
    <div style={{visibility:toggleVisibility? "visible" : "hidden", top: position.x , left:position.y}} className="context-menu" id="context-menu">
      <div className="dropdown-item context-item first">New Folder</div>

      <div className="divider context-divider" />

      <div className="dropdown-item context-item">Get Info</div>

      <div className="dropdown-item context-item">
        Change Desktop Background
      </div>

      <div className="divider context-divider" />

      <div className="dropdown-item context-item">Use Stacks</div>

      <div className="dropdown-item context-item">Sort By</div>

      <div className="dropdown-item context-item">Clean Up</div>

      <div className="dropdown-item context-item">Clean Up By</div>

      <div className="dropdown-item context-item">LogOut</div>

      </div>
      
  );
}