import { Grid, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import style from "./style.module.css";
export default function Calendar() {
  return (
    <List sx={{ background: "#151f30" }}>
      <ListItem className={style.links}>
          <Typography color={'white'}>Updates</Typography>
      </ListItem>
      <ListItem className={style.links}>
        <ListItemButton>
          <Link href={"/"}>
            <a>hfghdgh</a>
          </Link>
        </ListItemButton>
      </ListItem>
    </List>
  );
}
