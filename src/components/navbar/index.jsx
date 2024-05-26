"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/images/logo.png";
import { useTranslations } from "next-intl";
import DrawerComp from "@/components/drawer";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import AccountMenu from "@/components/account-menu";
import { useDispatch, useSelector } from "react-redux";
import { useTheme, useMediaQuery } from "@mui/material";
import { setIsDarkTheme } from "@/store/slices/themeSlice";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";

const Navbar = () => {
  const path = usePathname();
  const colorTheme = useTheme();
  const dispatch = useDispatch();
  const t = useTranslations("navbar");
  const [screen, setScreenName] = useState("");
  const isMatch = useMediaQuery(colorTheme.breakpoints.down("md"));
  const currentTheme = useSelector((state) => state.theme.isDark);

  const toggleTheme = () => {
    dispatch(setIsDarkTheme(!currentTheme));
  };

  useEffect(() => {
    if (path === "/urd") {
      return setScreenName(t("navHeading"));
    } else if (path === "/urd/translationQuran") {
      return setScreenName(t("quran"));
    } else if (path === "/urd/dua") {
      return setScreenName(t("dua"));
    } else if (path === "/urd/dua/1") {
      return setScreenName(t("duatitle1"));
    } else if (path === "/urd/dua/2") {
      return setScreenName(t("duatitle2"));
    } else if (path === "/urd/dua/3") {
      return setScreenName(t("duatitle3"));
    } else if (path === "/urd/dua/4") {
      return setScreenName(t("duatitle4"));
    } else if (path === "/urd/dua/5") {
      return setScreenName(t("duatitle5"));
    } else if (path === "/urd/dua/6") {
      return setScreenName(t("duatitle6"));
    } else if (path === "/urd/dua/7") {
      return setScreenName(t("duatitle7"));
    } else if (path === "/urd/dua/8") {
      return setScreenName(t("duatitle8"));
    } else if (path === "/urd/dua/9") {
      return setScreenName(t("duatitle9"));
    } else if (path === "/urd/dua/10") {
      return setScreenName(t("duatitle10"));
    } else if (path === "/urd/dua/11") {
      return setScreenName(t("duatitle11"));
    } else if (path === "/urd/dua/12") {
      return setScreenName(t("duatitle12"));
    } else if (path === "/urd/dua/13") {
      return setScreenName(t("duatitle13"));
    } else if (path === "/urd/dua/14") {
      return setScreenName(t("duatitle14"));
    } else if (path === "/urd/dua/15") {
      return setScreenName(t("duatitle15"));
    } else if (path === "/urd/dua/16") {
      return setScreenName(t("duatitle16"));
    } else if (path === "/urd/dua/17") {
      return setScreenName(t("duatitle17"));
    } else if (path === "/urd/dua/18") {
      return setScreenName(t("duatitle18"));
    } else if (path === "/urd/namaz") {
      return setScreenName(t("namaz"));
    } else if (path === "/urd/namaz/1") {
      return setScreenName(t("namaztitle1"));
    } else if (path === "/urd/namaz/2") {
      return setScreenName(t("namaztitle2"));
    } else if (path === "/urd/namaz/3") {
      return setScreenName(t("namaztitle3"));
    } else if (path === "/urd/namaz/4") {
      return setScreenName(t("namaztitle4"));
    } else if (path === "/urd/namaz/5") {
      return setScreenName(t("namaztitle5"));
    } else if (path === "/urd/namaz/6") {
      return setScreenName(t("namaztitle6"));
    } else if (path === "/urd/wealth") {
      return setScreenName(t("wealth"));
    } else if (path === "/urd/wealth/1") {
      return setScreenName(t("wealthtitle1"));
    } else if (path === "/urd/wealth/2") {
      return setScreenName(t("wealthtitle2"));
    } else if (path === "/urd/wealth/3") {
      return setScreenName(t("wealthtitle3"));
    } else if (path === "/urd/qayamat") {
      return setScreenName(t("qayamat"));
    } else if (path === "/urd/theShadeofAllahsthrone") {
      return setScreenName(t("shadow"));
    } else if (path === "/urd/70kluckyPepeple") {
      return setScreenName(t("luckyPeople"));
    } else if (path === "/urd/qabar") {
      return setScreenName(t("qabar"));
    } else {
      if (path === "/en") {
        return setScreenName(t("navHeading"));
      } else if (path === "/en/translationQuran") {
        return setScreenName(t("quran"));
      } else if (path === "/en/dua") {
        return setScreenName(t("dua"));
      } else if (path === "/en/dua/1") {
        return setScreenName(t("duatitle1"));
      } else if (path === "/en/dua/2") {
        return setScreenName(t("duatitle2"));
      } else if (path === "/en/dua/3") {
        return setScreenName(t("duatitle3"));
      } else if (path === "/en/dua/4") {
        return setScreenName(t("duatitle4"));
      } else if (path === "/en/dua/5") {
        return setScreenName(t("duatitle5"));
      } else if (path === "/en/dua/6") {
        return setScreenName(t("duatitle6"));
      } else if (path === "/en/dua/7") {
        return setScreenName(t("duatitle7"));
      } else if (path === "/en/dua/8") {
        return setScreenName(t("duatitle8"));
      } else if (path === "/en/dua/9") {
        return setScreenName(t("duatitle9"));
      } else if (path === "/en/dua/10") {
        return setScreenName(t("duatitle10"));
      } else if (path === "/en/dua/11") {
        return setScreenName(t("duatitle11"));
      } else if (path === "/en/dua/12") {
        return setScreenName(t("duatitle12"));
      } else if (path === "/en/dua/13") {
        return setScreenName(t("duatitle13"));
      } else if (path === "/en/dua/14") {
        return setScreenName(t("duatitle14"));
      } else if (path === "/en/dua/15") {
        return setScreenName(t("duatitle15"));
      } else if (path === "/en/dua/16") {
        return setScreenName(t("duatitle16"));
      } else if (path === "/en/dua/17") {
        return setScreenName(t("duatitle17"));
      } else if (path === "/en/dua/18") {
        return setScreenName(t("duatitle18"));
      } else if (path === "/en/namaz") {
        return setScreenName(t("namaz"));
      } else if (path === "/en/namaz/1") {
        return setScreenName(t("namaztitle1"));
      } else if (path === "/en/namaz/2") {
        return setScreenName(t("namaztitle2"));
      } else if (path === "/en/namaz/3") {
        return setScreenName(t("namaztitle3"));
      } else if (path === "/en/namaz/4") {
        return setScreenName(t("namaztitle4"));
      } else if (path === "/en/namaz/5") {
        return setScreenName(t("namaztitle5"));
      } else if (path === "/en/namaz/6") {
        return setScreenName(t("namaztitle6"));
      } else if (path === "/en/wealth") {
        return setScreenName(t("wealth"));
      } else if (path === "/en/wealth/1") {
        return setScreenName(t("wealthtitle1"));
      } else if (path === "/en/wealth/2") {
        return setScreenName(t("wealthtitle2"));
      } else if (path === "/en/wealth/3") {
        return setScreenName(t("wealthtitle3"));
      } else if (path === "/en/qayamat") {
        return setScreenName(t("qayamat"));
      } else if (path === "/en/theShadeofAllahsthrone") {
        return setScreenName(t("shadow"));
      } else if (path === "/en/70kluckyPepeple") {
        return setScreenName(t("luckyPeople"));
      } else if (path === "/en/qabar") {
        return setScreenName(t("qabar"));
      }
    }
  }, [path, t]);
  return (
    <AppBar position="fixed" sx={{ background: "grey" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMatch ? (
          <>
            <Link href={"/"} className="link">
              <Image src={logo} width={50} />
            </Link>
            <Typography
              sx={{ fontSize: { sm: "30px", xs: "16px" } }}
              textAlign={"center"}
              alignItems={"center"}
            >
              {screen}
            </Typography>
            <DrawerComp />
          </>
        ) : (
          <>
            <Link href={"/"} className="link">
              <Image src={logo} width={50} />
            </Link>
            <Typography variant="h5" color={"secondary.light"}>
              {screen}
            </Typography>
            <Stack spacing={2} direction={"row"}>
              <Button onClick={toggleTheme}>
                {!currentTheme ? (
                  <WbSunnyRoundedIcon sx={{ color: "secondary.light" }} />
                ) : (
                  <NightlightRoundRoundedIcon
                    sx={{ color: "secondary.light" }}
                  />
                )}
              </Button>
              <AccountMenu />
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
