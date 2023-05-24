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
  Autocomplete,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Picker } from "@mui/lab";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { educationValidationSchema } from "../../validation/educationValidationSchema";
// import { educationValidationSchema } from "../../validation/ProfileValidationSchema";

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

function EducationExp({
  formDataChange,
  handleNext,
  handleBack,
  educationData,
  educationDataChange,
  setEducationData,
}) {
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

  const formik = useFormik({
    initialValues: {
      education: [
        {
          educationType: "",
          instituteName: "",
          course: "",
          cgpa: "",
          passYear: "",
        },
      ],
      totalExperience: "",
      experience: [
        {
          company: "",
          designation: "",
          technology: "",
          fromDate: "",
          toDate: "",
          companyPresent: false,
        },
      ],
      reasonForJobChange: "",
    },
    validationSchema: educationValidationSchema,
    // validate:{validateToDate},
    onSubmit: (values) => {
      if (values) {
        console.log(values, "values");
        formDataChange(values);
        setEducationData(values);
        educationDataChange(values);
        handleNext();
      }
    },
  });

  console.log(formik.values, "formik.values");
  const addEducationFields = () => {
    const newEducation = {
      educationType: "",
      instituteName: "",
      course: "",
      cgpa: "",
      passYear: "",
    };

    formik.setValues((prevState) => ({
      ...prevState,
      education: [...prevState.education, newEducation],
    }));
  };

  const deleteField = (index) => {
    formik.setValues((prevState) => ({
      ...prevState,
      education: prevState.education.filter((_, i) => i !== index),
    }));
  };

  const addExperienceFields = () => {
    const newExperience = {
      totalExperience: "",
      company: "",
      designation: "",
      technology: "",
      fromDate: "",
      toDate: "",
      reasonForJobChange: "",
      companyPresent: false,
    };

    formik.setValues((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, newExperience],
    }));
  };

  const deleteExperienceField = (index) => {
    formik.setValues((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    console.log(educationData);
    if (educationData != null) {
      formik.setValues(educationData);
    }
  }, []);
  useEffect(() => {
    if (formik.values) setEducationData(formik.values);
    // formik.setValues(documentData);
  }, [formik.values]);
  // const TotalExperience = ["0 ", "1 ", "2 ", "3 ", "4 ", "5 ", "10", "10+"];

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
              onClick={addEducationFields}
              sx={{ backgroundColor: "orange", color: "white" }}
            >
              <AddIcon /> Add Education
            </Button>
          </Stack>
          <hr />
        </Box>
        {formik.values.education &&
          formik.values.education.length > 0 &&
          formik.values.education.map((item, index) => {
            // console.log(formik.values.education, "sef");
            return (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel
                          id={`educationType-${index}`}
                          sx={{ marginTop: "10px" }}
                        >
                          Education Type
                        </InputLabel>
                        <Select
                          labelId={`educationType-${index}`}
                          name={`education[${index}].educationType`}
                          // onBlur={formik.handleBlur}
                          label="Education Type"
                          value={
                            formik.values.education[index]?.educationType || ""
                          }
                          onChange={(event) =>
                            formik.setFieldValue(
                              `education[${index}].educationType`,
                              event.target.value
                            )
                          }
                          sx={{ height: "40px", marginTop: "10px" }}
                        >
                          {EducationType.map((item, i) => (
                            <MenuItem key={i} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {formik.errors.education &&
                        formik.errors.education[index] &&
                        formik.errors.education[index].educationType &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].educationType && (
                          <Typography variant="caption" color="red">
                            {formik.errors.education[index].educationType}
                          </Typography>
                        )}
                    </Box>
                  </Grid>

                  <Grid item xs={4}>
                    <Box>
                      <FormControl fullWidth>
                        <InputLabel
                          id="instituteName"
                          sx={{ marginTop: "10px" }}
                        >
                          Institute Name
                        </InputLabel>
                        <Select
                          labelId="instituteName"
                          id={`education[${index}].instituteName`}
                          value={
                            formik.values.education[index].instituteName || ""
                          }
                          name={`education[${index}].instituteName`}
                          // onBlur={formik.handleBlur}
                          label="Institute Name"
                          onChange={(event) =>
                            formik.setFieldValue(
                              `education[${index}].instituteName`,
                              event.target.value
                            )
                          }
                          sx={{ height: "40px", marginTop: "10px" }}
                        >
                          {InstituteName.map((item, i2) => (
                            <MenuItem key={i2} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {formik.errors.education &&
                        formik.errors.education[index] &&
                        formik.errors.education[index].instituteName &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].instituteName && (
                          <Typography variant="caption" color="red">
                            {formik.errors.education[index].instituteName}
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
                          value={formik.values.education[index].course || ""}
                          name={`education[${index}].course`}
                          // onBlur={formik.handleBlur}
                          onChange={(event) => {
                            formik.setFieldValue(
                              `education[${index}].course`,
                              event.target.value
                            );
                          }}
                          label="course"
                          sx={{ height: "40px", marginTop: "10px" }}
                        >
                          {course.map((item, i3) => (
                            <MenuItem key={i3} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {formik.errors.education &&
                        formik.errors.education[index] &&
                        formik.errors.education[index].course &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].course && (
                          <Typography variant="caption" color="red">
                            {formik.errors.education[index].course}
                          </Typography>
                        )}
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      className={classes.textField}
                      // id={`item.cgpa`}
                      name={`education[${index}].cgpa`}
                      variant="outlined"
                      sx={{ marginTop: "10px", width: "100%" }}
                      label="CGPA"
                      type="text"
                      // onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      // value={formik.values.education[index].cgpa || ""}
                      value={formik.values.education[index].cgpa}
                      helperText={
                        formik.errors.education &&
                        formik.errors.education[index] &&
                        formik.errors.education[index].cgpa &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].cgpa && (
                          <Typography variant="caption" color="red">
                            {formik.errors.education[index].cgpa}
                          </Typography>
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {/* <TextField
                      fullWidth
                      className={classes.textField}
                      // id={`item.cgpa`}
                      name={`education[${index}].passYear`}
                      variant="outlined"
                      sx={{ marginTop: "10px", width: "100%" }}
                      label="Date of Passing"
                      type="date"
                      inputProps={{
                        max: new Date().toISOString().split("T")[0],
                      }}
                      // onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      // value={formik.values.education[index].passYear || ""}
                      value={formik.values.education[index].passYear}
                      helperText={
                        formik.errors.education &&
                        formik.errors.education[index] &&
                        formik.errors.education[index].passYear &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].passYear && (
                          <Typography variant="caption" color="red">
                            {formik.errors.education[index]?.passYear}
                          </Typography>
                        )
                      }
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        className={classes.textField}
                        name={`education[${index}].passYear`}
                        label="Pass Year"
                        value={ formik.values.education[index].passYear ? dayjs(formik.values.education[index].passYear): null}
                        sx={{ marginTop: "10px", width: "100%" }}
                        onChange={(date) => {
                          formik.setFieldValue(
                            `education[${index}].passYear`,
                            date ? date.format("YYYY-MM-DD") : ""
                          );
                        }}
                        // renderInput={(params) => <TextField {...params} />}
                        disableFuture
                      />
                    </LocalizationProvider>
                    {formik.errors.education &&
                      formik.errors.education[index] &&
                      formik.errors.education[index].passYear &&
                      formik.touched.education &&
                      formik.touched.education[index] &&
                      formik.touched.education[index].passYear && (
                        <Typography variant="caption" color="red">
                          {formik.errors.education[index].passYear}
                        </Typography>
                      )}
                  </Grid>
                </Grid>
                <DeleteIcon
                  sx={
                    formik.values.education.length == 1
                      ? { display: "none" }
                      : { cursor: "pointer", "&:hover": { color: "orange" } }
                  }
                  onClick={() => deleteField(index)}
                />
              </Box>
            );
          })}

        <Box>
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
                sx={{ fontWeight: "bold", marginTop: "10px" }}
                component="div"
              >
                Experience
              </Typography>
              <Button
                variant="contained"
                onClick={addExperienceFields}
                // sx={{ backgroundColor: "orange", color: "white" }}
                sx={
                  formik.values.totalExperience == 0
                    ? { display: "none" }
                    : { backgroundColor: "orange", color: "white" }
                }
              >
                <AddIcon /> Add Experience
              </Button>
            </Stack>
            <hr />
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  className={classes.textField}
                  id="totalExperience"
                  name="totalExperience"
                  label="Total Experience"
                  value={formik.values.totalExperience}
                  // onChange={formik.handleChange}
                  onChange={(event, newValue) => {
                    formik.setFieldValue("totalExperience", event.target.value);
                  }}
                  onBlur={formik.handleBlur}
                  sx={{ marginTop: "20px" }}
                  helperText={
                    formik.errors.totalExperience &&
                    formik.touched.totalExperience && (
                      <Typography variant="caption" color="red">
                        {formik.errors.totalExperience}
                      </Typography>
                    )
                  }
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={formik.values.totalExperience == 0 ? { display: "none" } : {}}
          >
            {formik.values.experience &&
              formik.values.experience.length > 0 &&
              formik.values.experience.map((item, index) => (
                <Box key={index}>
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
                          // id="company"
                          type="text"
                          // name="company"
                          name={`experience[${index}].company`}
                          label="Company"
                          variant="outlined"
                          sx={{ marginTop: "20px", width: "100%" }}
                          // style={formik.values.totalExperience==0 ? {display:"none"} : {}}
                          onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          value={formik.values.experience[index].company}
                          helperText={
                            formik.errors.experience &&
                            formik.errors.experience[index] &&
                            formik.errors.experience[index].company &&
                            formik.touched.experience &&
                            formik.touched.experience[index] &&
                            formik.touched.experience[index].company && (
                              <Typography variant="caption" color="red">
                                {formik.errors.experience[index].company}
                              </Typography>
                            )
                          }
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Stack direction={"row"} spacing={2}>
                          <TextField
                            className={classes.textField}
                            // id="designation"
                            type="text"
                            // name="designation"
                            name={`experience[${index}].designation`}
                            label="Designation"
                            variant="outlined"
                            sx={{ marginTop: "20px", width: "100%" }}
                            onChange={formik.handleChange}
                            // style={formik.values.totalExperience==0 ? {display:"none"} : {}}

                            // onBlur={formik.handleBlur}
                            value={formik.values.experience[index].designation}
                            helperText={
                              formik.errors.experience &&
                              formik.errors.experience[index] &&
                              formik.errors.experience[index].designation &&
                              formik.touched.experience &&
                              formik.touched.experience[index] &&
                              formik.touched.experience[index].designation && (
                                <Typography variant="caption" color="red">
                                  {formik.errors.experience[index].designation}
                                </Typography>
                              )
                            }
                          />
                        </Stack>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          className={classes.textField}
                          // id="technology"
                          type="text"
                          // name="technology"
                          name={`experience[${index}].technology`}
                          // style={formik.values.totalExperience==0 ? {display:"none"} : {}}
                          label="Technology"
                          variant="outlined"
                          sx={{ marginTop: "20px", width: "100%" }}
                          onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          value={formik.values.experience[index].technology}
                          helperText={
                            formik.errors.experience &&
                            formik.errors.experience[index] &&
                            formik.errors.experience[index].technology &&
                            formik.touched.experience &&
                            formik.touched.experience[index] &&
                            formik.touched.experience[index].technology && (
                              <Typography variant="caption" color="red">
                                {formik.errors.experience[index].technology}
                              </Typography>
                            )
                          }
                        />
                      </Grid>
                    </Grid>
                    <DeleteIcon
                      sx={
                        formik.values.experience.length == 1
                          ? { display: "none" }
                          : {
                              cursor: "pointer",
                              "&:hover": { color: "orange" },
                            }
                      }
                      onClick={() => deleteExperienceField(index)}
                    />
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <Grid item xs={4}>
                      <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                          <FormControlLabel
                            value={
                              formik.values.experience[index].companyPresent
                            }
                            control={<Checkbox />}
                            label="Mark if the company is present "
                            name={`experience[${index}].companyPresent`}
                            sx={{ marginTop: "10px", width: "100%" }}
                            onChange={formik.handleChange}
                            // style={formik.values.totalExperience==0 ? {display:"none"} : {}}
                          />
                        </FormGroup>
                      </FormControl>
                      {formik.errors.experience &&
                        formik.errors.experience[index] &&
                        formik.errors.experience[index].companyPresent &&
                        formik.touched.experience &&
                        formik.touched.experience[index] &&
                        formik.touched.experience[index].companyPresent && (
                          <Typography variant="caption" color="red">
                            {formik.errors.experience[index].companyPresent}
                          </Typography>
                        )}
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        {/* <TextField
                          className={classes.textField}
                          // id="fromDate"
                          type="month"
                          // name="fromDate"
                          name={`experience[${index}].fromDate`}
                          label="From Date"
                          variant="outlined"
                          sx={{ marginTop: "10px", width: "100%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            max: new Date().toISOString().split("T")[0],
                          }}
                          onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          // style={formik.values.totalExperience==0 ? {display:"none"} : {}}
                          value={formik.values.experience[index].fromDate}
                          helperText={
                            formik.errors.experience &&
                            formik.errors.experience[index] &&
                            formik.errors.experience[index].fromDate &&
                            formik.touched.experience &&
                            formik.touched.experience[index] &&
                            formik.touched.experience[index].fromDate && (
                              <Typography variant="caption" color="red">
                                {formik.errors.experience[index].fromDate}
                              </Typography>
                            )
                          }
                        /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className={classes.textField}
                            name={`experience[${index}].fromDate`}
                            label="From Date"
                            variant="outlined"
                            sx={{ marginTop: "10px", width: "100%" }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            views={["year", "month"]} // Specify the desired views
                            inputFormat="YYYY-MM"
                            mask="____-__"
                            disableFuture
                            value={
                              formik.values.experience[index].fromDate
                                ? dayjs(
                                    formik.values.experience[index].fromDate
                                  )
                                : null
                            }
                            onChange={(date) => {
                              formik.setFieldValue(
                                `experience[${index}].fromDate`,
                                date ? date.format("YYYY-MM") : "" // Format as desired string format
                              );
                            }}
                          />
                        </LocalizationProvider>
                        {formik.errors.experience &&
                          formik.errors.experience[index] &&
                          formik.errors.experience[index].fromDate &&
                          formik.touched.experience &&
                          formik.touched.experience[index] &&
                          formik.touched.experience[index].fromDate && (
                            <Typography variant="caption" color="red">
                              {formik.errors.experience[index].fromDate}
                            </Typography>
                          )}
                      </Grid>
                      <Grid item xs={4}>
                        {/* <TextField
                          className={classes.textField}
                          // id="toDate"
                          type="date"
                          // name="toDate"
                          name={`experience[${index}].toDate`}
                          label="To Date"
                          variant="outlined"
                          style={
                            !formik.values.experience[index].companyPresent
                              ? {}
                              : { display: "none" }
                          }
                          sx={{ marginTop: "10px" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}

                          value={formik.values.experience[index].toDate}
                          helperText={
                            formik.errors.experience &&
                            formik.errors.experience[index] &&
                            formik.errors.experience[index].toDate &&
                            formik.touched.experience &&
                            formik.touched.experience[index] &&
                            formik.touched.experience[index].toDate && (
                              <Typography variant="caption" color="red">
                                {formik.errors.experience[index].toDate}
                              </Typography>
                            )
                          }
                        /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className={classes.textField}
                            name={`experience[${index}].toDate`}
                            label="To Date"
                            variant="outlined"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            // validate={validateToDate}
                            views={["year", "month"]} // Specify the desired views
                            inputFormat="YYYY-MM"
                            mask="____-__"
                            disableFuture
                            value={
                              formik.values.experience[index].toDate
                                ? dayjs(formik.values.experience[index].toDate)
                                : null
                            }
                            sx={
                              !formik.values.experience[index].companyPresent
                                ? { marginTop: "10px", width: "100%" }
                                : { display: "none" }
                            }
                            onChange={(date) => {
                              formik.setFieldValue(
                                `experience[${index}].toDate`,
                                date ? date.format("YYYY-MM") : "" // Format as desired string format
                              );
                            }}
                          />
                        </LocalizationProvider>
                        { formik.errors.experience &&
                          formik.errors.experience[index] &&
                          formik.errors.experience[index].toDate &&
                          formik.touched.experience &&
                          formik.touched.experience[index] &&
                          formik.touched.experience[index].toDate && (
                            <Typography variant="caption" color="red">
                              {formik.errors.experience[index].toDate}
                            </Typography>
                          )}
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                // id="reasonForJobChange"
                type="text"
                multiline
                rows={4}
                // name="reasonForJobChange"
                name="reasonForJobChange"
                label="Reason For Job Change"
                variant="outlined"
                sx={{ marginTop: "10px", width: "100%" }}
                onChange={formik.handleChange}
                style={
                  formik.values.totalExperience == 0 ? { display: "none" } : {}
                }
                value={formik.values.reasonForJobChange}
                helperText={
                  formik.errors.reasonForJobChange &&
                  formik.touched.reasonForJobChange && (
                    <Typography variant="caption" color="red">
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
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
          // sx={{ display: "flex", justifyContent: "end" }}
        >
          <Button
            variant="contained"
            sx={{
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
            // disabled={!formik.isValid || !formik.dirty}
            sx={{
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
