import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from './js/components/Form.jsx';

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<Form />, wrapper) : false;