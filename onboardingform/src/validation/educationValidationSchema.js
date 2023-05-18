import * as Yup from 'yup'

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
    experience: Yup.array().of(
      Yup.object().shape({
        totalExperience: Yup.string().required("Required"),
        company: Yup.string().required("Required"),
        designation: Yup.string().required("Required"),
        technology: Yup.string().required("Required"),
        fromDate: Yup.string().required("Required"),
        toDate: Yup.string(),
        reasonForJobChange: Yup.string().required("Required"),
        companyPresent: Yup.boolean().required("Required"),
      })
    ),
  });