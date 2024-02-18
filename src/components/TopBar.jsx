import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Delete } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
// eslint-disable-next-line react/prop-types
export default function TopBar({ open, handleDrawerOpen ,setMode}) {
  const theme = useTheme();
  return (
    <div className="topBar">
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box flexGrow={1} />
          <Stack direction={"row"}>
            {theme.palette.mode == "light" ? (
              <IconButton color="inherit" onClick={()=>{
                localStorage.setItem("currentMode",theme.palette.mode === "light" ? "dark":"light");
                setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
              }} aria-label="LightModeOutlinedIcon">
                <LightModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton color="inherit"onClick={()=>{
                localStorage.setItem("currentMode",theme.palette.mode === "light" ? "dark":"light")
                setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              );
              }} aria-label="DarkModeOutlinedIcon">
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton color="inherit" aria-label="delete">
              <Delete />
            </IconButton>
            <IconButton color="inherit" aria-label="NotificationsOutlinedIcon">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="SettingsOutlinedIcon">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Person2OutlinedIcon">
              <Person2OutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}
