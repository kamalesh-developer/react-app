import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, Button, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Link from "@material-ui/core/Link";
import CkeckBox from './checkBox';
import { Grid } from '@material-ui/core';
import useStyles from './appBarStyle';
import SetAlert from './alert';

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false)
    const [isAlert, setAlert] = useState(false);


    const handleDrawerOpen = (e) => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleLogout = () => {
        setAlert(true, setTimeout(() => {
            setAlert(false);
        }, 3000));
    }

    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={classes.root}>
            {isAlert && (<SetAlert color='success' message='Click On get in touch' />)}
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={(e) => handleDrawerOpen(e)}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon style={{ color: '#861BE3' }} />

                    </IconButton>
                    {/*<img src={logo} alt="Logo" height='40' />*/}
                    <Typography component='h2' variant='h4' style={{ color: '#861BE3', fontWeight: 'bold' }}>LOGO</Typography>
                    <IconButton className={classes.title}></IconButton>


                    <Typography className={classes.root}>
                        <Link style={{ textDecoration: "none", marginLeft: '20px' }} href="#" onClick={preventDefault}>
                            Home
                        </Link>
                        <Link style={{ textDecoration: "none", marginLeft: '20px' }} href="#" onClick={preventDefault}>
                            My Portfolio
                        </Link>
                        <Link style={{ textDecoration: "none", marginLeft: '20px' }} href="#" onClick={preventDefault}>
                            Clients
                        </Link>
                    </Typography>
                    <Button style={{ float: 'right', marginLeft: '20px' }}
                        variant="outlined"
                        className={classes.button}
                        onClick={handleLogout}
                        label=''
                    >
                        Get in touch
                    </Button>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main style={{background:'#962FF0'}}
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <br />
                <Grid container spacing={1}>
                    <Grid container justify='center' item xs={12} md={12} xl={12} spacing={1}>
                        <CkeckBox />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}
