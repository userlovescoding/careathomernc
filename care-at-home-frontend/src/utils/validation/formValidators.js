/**
 * Healthcare-standard Form Validation Utilities
 * Focus: Reliability, Helpful Feedback, and Valid Lead Capture
 */

export const validatePhone = (phone) => {
  // Matches standard Indian phone numbers (10 digits, optional +91/0 prefix)
  const phoneRegex = /^(?:(?:\+|0{0,2})91[\s-]?)?[6789]\d{9}$/;
  if (!phone) return "Phone number is required for care coordination.";
  if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number.";
  return "";
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required.";
  if (!emailRegex.test(email)) return "Please enter a valid email address.";
  return "";
};

export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === "") return \\ is required.\;
  return "";
};

export const validateStaffSelection = (value) => {
  if (!value || value === "select") return "Please select a service or role to continue.";
  return "";
};
