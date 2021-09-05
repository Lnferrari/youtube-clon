import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import SideBarContext from '../Contexts/sideBar/SideBarContext';
import NavigationBar from './NavigationBar/index';
// import SmallSideBar from './SideBar/SmallSideBar';
// import BigSideBar from './SideBar/BigSideBar';
import SideBar from './SideBar/index'
import BodyContent from './BodyContent/index'

const Index = () => {
  // const {isToggled} = useContext(SideBarContext)

  
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <SideBar />
        <Switch>
          <BodyContent />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Index
