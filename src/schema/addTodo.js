import * as Yup from "yup";

export default () =>
  Yup.object({
    id: Yup.string().required("fieldRequired"),
    title: Yup.string().required("fieldRequired"),
    details: Yup.string().required("fieldRequired"),
  });
