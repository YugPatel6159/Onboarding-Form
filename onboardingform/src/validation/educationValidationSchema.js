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
  totalExperience: Yup.number().typeError("experience must be a number").required("Required"),
  experience: Yup.array().of(
    Yup.object().shape({
      company: Yup.string().required("Required"),
      designation: Yup.string().required("Required"),
      technology: Yup.string().required("Required"),
      fromDate: Yup.date().required("Required"),
      toDate: Yup.date().when("companyPresent", {
        is: false,
        then: ()=>Yup.date()
          .min(Yup.ref("fromDate"), "To date should be greater than from date")
          .required("Required"),
        otherwise: ()=>Yup.date().notRequired(),
      }),
      companyPresent: Yup.boolean(),
    })
  ),
  reasonForJobChange: Yup.string(),
});
