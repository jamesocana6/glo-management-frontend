import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { API_BASE_URL } from "../../utils/constants"

const ChapterForm = () => {

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!values.school_website_txt) {
        delete values.school_website_txt;
      }
      const response = await fetch(`${API_BASE_URL}/api/chapters/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'meta': { requiresAuth: true }
        },
        body: JSON.stringify(values)
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Failed to submit form:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setSubmitting(false);
    }
  };
  

  const initialValues = {
    associate_chapter_fg: true,
    chapter_school_txt: "",
    city_state_txt: "",
    original_founding_date: "",
    chapter_status_txt: "AC",
    org_website_txt: "",
    school_website_txt: "",
  };

  const validationSchema = Yup.object({
    chapter_school_txt: Yup.string().required("Chapter school is required"),
    city_state_txt: Yup.string().required("City and state are required"),
    original_founding_date: Yup.date().required("Founding date is required"),
    org_website_txt: Yup.string().required("Organization website is required"),
  })

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="chapter_school_txt">School: </label>
                <Field type="text" id="chapter_school_txt" name="chapter_school_txt" className="form-control" />
                <ErrorMessage name="chapter_school_txt" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="city_state_txt">City, State</label>
                <Field type="text" id="city_state_txt" name="city_state_txt" className="form-control" />
                <ErrorMessage name="city_state_txt" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="original_founding_date">Founding Date</label>
                <Field type="date" id="original_founding_date" name="original_founding_date" className="form-control" />
                <ErrorMessage name="original_founding_date" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="org_website_txt">Chapter's Website (if applicable)</label>
                <Field type="text" id="org_website_txt" name="org_website_txt" className="form-control" />
                <ErrorMessage name="org_website_txt" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="school_website_txt">School's Official Website</label>
                <Field type="text" id="school_website_txt" name="school_website_txt" className="form-control" />
                <ErrorMessage name="school_website_txt" />
              </div>
            </div>
            {/* <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="chapter_status_txt">Chapter Status</label>
              <Field as="select" id="chapter_status_txt" name="chapter_status_txt" className="form-control">
                <option value="AC">Active</option>
                <option value="IA">Inactive</option>
              </Field>
            </div>
          </div> */}

            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default ChapterForm;
