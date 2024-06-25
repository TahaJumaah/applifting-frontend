import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
const inter = Inter({ subsets: ["latin"] });
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import NavBar from "./components/navBar";

export const metadata = {
  title: "DevOps Bootcamp",
  description: "DevOps Bootcamp project by Taha Jumaah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NavBar></NavBar>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
