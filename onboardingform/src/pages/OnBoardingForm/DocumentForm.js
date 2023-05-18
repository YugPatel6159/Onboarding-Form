import {
  Box,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";

import Chips from "./Chips";
import { documentValidationSchema } from "../../validation/documentValidationSchema";
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

const DocumentForm = ({
  handleBack,
  handleNext,
  setDocumentData,
  documentData,
}) => {
  const classes = useStyles();
  const countryAddress = {
    country: {
      name: "Example Country",
      states: [
        {
          name: "State A",
          cities: [
            {
              name: "City A",
              areas: [
                {
                  name: "Area 1",
                  postalCodes: ["12345", "67890"],
                },
                {
                  name: "Area 2",
                  postalCodes: ["11111", "22222"],
                },
              ],
            },
            {
              name: "City B",
              areas: [
                {
                  name: "Area 3",
                  postalCodes: ["33333", "44444"],
                },
                {
                  name: "Area 4",
                  postalCodes: ["55555", "66666"],
                },
              ],
            },
          ],
        },
        {
          name: "State B",
          cities: [
            {
              name: "City C",
              areas: [
                {
                  name: "Area 5",
                  postalCodes: ["77777", "88888"],
                },
                {
                  name: "Area 6",
                  postalCodes: ["99999", "00000"],
                },
              ],
            },
            {
              name: "City D",
              areas: [
                {
                  name: "Area 7",
                  postalCodes: ["11111", "22222"],
                },
                {
                  name: "Area 8",
                  postalCodes: ["33333", "44444"],
                },
              ],
            },
          ],
        },
      ],
    },
  };
  const educationArray = ["HSC", "SSC", "B.Sc", "BE", "ME", "M.Sc", "Ph.D"];
  const formik = useFormik({
    initialValues: {
      aadharNumber: "",
      panNumber: "",
      aadharCardImage: [],
      panCardImages: [],
      streetLine1: "",
      streetLine2: "",
      country: "",
      state: "",
      city: "",
      area: "",
      postalCode: "",
      sameAddress: false,
      perStreetLine1: "",
      perStreetLine2: "",
      perCountry: "",
      perState: "",
      perCity: "",
      perArea: "",
      perPostalCode: "",
      educationCertificate: [
        {
          certificateType: "",
          certificate: [],
        },
      ],
      latestExperienceLetter: [],
      latestRelievingLetter: [],
      salarySlip: [],
      uploadForm16: [],
      passportPhoto: [],
    },
    validationSchema: documentValidationSchema,
    onSubmit: (values) => {
      setDocumentData(values);
      handleNext();
    },
  });
  useEffect(() => {
    if (formik.values.sameAddress) {
      formik.setFieldValue("perStreetLine1", formik.values.streetLine1);
      formik.setFieldValue("perStreetLine2", formik.values.streetLine2);
      formik.setFieldValue("perCountry", formik.values.country);
      formik.setFieldValue("perState", formik.values.state);
      formik.setFieldValue("perCity", formik.values.city);
      formik.setFieldValue("perArea", formik.values.area);
      formik.setFieldValue("perPostalCode", formik.values.postalCode);
    } else {
      formik.setFieldValue("perStreetLine1", "");
      formik.setFieldValue("perStreetLine2", "");
      formik.setFieldValue("perCountry", "");
      formik.setFieldValue("perState", "");
      formik.setFieldValue("perCity", "");
      formik.setFieldValue("perArea", "");
      formik.setFieldValue("perPostalCode", "");
    }
  }, [formik.values.sameAddress]);

  useEffect(() => {
    if (documentData) {
      formik.setValues(documentData);
    }
  }, []);
  const setAadharFiles = (file) => {
    console.log(file, "files");
    if (formik.values.aadharCardImage.length > 0) {
      formik.setFieldValue("aadharCardImage", [
        ...formik.values.aadharCardImage,
        ...file,
      ]);
    } else {
      formik.setFieldValue("aadharCardImage", [...file]);
    }
  };
  console.log(formik.values);
  const handleFileDelete = (index) => {
    const newFiles = formik.values.aadharCardImage.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("aadharCardImage", [...newFiles]);
  };
  //   console.log(files, "files");

  const setPanCardFile = (file) => {
    if (formik.values.panCardImages.length > 0) {
      formik.setFieldValue("panCardImages", [
        ...formik.values.panCardImages,
        ...file,
      ]);
    } else {
      formik.setFieldValue("panCardImages", [...file]);
    }
  };

  const setEducationCertificate = (file, index) => {
    if (formik.values.educationCertificate.length > 0) {
      formik.setFieldValue(`educationCertificate[${index}].certificate`, [
        ...formik.values.educationCertificate[index].certificate,
        ...file,
      ]);
    } else {
      formik.setFieldValue(`educationCertificate[${index}].certificate`, [
        ...file,
      ]);
    }
  };

  const handleEducationCertificateDelete = (certiIndex, index) => {
    const newFile = formik.values.educationCertificate[
      index
    ].certificate.filter((_, id) => id !== certiIndex);
    formik.setFieldValue(`educationCertificate[${index}].certificate`, [
      ...newFile,
    ]);
  };

  const handlePanCardDelete = (index) => {
    const newFiles = formik.values.panCardImages.filter((_, i) => i !== index);
    formik.setFieldValue("panCardImages", [...newFiles]);
  };
  const addEducationCertificate = () => {
    const educationCertificate = {
      certificateType: "",
      certificate: [],
    };

    formik.setValues((prevState) => ({
      ...prevState,
      educationCertificate: [
        ...prevState.educationCertificate,
        educationCertificate,
      ],
    }));
  };

  const setExperienceLetter = (file) => {
    formik.setFieldValue("latestExperienceLetter", [...file]);
  };

  const deleteExperienceLetter = (index) => {
    formik.setFieldValue("latestExperienceLetter", []);
  };

  const setRelievingLetter = (file) => {
    formik.setFieldValue("latestRelievingLetter", [...file]);
  };

  const deleteRelievingLetter = (index) => {
    formik.setFieldValue("latestRelievingLetter", []);
  };

  const setSalarySlip = (file) => {
    formik.setFieldValue("salarySlip", [...file]);
  };

  const deleteSalarySlip = (index) => {
    formik.setFieldValue("salarySlip", []);
  };

  const setUploadForm16 = (file) => {
    formik.setFieldValue("uploadForm16", [...file]);
  };

  const deleteUploadForm16 = (index) => {
    formik.setFieldValue("uploadForm16", []);
  };

  const deletePassportPhoto = (index) => {
    formik.setFieldValue('passportPhoto',[])
  }
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
              Documents
            </Typography>
          </Stack>
          <hr />
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="aadharNumber"
                label="Aadhar Number"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.aadharNumber}
                helperText={
                  formik.errors.aadharNumber &&
                  formik.touched.aadharNumber && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.aadharNumber}
                    </Typography>
                  )
                }
              />
              <Chips
                files={formik.values.aadharCardImage}
                handleFileDelete={handleFileDelete}
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="panNumber"
                label="Pan Number"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.panNumber}
                helperText={
                  formik.errors.panNumber &&
                  formik.touched.panNumber && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.panNumber}
                    </Typography>
                  )
                }
              />
              <Chips
                files={formik.values.panCardImages}
                handleFileDelete={handlePanCardDelete}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: true,
                }}
                id="aadhar"
                type="file"
                name="aadhar"
                style={{ display: "none" }}
                onChange={(e) => setAadharFiles(e.target.files)}
              />
              <label htmlFor="aadhar">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload Aadhar
                </Button>
              </label>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: true,
                }}
                id="pan"
                type="file"
                name="pan"
                style={{ display: "none" }}
                onChange={(e) => setPanCardFile(e.target.files)}
              />
              <label htmlFor="pan">
                <Button
                  variant="contained"
                  component="span"
                  sx={{ backgroundColor: "orange", color: "white" }}
                >
                  Upload Pan
                </Button>
              </label>
            </Grid>
          </Grid>
          <Box>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={2}
              marginTop={"20px"}
            >
              <Typography variant="h6" fontWeight={"bold"} component="div">
                Address
              </Typography>
            </Stack>
            <hr />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="streetLine1"
                label="Street Line 1"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetLine1}
                helperText={
                  formik.errors.streetLine1 &&
                  formik.touched.streetLine1 && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.streetLine1}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                type="text"
                name="streetLine2"
                label="Street Line 2"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.streetLine2}
                helperText={
                  formik.errors.streetLine2 &&
                  formik.touched.streetLine2 && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.streetLine2}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="country" sx={{ marginTop: "10px" }}>
                    Country
                  </InputLabel>
                  <Select
                    labelId="country"
                    name="country"
                    // onBlur={formik.handleBlur}
                    label="Country"
                    value={formik.values.country}
                    onChange={(event) =>
                      formik.setFieldValue("country", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                </FormControl>
                {formik.errors.country && formik.touched.education && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.country}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="state" sx={{ marginTop: "10px" }}>
                    State
                  </InputLabel>
                  <Select
                    labelId="state"
                    name="state"
                    // onBlur={formik.handleBlur}
                    label="State"
                    value={formik.values.state}
                    onChange={(event) =>
                      formik.setFieldValue("state", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                {formik.errors.state && formik.touched.state && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.state}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="city" sx={{ marginTop: "10px" }}>
                    City
                  </InputLabel>
                  <Select
                    labelId="city"
                    name="city"
                    // onBlur={formik.handleBlur}
                    label="City"
                    value={formik.values.city}
                    onChange={(event) =>
                      formik.setFieldValue("city", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.city && formik.touched.city && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.city}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="area" sx={{ marginTop: "10px" }}>
                    Area
                  </InputLabel>
                  <Select
                    labelId="area"
                    name="area"
                    // onBlur={formik.handleBlur}
                    label="Area"
                    value={formik.values.area}
                    onChange={(event) =>
                      formik.setFieldValue("area", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.area && formik.touched.area && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.area}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="postalCode" sx={{ marginTop: "10px" }}>
                    Postal Code
                  </InputLabel>
                  <Select
                    labelId="postalCode"
                    name="postalCode"
                    // onBlur={formik.handleBlur}
                    label="postalCode"
                    value={formik.values.postalCode}
                    onChange={(event) =>
                      formik.setFieldValue("postalCode", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.find((area) => area.name === formik.values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.postalCode && formik.touched.postalCode && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.postalCode}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
          <Box>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={2}
              marginTop={"20px"}
            >
              <Typography variant="h6" fontWeight={"bold"} component="div">
                Permanent Address
              </Typography>
              <Grid item xs={4}>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value={formik.values.sameAddress}
                      control={<Checkbox />}
                      label="same as current"
                      name="sameAddress"
                      sx={{ marginTop: "10px", width: "100%" }}
                      onChange={formik.handleChange}
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Stack>
            <hr />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="perStreetLine1"
                label="Street Line 1"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.perStreetLine1}
                helperText={
                  formik.errors.perStreetLine1 &&
                  formik.touched.perStreetLine1 && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.perStreetLine1}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                className={classes.textField}
                type="text"
                name="perStreetLine2"
                label="Street Line 2"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.perStreetLine2}
                helperText={
                  formik.errors.perStreetLine2 &&
                  formik.touched.perStreetLine2 && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.perStreetLine2}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="perCountry" sx={{ marginTop: "10px" }}>
                    Country
                  </InputLabel>
                  <Select
                    labelId="perCountry"
                    name="perCountry"
                    // onBlur={formik.handleBlur}
                    label="perCountry"
                    value={formik.values.perCountry}
                    onChange={(event) =>
                      formik.setFieldValue("perCountry", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                </FormControl>
                {formik.errors.perCountry && formik.touched.perCountry && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.perCountry}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="perState" sx={{ marginTop: "10px" }}>
                    State
                  </InputLabel>
                  <Select
                    labelId="perState"
                    name="perState"
                    // onBlur={formik.handleBlur}
                    label="State"
                    value={formik.values.perState}
                    onChange={(event) =>
                      formik.setFieldValue("perState", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                {formik.errors.perState && formik.touched.perState && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.perState}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="perCity" sx={{ marginTop: "10px" }}>
                    City
                  </InputLabel>
                  <Select
                    labelId="perCity"
                    name="perCity"
                    // onBlur={formik.handleBlur}
                    label="City"
                    value={formik.values.perCity}
                    onChange={(event) =>
                      formik.setFieldValue("perCity", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perCity && formik.touched.perCity && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.perCity}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="perArea" sx={{ marginTop: "10px" }}>
                    Area
                  </InputLabel>
                  <Select
                    labelId="perArea"
                    name="perArea"
                    // onBlur={formik.handleBlur}
                    label="Area"
                    value={formik.values.perArea}
                    onChange={(event) =>
                      formik.setFieldValue("perArea", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perArea && formik.touched.perArea && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.perArea}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="perPostalCode" sx={{ marginTop: "10px" }}>
                    Postal Code
                  </InputLabel>
                  <Select
                    labelId="perPostalCode"
                    name="perPostalCode"
                    // onBlur={formik.handleBlur}
                    label="perPostalCode"
                    value={formik.values.perPostalCode}
                    onChange={(event) =>
                      formik.setFieldValue("perPostalCode", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === formik.values.state
                      )
                      ?.cities.find((city) => city.name === formik.values.city)
                      ?.areas.find((area) => area.name === formik.values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {formik.errors.perPostalCode && formik.touched.perPostalCode && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.perPostalCode}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
            marginTop={"20px"}
          >
            <Typography variant="h6" fontWeight={"bold"} component="div">
              Education Certificates
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "orange", color: "white" }}
              onClick={addEducationCertificate}
            >
              Add Education Certificate
            </Button>
          </Stack>
          <hr />
        </Box>
        {formik.values.educationCertificate &&
          formik.values.educationCertificate.length > 0 &&
          formik.values.educationCertificate.map((certi, index) => (
            <Box sx={{ marginTop: "20px" }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel
                        id="educationCertificate"
                        sx={{ marginTop: "10px" }}
                      >
                        Education Certificate
                      </InputLabel>
                      <Select
                        labelId="educationCertificate"
                        name={`educationCertificate[${index}].certificateType`}
                        // onBlur={formik.handleBlur}
                        label="Education Certificate"
                        value={
                          formik.values.educationCertificate[index]
                            .certificateType
                        }
                        onChange={(event) =>
                          formik.setFieldValue(
                            `educationCertificate[${index}].certificateType`,
                            event.target.value
                          )
                        }
                        sx={{ height: "40px", marginTop: "10px" }}
                      >
                        {educationArray.map((certificateFile, index) => (
                          <MenuItem key={index} value={certificateFile}>
                            {certificateFile}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    {formik.errors.educationCertificate &&
                        formik.errors.educationCertificate[index] &&
                        formik.errors.educationCertificate[index].certificateType &&
                        formik.touched.educationCertificate &&
                        formik.touched.educationCertificate[index] &&
                        formik.touched.educationCertificate[index].certificateType && (
                          <Typography variant="caption" color="orange">
                            {formik.errors.educationCertificate[index].certificateType}
                          </Typography>
                        )}
                  </Box>
                </Grid>
                {formik.values.educationCertificate[index].certificate.map(
                  (res, certiIndex) => (
                    <Stack direction="row" spacing={1} key={index}>
                      <Chip
                        key={index}
                        label={res.name}
                        variant="outlined"
                        onDelete={() =>
                          handleEducationCertificateDelete(certiIndex, index)
                        }
                        sx={{ marginTop: "10px", backgroundColor: "orange" }}
                      />
                    </Stack>
                  )
                )}
                {/* <Chips/> */}
                <Grid item xs={6}>
                  <Grid item xs={5}>
                    <TextField
                      accept="image/*"
                      inputProps={{
                        multiple: true,
                      }}
                      id={
                        `formik.values.educationCertificate[${index}].certificateType` +
                        { index }
                      }
                      type="file"
                      name={
                        `formik.values.educationCertificate[${index}].certificateType` +
                        { index }
                      }
                      style={{ display: "none" }}
                      onChange={(e) =>
                        setEducationCertificate(e.target.files, index)
                      }
                      helperText={
                        formik.errors.educationCertificate &&
                        formik.errors.educationCertificate[index] &&
                         formik.errors.educationCertificate[index].certificateType
                        && formik.touched.educationCertificate &&
                        formik.touched.educationCertificate[index] &&
                        formik.touched.education[index].certificateType
                        && <Typography variant="caption" color={"orange"}>
                          {formik.errors.educationCertificate[index].certificateType}
                        </Typography>
                      }
                    />
                    <label
                      htmlFor={
                        `formik.values.educationCertificate[${index}].certificateType` +
                        { index }
                      }
                    >
                      <Button
                        variant="contained"
                        component="span"
                        sx={{ backgroundColor: "orange", color: "white" }}
                      >
                        Upload 
                      </Button>
                    </label>
                  </Grid>

                </Grid>
              </Grid>
            </Box>
          ))}
        <Grid container spacing={2} marginTop={"20px"}>
        <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Passport Photo
              </Typography>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: false,
                }}
                id="passportPhoto"
                type="file"
                name="passportPhoto"
                style={{ display: "none" }}
                onChange={(e) => formik.setFieldValue('passportPhoto', [...e.target.files])}
              />
              <Chips
                files={formik.values.passportPhoto}
                handleFileDelete={deletePassportPhoto}
              />
              <label htmlFor="passportPhoto">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
  
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Latest Experience Letter
              </Typography>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: false,
                }}
                id="latestExperienceLetter"
                type="file"
                name="latestExperienceLetter"
                style={{ display: "none" }}
                onChange={(e) => setExperienceLetter(e.target.files)}
              />
              <Chips
                files={formik.values.latestExperienceLetter}
                handleFileDelete={deleteExperienceLetter}
              />
              <label htmlFor="latestExperienceLetter">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Latest Relieving Letter
              </Typography>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: false,
                }}
                id="latestRelievingLetter"
                type="file"
                name="latestRelievingLetter"
                style={{ display: "none" }}
                onChange={(e) => setRelievingLetter(e.target.files)}
              />
              <Chips
                files={formik.values.latestRelievingLetter}
                handleFileDelete={deleteRelievingLetter}
              />
              <label htmlFor="latestRelievingLetter">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Salary Slip
              </Typography>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: false,
                }}
                id="salarySlip"
                type="file"
                name="salarySlip"
                style={{ display: "none" }}
                onChange={(e) => setSalarySlip(e.target.files)}
              />
              <Chips
                files={formik.values.salarySlip}
                handleFileDelete={deleteSalarySlip}
              />
              <label htmlFor="salarySlip">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h6" fontWeight={"bold"}>
                Upload Form 16 of Previous Employer
              </Typography>
              <TextField
                accept="image/*"
                inputProps={{
                  multiple: false,
                }}
                id="uploadForm16"
                type="file"
                name="uploadForm16"
                style={{ display: "none" }}
                onChange={(e) => setUploadForm16(e.target.files)}
              />
              <Chips
                files={formik.values.uploadForm16}
                handleFileDelete={deleteUploadForm16}
              />
              <label htmlFor="uploadForm16">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "orange", color: "white" }}
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
          </Grid>
        </Grid>
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
            disabled={!formik.isValid || !formik.dirty}
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
};

export default DocumentForm;
