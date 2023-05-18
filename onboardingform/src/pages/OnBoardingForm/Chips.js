import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Chips({ files, handleFileDelete }) {
  return (
      files.map((res,index) => (
    <Stack direction="row" spacing={1} key={index}>
        <Chip
          key={index}
          label={res.name}
          variant="outlined"
          onDelete={()=>handleFileDelete(index)}
          sx={{ marginTop: "10px" , backgroundColor: "orange"}}
        />
    </Stack>
      ))
  );
}
