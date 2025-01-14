import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; 
import { logout } from "@/utils/SVGs";
import { Exit } from "@/lib/serverActions";
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';

export default function SplitButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (path: string | (() => void)) => {
    if (typeof path === 'function') {
      path(); 
    } else {
      window.location.href = path; 
    }
    setAnchorEl(null);
  };

  return (
    <>
      <ToggleButton
        value="right"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleToggle}
        aria-label="right aligned"
        sx={{
          color: 'white',
          marginRight: 5,
          backgroundColor: 'transparent',
          fontSize: '32px', 
          padding: '12px',  
        }}
      >
        <FormatAlignRightIcon sx={{ fontSize: 'inherit' }} />
      </ToggleButton>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'toggle-button',
        }}
        sx={{
          transform: 'translateX(-60px)',
        }}
      >
        <div className='bg-opacity-50 w-32'>
          <MenuItem onClick={() => handleMenuClick('/historic')}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="max-sm:hidden">historic</span>
              <AppRegistrationOutlinedIcon sx={{ fontSize: 23, marginLeft: '8px' }} />
            </div>
          </MenuItem>

          <MenuItem onClick={() => handleMenuClick('/')}>
            <a href="/">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="max-sm:hidden">logout</span>
                <ExitToAppIcon sx={{ fontSize: 23, marginLeft: '17px' }} />
              </div>
            </a>
          </MenuItem>
        </div>
      </Menu>
    </>
  );
}
