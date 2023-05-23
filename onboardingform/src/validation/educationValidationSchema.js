import * as Yup from "yup";

export const educationValidationSchema = Yup.object().shape({
  education: Yup.array().of(
    Yup.object().shape({
      educationType: Yup.string().required("Required"),
      instituteName: Yup.string().required("Required"),
      course: Yup.string().required("Required"),
      cgpa: Yup.string().required("Required"),
      passYear: Yup.string().required("Required"),
    })
  ),
  totalExperience: Yup.string().required("Required"),
  experience: Yup.array().of(
    Yup.object().shape({
      company: Yup.string(),
      designation: Yup.string(),
      technology: Yup.string(),
      fromDate: Yup.string(),
      toDate: Yup.string(),
      companyPresent: Yup.boolean(),
    })
    ),
    reasonForJobChange: Yup.string(),
});
