import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import Form from "../components/Form";
import FormInputs from "../components/FormInputs";
import Email from "../components/validators/Email";
import Numeric from "../components/validators/Numeric";
import Required from "../components/validators/Required";
import MaxLength from "../components/validators/MaxLength";
import MinLength from "../components/validators/MinLength";

const components = {
  page: Page,
  Form: Form,
  "Form Inputs": FormInputs,
  Required: Required,
  Email: Email,
  Numeric: Numeric,
  "Maximum Length": MaxLength,
  "Minimum Length": MinLength,
};
storyblokInit({
  accessToken: "tky4UOeDfd009rRibvS2tQtt",
  use: [apiPlugin],
  components,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
