import * as yup from "yup";

export const TechValidator = yup.object().shape({
  name: yup.string().required("name is required"),
});
