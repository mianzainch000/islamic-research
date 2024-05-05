"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import messages from "@/messages/en.json";
import { useTranslations } from "next-intl";
import { Grid, Box, Typography } from "@mui/material";

const Qayamat = () => {
  const t = useTranslations("qayamat");

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
      {Object.keys(messages.qayamat)?.map((heading) => {
        return (
          <Grid
            item
            key={heading.id}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
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
                {t(`${heading}.reference`)}
              </Typography>
              <Typography
                sx={{ color: "secondary.light" }}
                className="translation"
              >
                {t(`${heading}.translation`)}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Qayamat;
