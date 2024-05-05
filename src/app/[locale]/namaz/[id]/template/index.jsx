"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import messages from "@/messages/en.json";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";

const DetailPage = () => {
  const pathName = usePathname();
  const t = useTranslations("namazDetailPage");
  const paramId = pathName.split("/")[3];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const subheading = messages.namazDetailPage.find(
    (item) => item.id === paramId
  );
  useEffect(() => {
    messages.namazDetailPage.find((item, index) => {
      if (item.id === paramId) {
        setSelectedIndex(index);
      }
    });
  }, [paramId]);

  if (!subheading) {
    return (
      <Box>
        <Typography
          variant="h3"
          color="red"
          paddingTop="200px"
          textAlign="center"
        >
          Page Not Found 404
        </Typography>
      </Box>
    );
  }
  const content = subheading.content || [];

  console.log("weath====", content, t("1.id"));

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginBottom: "20px",
        justifyContent: "center",
        marginTop: { lg: "40px", md: "40px", sm: "40px", xs: "20px" },
      }}
      data-aos="fade-right"
    >
      {content?.map((heading, index) => {
        return (
          <Grid
            item
            key={index}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "5px solid",
                borderColor: (theme) => theme.palette.secondary.light,
              }}
              className="box"
            >
              <Typography
                sx={{ color: "secondary.light" }}
                className="reference"
              >
                {t(`${selectedIndex}.content.${index}.reference`)}
              </Typography>
              <Typography
                sx={{ color: "secondary.light" }}
                className="translation"
              >
                {t(`${selectedIndex}.content.${index}.translation`)}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DetailPage;
