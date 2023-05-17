import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiInputBase-input": {
      height: "30px",
      padding: "6px 12px", // Adjust padding as needed
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "orange",
    },
    width: "100%",
  },
}));

function EducationExp({ formDataChange, handleNext, handleBack }) {
  const classes = useStyles();
  const EducationType = ["HSC", "SSC", "B.Sc", "BE", "ME", "M.Sc", "Ph.D"];
  const InstituteName = [
    "Rajiv Gandhi University",
    "Rajiv Gandhi University",
    "Rajiv Gandhi University",
    "Rajiv Gandhi University",
  ];
  const course = [
    "B.Tech",
    "It",
    "Computer Science",
    "Mechanical",
    "Electrical",
  ];
  const validationSchema = Yup.object({
    educationType: Yup.string().required("Required"),
    instituteName: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    cgpa: Yup.string().required("Required"),
    passYear: Yup.string().required("Required"),
    totalExperience: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    designation: Yup.string().required("Required"),
    technology: Yup.string().required("Required"),
    fromDate: Yup.string().required("Required"),
    toDate: Yup.string(),
    reasonForJobChange: Yup.string().required("Required"),
    companyPresent: Yup.boolean().required("Required"),
  });

  const [educationCount, setEducationCount] = React.useState(1);

  const formik = useFormik({
    initialValues: {
      educationType: "",
      instituteName: "",
      course: "",
      cgpa: "",
      passYear: "",
      totalExperience: "",
      company: "",
      designation: "",
      technology: "",
      fromDate: "",
      toDate: "",
      reasonForJobChange: "",
      companyPresent: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formDataChange(values);
      if (values) {
        handleNext();
      }
      console.log(values);
    },
  });
  console.log(formik.values.companyPresent, "formik.values");
  return (
    <Paper
      elevation={4}
      sx={{ marginTop: "40px", padding: "20px", height: "100%" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Highest Degree
            </Typography>
            <Button
              variant="contained"
              onClick={() => setEducationCount(educationCount + 1)}
              sx={{ backgroundColor: "orange", color: "white" }}
            >
              <AddIcon /> Add Education
            </Button>
          </Stack>
          <hr />
        </Box>
        {[...Array(educationCount)].map((item, index) => (
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="educationType" sx={{ marginTop: "10px" }}>
                      Education Type
                    </InputLabel>
                    <Select
                      labelId="educationType"
                      id="educationType"
                      value={formik.values.educationType}
                      name="educationType"
                      onBlur={formik.handleBlur}
                      label="educationType"
                      onChange={(event) =>
                        formik.setFieldValue(
                          "educationType",
                          event.target.value
                        )
                      }
                      sx={{ height: "40px", marginTop: "10px" }}
                    >
                      {EducationType.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {formik.errors.educationType &&
                    formik.touched.educationType && (
                      <Typography variant="caption" color="orange">
                        {formik.errors.educationType}
                      </Typography>
                    )}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="instituteName" sx={{ marginTop: "10px" }}>
                      Institute Name
                    </InputLabel>
                    <Select
                      labelId="instituteName"
                      id="instituteName"
                      value={formik.values.instituteName}
                      name="instituteName"
                      onBlur={formik.handleBlur}
                      label="instituteName"
                      onChange={(event) =>
                        formik.setFieldValue(
                          "instituteName",
                          event.target.value
                        )
                      }
                      sx={{ height: "40px", marginTop: "10px" }}
                    >
                      {InstituteName.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {formik.errors.instituteName &&
                    formik.touched.instituteName && (
                      <Typography variant="caption" color="orange">
                        {formik.errors.instituteName}
                      </Typography>
                    )}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel id="course" sx={{ marginTop: "10px" }}>
                      Course
                    </InputLabel>
                    <Select
                      labelId="course"
                      id="course"
                      value={formik.values.course}
                      name="course"
                      onBlur={formik.handleBlur}
                      label="course"
                      onChange={(event) =>
                        formik.setFieldValue("course", event.target.value)
                      }
                      sx={{ height: "40px", marginTop: "10px" }}
                    >
                      {course.map((item, index) => (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {formik.errors.course && formik.touched.course && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.course}
                    </Typography>
                  )}
                </Box>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  id="cgpa"
                  type="text"
                  name="cgpa"
                  label="cgpa"
                  variant="outlined"
                  sx={{ marginTop: "10px", width: "100%" }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.cgpa}
                  helperText={
                    formik.errors.cgpa &&
                    formik.touched.cgpa && (
                      <Typography variant="caption" color="orange">
                        {formik.errors.cgpa}
                      </Typography>
                    )
                  }
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  id="passYear"
                  type="date"
                  name="passYear"
                  label="Passing Year"
                  variant="outlined"
                  sx={{ marginTop: "10px", width: "100%" }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passYear}
                  helperText={
                    formik.errors.passYear &&
                    formik.touched.passYear && (
                      <Typography variant="caption" color="orange">
                        {formik.errors.passYear}
                      </Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Box>
          <Stack>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
              component="div"
            >
              Experience
            </Typography>
          </Stack>
          <hr />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="totalExperience"
                type="text"
                name="totalExperience"
                label="Total Experience"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.totalExperience}
                helperText={
                  formik.errors.totalExperience &&
                  formik.touched.totalExperience && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.totalExperience}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="company"
                type="text"
                name="company"
                label="Company"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
                helperText={
                  formik.errors.company &&
                  formik.touched.company && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.company}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="designation"
                type="text"
                name="designation"
                label="Designation"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.designation}
                helperText={
                  formik.errors.designation &&
                  formik.touched.designation && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.designation}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="technology"
                type="text"
                name="technology"
                label="Technology"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.technology}
                helperText={
                  formik.errors.technology &&
                  formik.touched.technology && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.technology}
                    </Typography>
                  )
                }
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
        <Grid item xs={4}>
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    value="Mark if the company is present "
                    control={<Checkbox />}
                    label="Mark if the company is present "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.companyPresent}
                    name="companyPresent"
                    sx={{ marginTop: "10px", width: "100%" }}
                  />
                </FormGroup>
              </FormControl>
              {formik.touched.companyPresent &&
                formik.errors.companyPresent && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.companyPresent}
                  </Typography>
                )}
            </Grid>
          <Grid container spacing={2}>
          <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="fromDate"
                type="date"
                name="fromDate"
                label="From Date"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fromDate}
                helperText={
                  formik.errors.fromDate &&
                  formik.touched.fromDate && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.fromDate}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="toDate"
                type="date"
                name="toDate"
                label="To Date"
                variant="outlined"
                style={!formik.values.companyPresent ? {} : {display: 'none'}}
                sx={{ marginTop: "10px",}}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.toDate}
                helperText={
                  formik.errors.toDate &&
                  formik.touched.toDate && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.toDate}
                    </Typography>
                  )
                }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                id="reasonForJobChange"
                type="text"
                name="reasonForJobChange"
                label="Reason For Job Change"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reasonForJobChange}
                helperText={
                  formik.errors.reasonForJobChange &&
                  formik.touched.reasonForJobChange && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.reasonForJobChange}
                    </Typography>
                  )
                }
              />
            </Grid>
            </Grid>
          
        </Box>

        <Stack
          direction={"row"}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "orange",
              color: "white",
            }}
            onClick={handleBack}
          >
            back
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
            sx={{
              marginTop: "20px",
              backgroundColor: "orange",
              color: "white",
            }}
          >
            Next
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default EducationExp;
