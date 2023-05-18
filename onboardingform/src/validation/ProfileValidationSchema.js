import * as Yup from "yup";
 export const ProfileValidationSchema = Yup.object({
    firstName:Yup.string().required("Required"),
    lastName:Yup.string().required("Required"),
    middleName:Yup.string().required("Required"),
    email:Yup.string().required("Required").email("Invalid email"),
    phoneNumber:Yup.number().required("Required").typeError("Invalid phone number"),
    bloodGroup:Yup.string().required("Required"),
    gender:Yup.string().required("Required"),
    maritialStatus:Yup.string().required("Required"),
    dob:Yup.string().required("Required"),
    bankName:Yup.string().required("Required"),
    accountNumber:Yup.number().required("Required").typeError("Invalid account number"),
    ifscCode:Yup.string().required("Required"),
    branch:Yup.string().required("Required"),
    profilePhoto:Yup.mixed().required("Required"),
    altMobieNumber:Yup.number().typeError("Invalid phone number"),
    linkedInLink:Yup.string().required("Required"),
    githubLink:Yup.string().required("Required"),
 })

 