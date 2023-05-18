import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const ReviewInformation = ({
  profileDetailsData,
  handleBack,
  educationData,
  documentData,
  handleNext,
  handleEdit,
}) => {
  return (
    <Paper
      elevation={4}
      sx={{ marginTop: "40px", padding: "20px", height: "100%" }}
    >
      <form>
        <Box>
          <Stack
            direction={"row"}
            spacing={2}
            display={"flex"}
            justifyContent={"center"}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Information Preview
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack
            display={"flex"}
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Personal Details
            </Typography>
            <EditIcon
              onClick={() => {
                handleEdit(0);
              }}
            />
          </Stack>
          <hr />
        </Box>
        <Box>
          <Grid container rowSpacing={1}>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                First Name:{profileDetailsData.firstName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Middle Name:{profileDetailsData.middleName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Last Name:{profileDetailsData.lastName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                email:{profileDetailsData.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Phone Number:{profileDetailsData.phoneNumber}
              </Typography>
            </Grid>
          <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Blood Group:{profileDetailsData.bloodGroup}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Gender:{profileDetailsData.gender}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Maritial Status:{profileDetailsData.maritialStatus}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Bank Name:{profileDetailsData.bankName}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Account Number:{profileDetailsData.accountNumber}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                IFSC Code:{profileDetailsData.ifscCode}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Branch:{profileDetailsData.branch}
              </Typography>
            </Grid>
            {/* <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                ProfilePhoto:{profileDetailsData.profilePhoto}
              </Typography>
            </Grid> */}
            <Grid item xs={4} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Alternate mobile number:{profileDetailsData.altMobileNumber}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                Github Link:{profileDetailsData.githubLink}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                sx={{ fontWeight: "bold" }}
                component="div"
              >
                LinkedIn Link:{profileDetailsData.LinkedInLink}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Stack
            display={"flex"}
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Education And Experience Details
            </Typography>
            <EditIcon
              onClick={() => {
                handleEdit(1);
              }}
            />
          </Stack>
          <hr />
        </Box>
        <Box>
          <Stack
            display={"flex"}
            direction={"row"}
            spacing={2}
            justifyContent={"space-between"}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              component="div"
            >
              Documentation Details
            </Typography>
            <EditIcon
              onClick={() => {
                handleEdit(2);
              }}
            />
          </Stack>
          <hr />
        </Box>
      </form>
    </Paper>
  );
};

export default ReviewInformation;
