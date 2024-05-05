"use client";
import React from "react";
import "@/app/globals.css";
import { Provider } from "react-redux";
import Navbar from "@/components/navbar";
import NextTopLoader from "nextjs-toploader";
import { persistor, store } from "@/store/store";
import { NextIntlClientProvider } from "next-intl";
import ThemeRegistry from "@/components/ThemeRegistry";
import { PersistGate } from "redux-persist/integration/react";

export default async function RootLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log("not found", error);
  }
  return (
    <html lang={locale}>
      <body>
        <NextTopLoader color="#29D" />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ThemeRegistry>
                <Navbar />
                {children}
              </ThemeRegistry>
            </NextIntlClientProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
