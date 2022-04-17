import styled from "@emotion/styled";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Card, Item, Select } from "../models";
import style from "./style.module.css";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";
import Items from "./Items";
import Calendar from "./Calendar";
import axios from "axios";

export default function Main() {
//   const [page, setPage] = useState(1);
const [items, setItems] = useState(12)
  const [rating, setRating] = useState("Featured");
  const ratings = ["Featured", "Popular", "Newest"];
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
const showMore = async() =>{
    await setItems(items+8)
    const result = await axios.post('http://localhost:3000/api/getData', {itemsToAdd:items})
}
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Item>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <Select>
                  <option defaultValue={"All geners"}>All geners</option>
                </Select>
                <Select>
                  <option defaultValue={"All years"}>All years</option>
                </Select>
                <Select>
                  <option defaultValue={"All years"}>All Countries</option>
                </Select>
              </Box>
              <Box
                borderRadius={"12px"}
                sx={{ background: "#131720", p: 1 }}
                display={"flex"}
                gap={1}
              >
                {ratings.map((item) => {
                  return (
                    <Box
                      key={item}
                      borderRadius={2}
                      padding={"5px"}
                      color={"white"}
                      sx={{
                        cursor: "pointer",
                        background: item === rating && "#151f30",
                      }}
                      onClick={() => setRating(item)}
                    >
                      <Typography variant={"caption"}>{item}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Item>
          <Items />
          <Box
        width={"100%"}
        marginTop={5}
        display={"flex"}
        justifyContent={"center"}
        className={style.pagination}
      >
          <Button variant="contained" color="primary" onClick={showMore}>Show more</Button>
        {/* <Pagination
          count={10}
          page={page}
          color="primary"
          size="large"
          sx={{ color: "white" }}
          onChange={handleChange}
        /> */}
      </Box>
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>
      
    </Box>
  );
}
