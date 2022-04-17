import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Card } from "../models";
import Link from "next/link";
import style from "./style.module.css";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { Context } from "../../context";
import placeholder from "./placeholder.png";
export default function Items() {
  const { data } = useContext(Context);
  return (
    <Grid container spacing={3} marginTop={1}>
      {data &&
        data.map((item) => (
          <Grid item xs={3} key={item.id}>
            <Link href="/">
              <a>
                <Card className={style.card}>
                  <Box
                    position={"absolute"}
                    zIndex={5}
                    top={0}
                    sx={{ background: "black" }}
                    borderRadius={"10px 0"}
                    padding={'10px'}
                    color={'white'}
                  >
                    {item.translation.title}
                  </Box>
                  {item?.material_data?.poster_url ? (
                    <img src={item?.material_data?.poster_url} />
                  ) : (
                    //   <img src={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcringemdb.com%2F&psig=AOvVaw29CttSZfEMAB9HEdtlHAPU&ust=1649680545139000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCNDcvqrBifcCFQAAAAAdAAAAABAS'}/>
                    <Image src={placeholder} />
                  )}
                  <Box
                    position={"absolute"}
                    borderRadius={"0 0 10px 10px"}
                    zIndex={5}
                    bottom={0}
                    padding={2}
                    width={"100%"}
                  >
                    <Typography variant={"h5"} color={"white"}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      Free
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      Action
                    </Typography>
                    <Typography
                      variant={"caption"}
                      color={"white"}
                      marginRight={2}
                    >
                      2021
                    </Typography>
                  </Box>
                </Card>
              </a>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}
