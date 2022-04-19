import { alpha, Icon, IconButton, Link, Menu, MenuItem, MenuProps, paperClasses, styled } from '@mui/material';

import withStyles from '@mui/styles/withStyles';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
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
))({
    [`.${paperClasses.root}`]: {
        boxShadow: '0px 2px 4px 0px #888',
        width: 200,
        '& h3': {
            margin: 0,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#1976d2',
            padding: 12,
        },
        '& hr': {
            border: 0,
            borderTop: `1px #f6f6f6 solid`,
        },
    }
})

const StyledMenuItem = styled(MenuItem)({
    color: '#5b6c75',
    '&:hover': {
        color: '#1976d2',
        backgroundColor: alpha('#1976d2', 0.04),
    },
})

const StyledIconButton = styled(IconButton)({
    marginLeft: 'auto',
    marginRight: 18,
    '&:hover': {
        backgroundColor: alpha('#1976d2', 0.04),
        color: '#1976d2',
    },
})

const StyledLink = styled(Link)({
    '&:hover': {
        textDecoration: 'none',
    },
})

export { StyledMenu, StyledMenuItem, StyledIconButton, StyledLink }
