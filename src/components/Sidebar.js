import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
  } from 'cdbreact';


function SideBar (){
  const navigate = useNavigate();

    return (
    <div className="border-end sidenav" id="sidebar-wrapper">
      
      {/* Static Sidebar */}
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#1F0F60">

          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Diet Wizard</a>
          </CDBSidebarHeader>
          
          {/* Sidebar Content */}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <Link exact to="/home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">New Analysis</CDBSidebarMenuItem>
              </Link>
              <Link exact to="/allrecords" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">All Records</CDBSidebarMenuItem>
              </Link>
              <Link exact to="/profile" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Profile</CDBSidebarMenuItem>
              </Link>
             
             
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div className="sidebar-btn-wrapper" style={{padding: '20px 5px', }}>
              <button className="btn btn-primary" onClick={()=>{navigate("/login")}} >Logout</button>
            </div>
          </CDBSidebarFooter>

        </CDBSidebar>
      </div>
      
    </div>
                
       
        
    );
}

export default SideBar;