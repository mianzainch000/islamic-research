"use client";
import Image from "next/image";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import Avatar from "@mui/material/Avatar";
import pak from "@assets/images/pak.jpg";
import usa from "@assets/images/usa.png";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useRouter, usePathname, useParams } from "next/navigation";
export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const path = usePathname();
  const pathname = useParams();
  const open = Boolean(anchorEl);
  const [lang, setLang] = useState(pathname.locale);

  const handleChange = (languageCode) => {
    console.log("Selected language:", languageCode);
    setLang(languageCode);
    const currentPathWithoutLocale = path.replace(`/${lang}`, "");
    const newPath = `/${languageCode}${currentPathWithoutLocale}`;
    router.replace(newPath);
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneYearInMilliseconds);
    setCookie("selectedLanguage", languageCode, { expires });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Language">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <Image
                src={lang === "en" ? usa : pak}
                alt="Language Flag"
                width={33}
                height={33}
              />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
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
        <MenuItem onClick={() => handleChange("urd")}>Urdu</MenuItem>
        <MenuItem onClick={() => handleChange("en")}>English</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
