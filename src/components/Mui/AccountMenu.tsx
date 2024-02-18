import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import HistoryIcon from "@mui/icons-material/History";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { StyledLink } from "../../styles/Header";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigate = styled(Link)`
  text-decoration: none;
  color: var(--bg-text);
  font-family: var(--font-primary);
  font-weight: bold;
`;

export default function AccountMenu() {
  const { signout, user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Minha conta">
          <StyledLink
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Conta
          </StyledLink>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user ? (
          <>
            <MenuItem onClick={handleClose}>
              <Avatar /> Minha conta
            </MenuItem>

            <Divider />

            <Navigate to="/historic">
              <MenuItem>
                <ListItemIcon>
                  <HistoryIcon fontSize="small" />
                </ListItemIcon>
                Minhas reservas
              </MenuItem>
            </Navigate>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Configurações
            </MenuItem>
            <MenuItem onClick={signout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </>
        ) : (
          <>
            <Navigate to="/signUp">
              <MenuItem>
                <Avatar /> Registre-se
              </MenuItem>
            </Navigate>
            <MenuItem>Já tem uma conta?</MenuItem>
            <Navigate to="/signIn">
              <MenuItem>
                <Avatar />
                Faça login
              </MenuItem>
            </Navigate>
          </>
        )}
      </Menu>
    </React.Fragment>
  );
}
