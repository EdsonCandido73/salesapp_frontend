import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function SidebarItem({ url_item, label, items, depthStep = 20, depth = 0, ...rest }) {

  let history = useHistory();

  function handleClick() {
    if (url_item) {
      history.push(`${url_item}`);
    }
  }
    

  return (
    <>
      <ListItem button onClick={handleClick} dense {...rest}>
        <ListItemText style={{ paddingLeft: depth * depthStep }}>
          <span>{label}</span>
        </ListItemText>
      </ListItem>
      {Array.isArray(items) ? (
        <List disablePadding dense>
          {items.map((subItem) => (
            <SidebarItem              
              key={subItem.name}
              depth={depth + 1}
              depthStep={depthStep}
              {...subItem}
            />
          ))}
        </List>
      ) : null}
    </>
  )
}

function Sidebar({ items, depthStep, depth }) {
  return (
    <div className="sidebar">
      <List className="menuitem" disablePadding dense>
        {items.map((sidebarItem, index) => (
          <SidebarItem            
            key={`${sidebarItem.name}${index}`}
            depthStep={depthStep}
            depth={depth}
            {...sidebarItem}
          />
        ))}
      </List>
    </div>
  )
}

export default Sidebar