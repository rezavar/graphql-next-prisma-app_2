'use client'
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const BookMarkButton = styled(Button)({
    backgroundColor: "orange",
    color: "#020d3a",
    fontSize: '0.7rem',
    padding:'0 1rem',
    borderRadius: 999,
    "&:hover": {
        backgroundColor: "darkorange",
    },
});