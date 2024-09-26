import * as Yup from "yup";

export const signUp = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter valid email address"),
});
