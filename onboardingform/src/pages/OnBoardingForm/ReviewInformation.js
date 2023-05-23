import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const ReviewInformation = ({
  profileData,
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
              // sx={{ fontWeight: "bold" }}
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
              // sx={{ fontWeight: "bold" }}
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
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                First Name:{profileData?.firstName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Middle Name:{profileData?.middleName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Last Name:{profileData?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                email:{profileData?.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Phone Number:{profileData?.phoneNumber}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Blood Group:{profileData?.bloodGroup}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Gender:{profileData?.gender}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Maritial Status:{profileData?.maritialStatus}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Bank Name:{profileData?.bankName}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Account Number:{profileData?.accountNumber}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                IFSC Code:{profileData?.ifscCode}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Branch:{profileData?.branch}
              </Typography>
            </Grid>
            {/* <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                ProfilePhoto:{profileData.profilePhoto}
              </Typography>
            </Grid> */}
            <Grid item xs={4} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Alternate mobile number:{profileData?.altMobileNumber}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Github Link:{profileData?.githubLink}
              </Typography>
            </Grid>
            <Grid item xs={2} marginTop={1}>
              <Typography
                variant="Body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                LinkedIn Link:{profileData?.linkedInLink}
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
              // sx={{ fontWeight: "bold" }}
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
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Education
          </Typography>
          {educationData &&
            educationData?.education.map((item, index) => {
              return (
                <Grid container rowSpacing={1} key={index}>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Education Type:{item.educationType}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Institute Name:{item.instituteName}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Coures:{item.course}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Cgpa:{item.cgpa}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Passing Year:{item.passYear}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Experience
          </Typography>
          {educationData &&
            educationData?.experience.map((item, index) => {
              return (
                <Grid container rowSpacing={1} key={index}>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Company:{item.company}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Designation:{item.designation}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      Technology:{item.technology}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      From Date:{item.fromDate}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      variant="body1"
                      // sx={{ fontWeight: "bold" }}
                      component="div"
                    >
                      To Date:{item.toDate}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
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
              // sx={{ fontWeight: "bold" }}
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
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Documents
          </Typography>
          <Grid container rowSpacing={1}>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Aadhar Number:{documentData?.aadharNumber}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                PAN Number:{documentData?.panNumber}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              {documentData?.aadharCardImage.map((item, index) => {
                return (
                  <Typography variant="body1" key={index}>
                    Aadhar images :{item.name}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={4}>
              {documentData?.panCardImages.map((item, index) => {
                return (
                  <Typography variant="body1" key={index}>
                    PAN images:{item.name}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Street Line 1:{documentData?.streetLine1}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Street Line 2:{documentData?.streetLine2}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Country:{documentData?.country}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                State:{documentData?.state}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                City:{documentData?.city}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Area:{documentData?.area}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="body1"
                // sx={{ fontWeight: "bold" }}
                component="div"
              >
                Postal Code:{documentData?.postalCode}
              </Typography>
            </Grid>
          </Grid>
          {documentData?.sameAddress ? (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Same Address
            </Typography>
          ) : (
            <Grid container rowSpacing={1}>
              <Grid item xs={2}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Permanent Address{" "}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Street Line 1:{documentData?.perStreetLine1}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Street Line 2:{documentData?.perStreetLine2}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Country:{documentData?.perCountry}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  State:{documentData?.perState}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  City:{documentData?.perCity}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Area:{documentData?.perArea}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  // sx={{ fontWeight: "bold" }}
                  component="div"
                >
                  Postal Code:{documentData?.perPostalCode}
                </Typography>
              </Grid>
            </Grid>
          )}
          <Grid container rowSpacing={1}>
            <Grid item xs={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Education Certificate
              </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>

          <Typography
            variant="body1"
            // sx={{ fontWeight: "bold" }}
            component="div"
          >
            {documentData?.educationCertificate?.map((item, index) => {
              return (
                <Grid container rowSpacing={1}>
                  <Grid item xs={2}>
                    <Typography variant="body1" key={index}>
                      Document Name: {item.certificateType}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    {item?.certificate?.map((item, index) => {
                      return (
                        <Typography variant="body1" key={index}>
                          Document Name: {item?.name}
                        </Typography>
                      );
                    })}
                  </Grid>
                </Grid>
              );
            })}
          </Typography>
          <Grid container rowSpacing={1}>
            <Grid item xs={4}>
              <Typography variant="body1">
                Latest Experience Letter: {documentData?.latestExperienceLetter[0]?.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">
                Latest Relieving Letter: {documentData?.latestRelievingLetter[0]?.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">
                Salary Slip: {documentData?.salarySlip[0]?.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">
                Upload Form 16 : {documentData?.uploadForm16[0]?.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1">
                Passport Photo : {documentData?.passportPhoto[0]?.name}
              </Typography>
            </Grid>
            </Grid> 
        </Box>
      </form>
    </Paper>
  );
};

export default ReviewInformation;
