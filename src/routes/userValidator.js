import yup from "yup";

export default yup
  .object()
  .shape({
    name:
      yup
        .string()
        .min(2, "Too short (name)")
        .max(80, "Too long (name)")
        .required("Required (name)"),
    email:
      yup
        .string()
        .email("Invalid (email)")
        .required("Required (email)")
        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid format"),
    password:
      yup
        .string()
        .min(8, "Too short (password)")
        .max(20, "Too long (password)")
        .required("Required (password)"),
  });
