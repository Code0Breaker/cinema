import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const StyledInput = styled("input")(() => ({
  width: "250px",
  height: 40,
  borderRadius: 10,
  background: "#151f30",
  border: "none",
  paddingLeft: 20,
  color: "white",
  outline: "none",
}));

const Item = styled(Paper)(() => ({
  backgroundColor: "#151f30",
  padding: 10,
  alignItems:'center'
}));

const Card = styled(Paper)(() => ({
  position:'relative',
  height:300,
  borderRadius:10,
  background:'none'
}));

const Select = styled('select')(() => ({
    border:'none',
    background:'none',
    color:'white',
    margin:20,
    cursor:'pointer'
  }));

export { StyledInput, Item, Card, Select };
