import * as React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";

export const MyField: React.FC<FieldProps & TextFieldProps> = ({
  label,
  field,
}) => {
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
};
