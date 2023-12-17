import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),

  phone: Yup.number() // Use Yup.number() for phone
    .required("Phone is required")
    .min(11, "Phone must be 11 digits"),

  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  message: Yup.string()
    .required("Message is required"),
});




export const foodDonationSchema = Yup.object({
  organizationName: Yup.string()
    .required("Organization name is required")
    .min(3, "Organization name must be at least 3 characters")
    .max(50, "Organization name must be at most 50 characters"),

  organizationType: Yup.string()
    .required("Organization type is required"),

  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters"),

  mobileNumber: Yup.number()
    .required("Mobile number is required")
    .min(11, "Mobile number must be 11 digits"),

  foodInKg: Yup.number()
    .required("Food quantity is required")
    .min(1, "Food quantity must be at least 1 kg")
    .max(100, "Food quantity must be at most 100 kg"),
});

