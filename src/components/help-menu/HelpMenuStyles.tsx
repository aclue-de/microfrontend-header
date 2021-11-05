import { alpha, IconButton, Link, Menu, MenuItem, MenuProps, withStyles } from '@material-ui/core'

const StyledMenu = withStyles({
    paper: {
        boxShadow: '0px 2px 4px 0px #888',
        width: 200,
        '& h3': {
            margin: 0,
            fontWeight: 'bold',
            fontSize: 16,
            color: '#5b6c75',
            padding: '8px 16px 12px',
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
            color: '#ba0019',
            backgroundColor: alpha('#d4021d', 0.04),
        },
    },
}))(MenuItem)

const StyledIconButton = withStyles(() => ({
    root: {
        marginLeft: 'auto',
        marginRight: 18,
        '&:hover': {
            backgroundColor: alpha('#d4021d', 0.04),
            color: '#ba0019',
        },
    },
}))(IconButton)

const StyledLink = withStyles({
    root: {
        '&:hover': {
            textDecoration: 'none',
        },
    },
})(Link)

export { StyledMenu, StyledMenuItem, StyledIconButton, StyledLink }
