import formsAdapter from "@/adapters/forms";

export const submitContactUsForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return formsAdapter.submitForm(data);
};
