import React from 'react'
import { Typography, IconButton, makeStyles, withStyles, Tooltip, alpha } from '@material-ui/core'
import { InsertEmoticon, AddCommentOutlined, NotificationsNone } from '@material-ui/icons'
import AclueLogo from './../../images/aclue-logo.png'
import { HelpMenu } from '../help-menu/HelpMenu'
import { AvatarMenu } from '../avatar-menu'

const StyledIconButton = withStyles(() => ({
    root: {
        marginLeft: 'auto',
        marginRight: 6,
        '&:hover': {
            backgroundColor: alpha('#1976d2', 0.04),
            color: '#1976d2',
        },
    },
}))(IconButton)

const useStyles = makeStyles({
    oscHeader: {
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottom: '1px solid #f4f4f4',
        zIndex: 10000,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
        height: '64px',
    },
    oscLogo: {
        width: '160px',
        paddingLeft: '24px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        borderRight: `1px solid #e6e6e6`,
        height: '40px',
        marginRight: '24px',
    },
    ottoLogo: {
        height: '28px',
        display: 'block',
    },
    oscTitle: {
        color: '#222',
        marginTop: '1px',
    },
    oscHeaderIcons: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 24px 0 auto',
    },
})

export default function Header() {
    const classes = useStyles()

    return (
        <header className={classes.oscHeader}>
            <div className={classes.oscLogo}>
                <a href="http://www.aclue.de">
                    <img className={classes.ottoLogo} src={AclueLogo} alt="Aclue" />
                </a>
            </div>
            <Typography variant="caption" className={classes.oscTitle}>
                ACLUE Retail Customers
            </Typography>
            <div className={classes.oscHeaderIcons}>
                <StyledIconButton
                    id="notification-button"
                    aria-controls="notification-modal"
                    aria-haspopup="true"
                    size="medium"
                >
                    <NotificationsNone />
                </StyledIconButton>

                <StyledIconButton
                    style={{ marginLeft: '5px', marginRight: '12px' }}
                    id="feedback-button"
                    aria-controls="feedback-modal"
                    aria-haspopup="true"
                    size="medium"
                >
                    <InsertEmoticon />
                </StyledIconButton>

                <HelpMenu />

                <Tooltip title="Ticket erstellen" placement="bottom-end">
                    <StyledIconButton
                        style={{ marginLeft: '-5px', marginRight: '8px' }}
                        id="ticket-button"
                        aria-controls="ticket-button"
                        aria-haspopup="true"
                        size="medium"
                    >
                        <AddCommentOutlined />
                    </StyledIconButton>
                </Tooltip>

                <AvatarMenu />
            </div>
        </header>
    )
}
