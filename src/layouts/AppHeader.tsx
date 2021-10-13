import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
  MouseEvent
} from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import HideOnScroll from 'cxComponent/HideOnScroll';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TranslateIcon from '@mui/icons-material/Translate';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'react-i18next';
import { toggleFullScreen } from 'cxUtil/index';

interface AppHeaderProps {
  target: Node | Window | undefined;
  open: boolean;
  handleDrawerOpen: () => void;
}

const TRANSLATE_MENU_ID = 'translate_Menu';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

const AppHeader: FC<AppHeaderProps> = ({ target, open, handleDrawerOpen }) => {
  const { t, i18n } = useTranslation('app');
  const [fullScreen, setFullScreen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorTranslateEl, setAnchorTranslateEl] =
    useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isTranslateMenuOpen = useMemo(() => {
    return Boolean(anchorTranslateEl);
  }, [anchorTranslateEl]);

  const isMenuOpen = useMemo(() => {
    return Boolean(anchorEl);
  }, [anchorEl]);

  const isMobileMenuOpen = useMemo(() => {
    return Boolean(mobileMoreAnchorEl);
  }, [mobileMoreAnchorEl]);

  // const handleSelect: MenuProps['onClick'] = useCallback(
  //   ({ key }) => {
  //     i18n.changeLanguage(key);
  //   },
  //   [i18n]
  // );

  // const languageMenu = useMemo(() => {
  //   return (
  //     <Menu onClick={handleSelect} selectedKeys={[i18n.language]}>
  //       <MenuItem key={'zh'}>中文</MenuItem>
  //       <MenuItem key={'en'}>English</MenuItem>
  //     </Menu>
  //   );
  // }, [handleSelect, i18n.language]);

  useEffect(() => {
    if (!document.fullscreenElement) {
      setFullScreen(false);
    } else {
      setFullScreen(true);
    }
  }, []);

  const toggleScreen = useCallback(() => {
    toggleFullScreen();
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTranslateMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorTranslateEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorTranslateEl(null);
    handleMobileMenuClose();
  };

  const renderTranslateMenu = (
    <Menu
      anchorEl={anchorTranslateEl}
      id={TRANSLATE_MENU_ID}
      open={isTranslateMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} key="chinese">
        中文
      </MenuItem>
      <MenuItem onClick={handleMenuClose} key="English">
        English
      </MenuItem>
    </Menu>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleTranslateMenuOpen}>
        <IconButton
          size="large"
          aria-label="语言切换"
          aria-controls={TRANSLATE_MENU_ID}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>语言</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <HideOnScroll target={target}>
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
              size="large"
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { sm: 'block' } }}
            >
              ChenXi
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="切换语言"
                color="inherit"
                aria-controls={TRANSLATE_MENU_ID}
                aria-haspopup="true"
                onClick={handleTranslateMenuOpen}
              >
                <TranslateIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
          {renderTranslateMenu}
          {renderMobileMenu}
          {renderMenu}
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default AppHeader;
