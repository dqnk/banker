import * as React from "react";
import { TextField } from "@material-ui/core";

export function MyField({ label, field }) {
  return (
    <TextField
      variant="filled"
      autoComplete="off"
      InputProps={{ style: { color: "white" } }}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      label={label}
      {...field}
    />
  );
}
