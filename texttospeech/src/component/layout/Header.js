import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import { Toolbar, IconButton, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Header () {
    const classes = useStyles()

    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton}color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Text To Speech
                </Typography>
                <Button edge="end" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header