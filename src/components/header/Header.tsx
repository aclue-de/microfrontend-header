import { AddCommentOutlined, InsertEmoticon, NotificationsNone } from '@mui/icons-material';
import { alpha, Box, IconButton, Link, styled, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { AvatarMenu } from '../avatar-menu';
import { HelpMenu } from '../help-menu/HelpMenu';
import AclueLogo from './../../images/aclue-logo.png';

const StyledIconButton = styled(IconButton)({
    marginLeft: 'auto',
    marginRight: 6,
    '&:hover': {
        backgroundColor: alpha('#1976d2', 0.04),
        color: '#1976d2',
    },
})

const PortalHeader = styled('header')({
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #f4f4f4',
    zIndex: 1100,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.12)',
    height: '64px',
})

const PortalImageContainer = styled(Box)({
    width: '160px',
    paddingLeft: '24px',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    borderRight: `1px solid #e6e6e6`,
    height: '40px',
    marginRight: '24px',
})

const PortalImage = styled('img')({
    height: '28px',
    display: 'block',
})

const PortalTitle = styled(Typography)({
    color: '#222',
    marginTop: '1px',
})

const PortalHeaderIcons = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    margin: '0 24px 0 auto',
})

export default function Header() {
    return (
        <PortalHeader>
            <PortalImageContainer>
                <Link href="http://www.aclue.de">
                    <PortalImage src={AclueLogo} alt="Aclue" />
                </Link>
            </PortalImageContainer>
            <PortalTitle variant="caption">
                ACLUE Retail Customers
            </PortalTitle>
            <PortalHeaderIcons>
                <Tooltip title="Benachrichtigungen" placement="bottom-end">
                    <StyledIconButton
                        id="notification-button"
                        aria-controls="notification-modal"
                        aria-haspopup="true"
                        size="medium"
                    >
                        <NotificationsNone />
                    </StyledIconButton>
                </Tooltip>

                <Tooltip title="Feedback" placement="bottom-end">
                    <StyledIconButton
                        style={{ marginLeft: '5px', marginRight: '12px' }}
                        id="feedback-button"
                        aria-controls="feedback-modal"
                        aria-haspopup="true"
                        size="medium"
                    >
                        <InsertEmoticon />
                    </StyledIconButton>
                </Tooltip>

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
            </PortalHeaderIcons>
        </PortalHeader>
    )
}
