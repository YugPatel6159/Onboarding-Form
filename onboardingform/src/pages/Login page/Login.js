import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import { Box, Paper, TextField, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
function Login() {
  const initialValues = {
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Required"),
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values) {
        navigate("/onboarding");
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            margin: 0,
            padding: 0,
            display: "grid",
            placeItems: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box
            sx={{
              width: "80%",
              maxWidth: "500px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <Stack direction={"column"} spacing={2}>
              <Stack sx={{ alignItems: "center" }}>
                <img
                  src={require("../../assets/logo.png")}
                  width="300px"
                  height="80px"
                  alt="LOGO"
                />
              </Stack>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                New Employee Onboarding
              </Typography>
              <Typography variant="body2">
                Hello! We're looking forward to welcoming you at Cybercom
                Creation. Please assist us in gathering the necessary
                information and documents from you.If you have any questions,
                feel free to email hr@cybercom.co.in.
              </Typography>
              <Typography variant="body2">
                Please enter the password to proceed further. Thank you.
              </Typography>
              <TextField
                id="password"
                label="Password"
                // sx={{marginBottom:"30px"}}
                type="password"
                value={formik.values.password}
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
                onBlur={formik.handleBlur}
                helperText={
                  formik.errors.password &&
                  formik.touched.password && (
                    <span style={{ color: "red" }}>
                      {formik.errors.password}
                    </span>
                  )
                }
              />
              <hr></hr>
              <Stack sx={{ alignItems: "center" }}>
                <Button
                  variant="text"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "30%",
                    color: "white",
                    backgroundColor: "orange",
                  }}
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </form>
    </>
  );
}

export default Login;
