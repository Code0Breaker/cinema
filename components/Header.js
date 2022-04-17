import { Box, Input } from "@mui/material";
import Link from "next/link";
import { Logo } from "./logo";
import { StyledInput } from "./models";
import style from "./style.module.css";
export default function Header() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      height={"100px"}
    >
      <Box>
        <Logo />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"30px"}
        className={style.nav}
      >
        <Link href={"/"}>
          <a>Films</a>
        </Link>
        <Link href={"/"}>
          <a>Serials</a>
        </Link>
        <Link href={"/"}>
          <a>Cartoons</a>
        </Link>
        <Link href={"/"}>
          <a>Anime</a>
        </Link>
      </Box>
      <Box>
        <StyledInput placeholder="Search ..." />
      </Box>
    </Box>
  );
}
