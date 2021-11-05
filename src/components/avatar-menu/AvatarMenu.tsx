import { alpha, Avatar, Link, Typography } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText'
import Menu, { MenuProps } from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import React from 'react'

const StyledMenu = withStyles({
    paper: {
        boxShadow: '0px 2px 4px 0px #888',
        width: '200px',
        '& h3': {
            margin: 0,
            fontWeight: 'bold',
            fontSize: '16px',
            color: '#1976d2',
            padding: '12px',
        },
        '& hr': {
            border: 0,
            borderTop: `1px #f6f6f6 solid`,
        },
    },
})((props: MenuProps) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: -6,
            horizontal: 'right',
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles(() => ({
    root: {
        color: '#5b6c75',
        '&:hover': {
            color: '#1976d2',
            backgroundColor: alpha('#1976d2', 0.04),
        },
    },
}))(MenuItem)

const StyledAvatar = withStyles({
    root: {
        backgroundColor: '#1976d2',
        cursor: 'pointer',
        margin: '0 18px',
        width: '40px',
        height: '40px',
    },
})(Avatar)

const StyledLink = withStyles({
    root: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
})(Link)

export type AvatarMenuPropTypes = {}

export const AvatarMenu: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <StyledAvatar
                className="sg-avatar"
                aria-controls="customized-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Typography variant="body2">TR</Typography>
            </StyledAvatar>
            <StyledMenu
                id="customized-menu"
                style={{ zIndex: 10300 }}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledLink
                    onClick={e => {
                        e.preventDefault()
                        setAnchorEl(null)
                    }}
                >
                    <StyledMenuItem>
                        <ListItemText primary='Mein Profil' />
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink
                    href="/signout"
                    onClick={e => {
                        e.preventDefault()
                        window.location.href = '/signout'
                        setAnchorEl(null)
                    }}
                >
                    <StyledMenuItem>
                        <ListItemText primary="Abmelden" />
                    </StyledMenuItem>
                </StyledLink>
            </StyledMenu>
        </div>
    )
}
