import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  phone: Yup.number() // Use Yup.number() for phone
    .required("Phone is required")
    .positive("Phone must be a positive number")
    .integer("Phone must be an integer")
    .min(10000000000, "Phone must be 11 digits")
    .max(99999999999, "Phone must be 11 digits"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  message: Yup.string().required("Message is required"),
});

export default validationSchema;
