"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Grid } from "@mui/material";
import CardComp from "@/components/card";
import messages from "@/messages/en.json";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
const WealthSubHeading = () => {
  const path = usePathname();
  const t = useTranslations("wealthSubHeading");

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "100px",
        marginBottom: "20px",
        justifyContent: "center",
        flexDirection: path === "/urd/wealth" ? "row-reverse" : "row",
      }}
      data-aos="fade-right"
    >
      {Object.keys(messages.wealthSubHeading)?.map((heading) => {
        return (
          <Grid
            item
            key={heading.id}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardComp
              href={`wealth/${messages.wealthSubHeading[heading].id}`}
              title={t(`${heading}.title`)}
              button={t(`${heading}.button`)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default WealthSubHeading;
