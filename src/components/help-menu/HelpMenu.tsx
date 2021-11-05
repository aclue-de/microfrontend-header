import { Tooltip, ListItemText, Typography } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import React from 'react'
import { StyledIconButton, StyledLink, StyledMenu, StyledMenuItem } from './HelpMenuStyles'

export const HelpMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Tooltip title="Hilfe" placement="bottom-end">
                <StyledIconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="medium">
                    <HelpOutlineIcon />
                </StyledIconButton>
            </Tooltip>
            <StyledMenu
                style={{ zIndex: 10300 }}
                id="simple-menu"
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
                        <ListItemText primary={<Typography variant="body2">FAQ</Typography>} />
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink
                    onClick={e => {
                        e.preventDefault()
                        setAnchorEl(null)
                    }}
                >
                    <StyledMenuItem>
                        <ListItemText
                            primary={<Typography variant="body2">Ticketübersicht</Typography>}
                        />
                    </StyledMenuItem>
                </StyledLink>
            </StyledMenu>
        </div>
    )
}
