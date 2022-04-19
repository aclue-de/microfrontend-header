import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { ListItemText, Tooltip } from '@mui/material'
import React from 'react'
import { StyledIconButton, StyledLink, StyledMenu, StyledMenuItem } from '../MenuStyles'

export const HelpMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Tooltip title="Hilfe" placement="bottom-end">
                <StyledIconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} size="medium">
                    <HelpOutlineIcon />
                </StyledIconButton>
            </Tooltip>
            <StyledMenu
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
                        <ListItemText primary='FAQ' />
                    </StyledMenuItem>
                </StyledLink>
                <StyledLink
                    onClick={e => {
                        e.preventDefault()
                        setAnchorEl(null)
                    }}
                >
                    <StyledMenuItem>
                        <ListItemText primary='Ticketübersicht' />
                    </StyledMenuItem>
                </StyledLink>
            </StyledMenu>
        </>
    )
}
