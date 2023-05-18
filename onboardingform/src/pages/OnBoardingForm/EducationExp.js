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
import ClearIcon from "@mui/icons-material/Clear";
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

function EducationExp({ formDataChange, handleNext, handleBack, educationData, educationDataChange,setEducationData }) {
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
      experience: [
        {
          totalExperience: "",
          company: "",
          designation: "",
          technology: "",
          fromDate: "",
          toDate: "",
          reasonForJobChange: "",
          companyPresent: false,
        },
      ],
    },
    validationSchema: educationValidationSchema,
    onSubmit: (values) => {
      if (values) {
        console.log(values,'values');
        formDataChange(values);
        setEducationData(values)
        educationDataChange(values);
        
        handleNext();
      }
    },
  });
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
    console.log(educationData)
    if(educationData !=null) {
      formik.setValues(educationData)
    }
  },[])

 
  
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
                          <Typography variant="caption" color="orange">
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
                          <Typography variant="caption" color="orange">
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
                          <Typography variant="caption" color="orange">
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
                          <Typography variant="caption" color="orange">
                            {formik.errors.education[index].cgpa}
                          </Typography>
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      className={classes.textField}
                      // id={`item.cgpa`}
                      name={`education[${index}].passYear`}
                      variant="outlined"
                      sx={{ marginTop: "10px", width: "100%" }}
                      label="Date of Passing"
                      type="date"
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
                        formik.errors.education[index].course &&
                        formik.touched.education &&
                        formik.touched.education[index] &&
                        formik.touched.education[index].course && (
                          <Typography variant="caption" color="orange">
                            {formik.errors.education[index]?.passYear}
                          </Typography>
                        )
                      }
                    />
                  </Grid>
                </Grid>
                <ClearIcon
                  sx={{ cursor: "pointer", "&:hover": { color: "orange" } }}
                  onClick={() => deleteField(index)}
                />
              </Box>
            );
          })}
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
              sx={{ backgroundColor: "orange", color: "white" }}
            >
              <AddIcon /> Add Experience
            </Button>
          </Stack>
          <hr />
        </Box>
        { formik.values.experience && formik.values.experience.length > 0 && formik.values.experience.map((item, index) => (
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
                    // id="totalExperience"
                    type="text"
                    // name="totalExperience"
                    name={`experience[${index}].totalExperience`}
                    label="Total Experience"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "100%" }}
                    onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.experience[index].totalExperience}
                    helperText={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      formik.errors.experience[index].totalExperience &&
                      formik.touched.experience &&
                      formik.touched.experience[index] &&
                      formik.touched.experience[index].totalExperience && (
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].totalExperience}
                        </Typography>
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    className={classes.textField}
                    // id="company"
                    type="text"
                    // name="company"
                    name={`experience[${index}].company`}
                    label="Company"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "100%" }}
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
                        <Typography variant="caption" color="orange">
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
                    sx={{ marginTop: "10px", width: "100%" }}
                    onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.experience[index].designation}
                    helperText={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      formik.errors.experience[index].designation &&
                      formik.touched.experience &&
                      formik.touched.experience[index] &&
                      formik.touched.experience[index].designation && (
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].designation}
                        </Typography>
                      )
                    }
                    />
                  <ClearIcon
              sx={{ cursor: "pointer", "&:hover": { color: "orange" } }}
              onClick={() => deleteExperienceField(index)}
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
                    label="Technology"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "100%" }}
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
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].technology}
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
                      value={formik.values.experience[index].companyPresent}
                      control={<Checkbox />}
                      label="Mark if the company is present "
                      name={`experience[${index}].companyPresent`}
                      sx={{ marginTop: "10px", width: "100%" }}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>
                </FormControl>
                {formik.errors.experience &&
                  formik.errors.experience[index] &&
                  formik.errors.experience[index].companyPresent &&
                  formik.touched.experience &&
                  formik.touched.experience[index] &&
                  formik.touched.experience[index].companyPresent && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.experience[index].companyPresent}
                    </Typography>
                  )}
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    className={classes.textField}
                    // id="fromDate"
                    type="date"
                    // name="fromDate"
                    name={`experience[${index}].fromDate`}
                    label="From Date"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "100%" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    value={formik.values.experience[index].fromDate}
                    helperText={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      formik.errors.experience[index].fromDate &&
                      formik.touched.experience &&
                      formik.touched.experience[index] &&
                      formik.touched.experience[index].fromDate && (
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].fromDate}
                        </Typography>
                      )
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
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
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].toDate}
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
                    // id="reasonForJobChange"
                    type="text"
                    // name="reasonForJobChange"
                    name={`experience[${index}].reasonForJobChange`}
                    label="Reason For Job Change"
                    variant="outlined"
                    sx={{ marginTop: "10px", width: "100%" }}
                    onChange={formik.handleChange}
                   
                    value={formik.values.experience[index].reasonForJobChange}
                    helperText={
                      formik.errors.experience &&
                      formik.errors.experience[index] &&
                      formik.errors.experience[index].reasonForJobChange &&
                      formik.touched.experience &&
                      formik.touched.experience[index] &&
                      formik.touched.experience[index].reasonForJobChange && (
                        <Typography variant="caption" color="orange">
                          {formik.errors.experience[index].reasonForJobChange}
                        </Typography>
                      )
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
            
        ))}

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
