import { Avatar, Tooltip, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import withStyles from '@mui/styles/withStyles';
import React from 'react';
import { StyledLink, StyledMenu, StyledMenuItem } from '../MenuStyles';

const StyledAvatar = withStyles({
    root: {
        backgroundColor: '#1976d2',
        cursor: 'pointer',
        margin: '0 18px',
        width: '40px',
        height: '40px',
    },
})(Avatar)

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
        <>
            <Tooltip title="Profil" placement="bottom-end">
                <StyledAvatar
                    className="sg-avatar"
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <Typography variant="body2">AC</Typography>
                </StyledAvatar>
            </Tooltip>
            <StyledMenu
                id="customized-menu"
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
        </>
    )
}
