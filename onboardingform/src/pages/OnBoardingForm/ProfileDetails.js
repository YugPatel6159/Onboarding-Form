import {
  Box,
  FormControlLabel,
  Radio,
  Paper,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { ProfileValidationSchema } from "./ProfileValidationSchema";
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

function ProfileDetails({formDataChange,handleNext,profileDetailsData}) {
  const classes = useStyles();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profileDetails,setProfileDetails] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    bloodGroup: "",
    gender: "",
    maritialStatus: "",
    dob: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    branch: "",
    profilePhoto: null,
    altMobieNumber: "",
    linkedInLink: "",
    githubLink: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ProfileValidationSchema,
    onSubmit: (values) => {
      formDataChange(values);
      // setProfileDetails(values);
      if(values){
        handleNext();
      }
      console.log(values);
    },
  });

  const onChangeProfilePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
      formik.setFieldValue("profilePhoto", file);
    }
  };

  useEffect(() => {
    // console.log(profileDetails,"profileDetails");
    if(profileDetailsData){
      formik.setValues(profileDetailsData);
    }
    if(profileDetailsData.profilePhoto){
      setProfilePhoto(URL.createObjectURL(profileDetailsData.profilePhoto));
    }
  },[])

  const bloodGroup = ["A", "B", "AB", "O"];
  const maritialStatus = ["Single", "Married", "Divorced", "Widowed"];
  return (
    <Paper
      elevation={4}
      sx={{ marginTop: "40px", padding: "20px", height: "100%" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Stack>
            <IconButton component="label" htmlFor="file-upload" disabled>
              <img
                src={
                  profilePhoto ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt="Profile"
                style={{
                  width: "100px",
                  height: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </IconButton>
            <label htmlFor="profilePhoto">
              <CameraAltIcon
                sx={{
                  position: "absolute",
                  top: "295px",
                  left: "800px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  "&:hover": {
                    cursor: "pointer",
                    color: "grey",
                  },
                }}
              />
            </label>
            <TextField
              id="profilePhoto"
              label=""
              type="file"
              name="profilePhoto"
              onChange={onChangeProfilePhoto}
              onBlur={formik.handleBlur}
              sx={{ display: "none" }}
            />
            {formik.errors.profilePhoto && formik.touched.profilePhoto && (
              <Typography variant="caption" color="orange">
                {formik.errors.profilePhoto}
              </Typography>
            )}
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Personal Details
            </Typography>
          </Stack>
          <hr />
        </Box>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="firstName"
                type="text"
                name="firstName"
                label="First Name"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                helperText={
                  formik.errors.firstName &&
                  formik.touched.firstName && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.firstName}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="middleName"
                label="Middle Name"
                type="text"
                name="middleName"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.middleName}
                helperText={
                  formik.errors.middleName &&
                  formik.touched.middleName && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.middleName}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="lastName"
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                helperText={
                  formik.errors.lastName &&
                  formik.touched.lastName && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.lastName}
                    </Typography>
                  )
                }
                label="Last Name"
                variant="outlined"
                sx={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="phoneNumber"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="phoneNumber"
                value={formik.values.phoneNumber}
                helperText={
                  formik.errors.phoneNumber &&
                  formik.touched.phoneNumber && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.phoneNumber}
                    </Typography>
                  )
                }
                label="Contact Number"
                variant="outlined"
                sx={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="email"
                type="text"
                name="email"
                label="Personal Email"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                helperText={
                  formik.errors.email &&
                  formik.touched.email && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.email}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <RadioGroup aria-label="gender" value={formik.values.gender}>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <FormControlLabel
                    name="gender"
                    value="Male"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    onChange={(e) =>
                      formik.setFieldValue("gender", e.target.value)
                    }

                    label="Male"
                  />
                  <FormControlLabel
                    name="gender"
                    value="Female"
                    onChange={(e) =>
                      formik.setFieldValue("gender", e.target.value)
                    }
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    label="Female"
                  />
                </Stack>
              </RadioGroup>
              {formik.errors.gender && formik.touched.gender && (
                <Typography variant="caption" color="orange">
                  {formik.errors.gender}
                </Typography>
              )}
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                id="altMobieNumber"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="altMobieNumber"
                value={formik.values.altMobieNumber}
                helperText={
                  formik.errors.altMobieNumber &&
                  formik.touched.altMobieNumber && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.altMobieNumber}
                    </Typography>
                  )
                }
                label="Alt Contact Number"
                variant="outlined"
                sx={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={3}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ marginTop: "10px" }}
                  >
                    Maritial Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="maritialStatus"
                    value={formik.values.maritialStatus}
                    label="Maritial Status"
                    name="maritialStatus"
                    onChange={(event) =>
                      formik.setFieldValue("maritialStatus", event.target.value)
                    }
                    onBlur={formik.handleBlur}
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {maritialStatus.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {formik.errors.maritialStatus &&
                  formik.touched.maritialStatus && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.maritialStatus}
                    </Typography>
                  )}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <TextField
                className={classes.textField}
                name="dob"
                inputProps={{
                  max: new Date().toISOString().slice(0, 10),
                }}
                onBlur={formik.handleBlur}
                onChange={(event) =>
                  formik.setFieldValue("dob", event.target.value)
                }
                value={formik.values.dob}
                id="dob"
                type="date"
                variant="outlined"
                label="Date of Birth"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ width: "100%", marginTop: "10px" }}
                helperText={
                  formik.errors.dob &&
                  formik.touched.dob && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.dob}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={3}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="bloodGroup" sx={{ marginTop: "10px" }}>
                    Blood Group
                  </InputLabel>
                  <Select
                    labelId="bloodGroup"
                    id="bloodGroup"
                    value={formik.values.bloodGroup}
                    name="bloodGroup"
                    onBlur={formik.handleBlur}
                    label="bloodGroup"
                    onChange={(event) =>
                      formik.setFieldValue("bloodGroup", event.target.value)
                    }
                    sx={{ height: "40px", marginTop: "10px" }}
                  >
                    {bloodGroup.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {formik.errors.bloodGroup && formik.touched.bloodGroup && (
                  <Typography variant="caption" color="orange">
                    {formik.errors.bloodGroup}
                  </Typography>
                )}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="githubLink"
                label="Github Link"
                variant="outlined"
                name="githubLink"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.githubLink}
                helperText={
                  formik.errors.githubLink &&
                  formik.touched.githubLink && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.githubLink}
                    </Typography>
                  )
                }
                sx={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="linkedInLink"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="linkedInLink"
                value={formik.values.linkedInLink}
                helperText={
                  formik.errors.linkedInLink &&
                  formik.touched.linkedInLink && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.linkedInLink}
                    </Typography>
                  )
                }
                label="LinkedIn Link"
                variant="outlined"
                sx={{ marginTop: "10px" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Stack>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Bank Details
            </Typography>
          </Stack>
          <hr />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="bankName"
                label="Bank Name"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="bankName"
                value={formik.values.bankName}
                helperText={
                  formik.errors.bankName &&
                  formik.touched.bankName && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.bankName}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="accountNumber"
                label="Account Number"
                variant="outlined"
                sx={{ marginTop: "10px" }}
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="accountNumber"
                value={formik.values.accountNumber}
                helperText={
                  formik.errors.accountNumber &&
                  formik.touched.accountNumber && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.accountNumber}
                    </Typography>
                  )
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="ifscCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="ifscCode"
                value={formik.values.ifscCode}
                helperText={
                  formik.errors.ifscCode &&
                  formik.touched.ifscCode && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.ifscCode}
                    </Typography>
                  )
                }
                label="IFSC Code"
                variant="outlined"
                sx={{ marginTop: "10px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.textField}
                id="branch"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="branch"
                value={formik.values.branch}
                helperText={
                  formik.errors.branch &&
                  formik.touched.branch && (
                    <Typography variant="caption" color="orange">
                      {formik.errors.branch}
                    </Typography>
                  )
                }
                label="Branch"
                variant="outlined"
                sx={{ marginTop: "10px" }}
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

export default ProfileDetails;
