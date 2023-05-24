import * as Yup from "yup";

export const documentValidationSchema = Yup.object().shape({
  aadharNumber: Yup.number()
    .required("Required")
    .typeError("Invalid aadhar number"),
  panNumber: Yup.string().required("Required"),
  aadharCardImage: Yup.array()
    .of(Yup.string())
    .min(1, "Atleast one image is required")
    .max(2, "Maximum 2 image are allowed")
    .required("please upload atleast one image"),
  panCardImages: Yup.array()
    .of(Yup.string())
    .min(1, "Atleast one image is required")
    .max(2, "Maximum 2 image are allowed")
    .required("please upload atleast one image"),
  streetLine1: Yup.string().required("streetLine1 is required"),
  streetLine2: Yup.string().required("streetLine2 is required"),
  country: Yup.string().required("country is required"),
  state: Yup.string().required("state is required"),
  city: Yup.string().required("city is required"),
  area: Yup.string().required("area is required"),
  postalCode: Yup.string().required("postalCode is required"),
  sameAddress: Yup.boolean().required("sameAddress is required"),
  perStreetLine1: Yup.string().required("StreetLine1 is required"),
  perStreetLine2: Yup.string().required("StreetLine2 is required"),
  perCountry: Yup.string().required("Country is required"),
  perState: Yup.string().required("State is required"),
  perCity: Yup.string().required("City is required"),
  perArea: Yup.string().required("Area is required"),
  perPostalCode: Yup.string().required("PostalCode is required"),
  educationCertificate: Yup.array().of(
    Yup.object().shape({
      certificateType: Yup.string().required("Required"),
      certificate: Yup.array()
        .of(Yup.string())
        .min(1, "Atleast one image is required")
        .max(2, "Maximum 2 image are allowed")
        .required("please upload atleast one image"),
    })
  ),
  latestExperienceLetter: Yup.array()
    .of(Yup.string())
    .min(1, " image is required")
    .required("please upload atleast one image"),
  latestRelievingLetter: Yup.array()
    .of(Yup.string())
    .min(1, "image is required")
    .required("please upload atleast one image"),
  salarySlip: Yup.array()
    .of(Yup.string())
    .min(1, " image is required")
    .required("please upload atleast one image"),
  uploadForm16: Yup.array()
    .of(Yup.string())
    .min(1, " image is required")
    .required("please upload atleast one image"),
  passportPhoto: Yup.array()
    .of(Yup.string())
    .min(1, " image is required")
    .required("please upload atleast one image"),
});
