import React from 'react';
import styled from 'styled-components';
import colour from '../resources/styles/colours'
import { NavButton } from './Button';
import PlaygroundPageAnimation from '../animations/PlaygroundPageAnimation';

const SideBarStyle = styled.div`
  background: ${colour.pink};
  height: 100vh;
  text-align: center;
`

const SideBarList = styled.ul`
  width: 100%;
  padding-left: 0px;
  list-style: none;
`

const SideBarListItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SideBar = () => {
  return (
    <PlaygroundPageAnimation>
    <SideBarStyle>
      <SideBarList>
        <SideBarListItem><NavButton menu="true" to="/playground/react">React</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/react-router">Routing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/styled-components">Styled Components</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/testing">Testing</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/api-requests">API Requests</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/webpack">Webpack</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/animations">Animations</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/grid-layout">Grid Layout</NavButton></SideBarListItem>
        <SideBarListItem><NavButton menu="true" to="/playground/icons">Icons</NavButton></SideBarListItem>
      </SideBarList>
      </SideBarStyle>
    </PlaygroundPageAnimation>
  );
}

export default SideBar;
