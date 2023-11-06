import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <a href='/home'><SidebarItem Icon={FaHome} Text="Home"/></a>
        <a href='/postagens'><SidebarItem Icon={FaRegFileAlt} Text="Postar" /></a>
        <a href='/test'><SidebarItem Icon={FaEnvelope} Text="Conversas" /></a>
        <a href='/sobre'><SidebarItem Icon={FaUserAlt} Text="Sobre Nós" /></a>
        <a href='/'><SidebarItem Icon={FaRegSun} Text="Configurações" /></a>
        {/* <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" /> */}
        {/* <SidebarItem Icon={FaChartBar} Text="Postar" /> */}
        {/* <SidebarItem Icon={FaIdCardAlt} Text="Employeer" /> */}
      </Content>
    </Container>
  )
}

export default Sidebar