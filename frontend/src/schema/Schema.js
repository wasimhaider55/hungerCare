constSchema = {
  initialValues: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  validationRules: {
    username: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      required: true,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    password: {
      required: true,
      minLength: 8,
      containsUppercase: true, // New rule: Password must contain at least one uppercase letter
      containsLowercase: true, // New rule: Password must contain at least one lowercase letter
      containsNumber: true, // New rule: Password must contain at least one number
      containsSpecialChar: true, // New rule: Password must contain at least one special character
    },
    confirmPassword: {
      required: true,
      matches: "password",
    },
  },
};

export default Schema;
