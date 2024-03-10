import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { getDesignTokens } from './Theme'
import { Outlet } from 'react-router-dom'

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}))

export default function App() {
	const [open, setOpen] = React.useState(false)
	const [mode, setMode] = React.useState(
		localStorage.getItem('currentMode')
			? localStorage.getItem('currentMode')
			: 'light'
	)
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}
	const theme = React.useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode]
	)

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<TopBar
					open={open}
					handleDrawerOpen={handleDrawerOpen}
					setMode={setMode}
				/>
				<SideBar open={open} handleDrawerClose={handleDrawerClose} />
				<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
					<DrawerHeader />
					<Outlet />
				</Box>
			</Box>
		</ThemeProvider>
	)
}
