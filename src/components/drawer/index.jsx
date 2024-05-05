"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import messages from "@/messages/en.json";
import logo from "@assets/images/logo.png";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkTheme } from "@/store/slices/themeSlice";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import {
  Drawer,
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  IconButton,
} from "@mui/material";
const DrawerComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const pathname = useParams();
  const dispatch = useDispatch();
  const t = useTranslations("navbar");
  const currentTheme = useSelector((state) => state.theme.isDark);
  const [lang, setLang] = useState(pathname.locale);
  const trans = useTranslations("drawerHeadings");
  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    const currentPathWithoutLocale = `/${path.substring(1 + lang.length)}`;
    const newPath = `/${selectedLang}${currentPathWithoutLocale}`;
    router.replace(newPath);
  };

  return (
    <Box>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            color: "secondarylight",
            backgroundColor: "primary.dark",
          },
        }}
      >
        <Grid container sx={{ padding: "30px 5px" }}>
          {/* Logo */}
          <Grid md={10} xs={10}>
            <Link href={"/"} className="link">
              <Image src={logo} width={50} />
              {/* <ImportContactsRoundedIcon
                sx={{
                  color: "secondary.light",
                  fontSize: "30px",
                  textAlign: "center",
                }}
              /> */}
            </Link>
          </Grid>

          <Grid md={1} xs={1}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: "secondary.light" }} />
            </IconButton>
          </Grid>

          <Grid md={12} xs={12} data-aos="fade-right">
            <Typography
              className="drawerHeadings"
              textAlign={"center"}
              color={"secondary.light"}
            >
              {t("navHeading")}
            </Typography>
          </Grid>
        </Grid>

        <Box data-aos="fade-right">
          {Object.keys(messages.drawerHeadings)?.map((heading) => {
            return (
              <Grid item key={heading.id} lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <Link
                    href={`${messages.drawerHeadings[heading].id}`}
                    className="link"
                  >
                    <Typography
                      sx={{ color: "secondary.light" }}
                      className="drawerHeadings "
                      onClick={() => setDrawerOpen(false)}
                    >
                      {trans(`${heading}.title`)}
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            );
          })}
        </Box>

        <Box
          sx={{
            borderBottom: "2px solid",
            color: "secondary.light",
            paddingTop: "15px",
          }}
        ></Box>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={lang}
            onChange={handleChange}
            className="radio"
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            <FormControlLabel
              value={"en"}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "secondary.light",
                    },
                    color: "secondary.light",
                  }}
                />
              }
              label="Englsih"
              className="text"
              sx={{ color: "secondary.light" }}
            />
            <FormControlLabel
              value={"urd"}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "secondary.light",
                    },
                    color: "secondary.light",
                  }}
                />
              }
              label="Urdu"
              sx={{ color: "secondary.light" }}
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <FormControlLabel
              onClick={() => dispatch(setIsDarkTheme(false))}
              checked={!currentTheme}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "secondary.light",
                    },
                    color: "secondary.light",
                  }}
                />
              }
              label="Light"
              className="text"
              sx={{ color: "secondary.light" }}
            />
            <FormControlLabel
              onClick={() => dispatch(setIsDarkTheme(true))}
              checked={currentTheme}
              control={
                <Radio
                  sx={{
                    "&.Mui-checked": {
                      color: "secondary.light",
                    },
                    color: "secondary.light",
                  }}
                />
              }
              label="Dark"
              className="text"
              sx={{ color: "secondary.light", paddingLeft: "15px" }}
            />
          </RadioGroup>
        </FormControl>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
