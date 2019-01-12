import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Button, TextInput, View } from "react-native";

const registrationForm = props => {
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={values => console.log(values)}
    >
      {props => <View />}
    </Formik>
  );
};

registrationForm.propTypes = {};

export default registrationForm;
