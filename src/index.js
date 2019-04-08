import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsletterForm from './js/components/organisms/NewsletterForm.jsx';

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<NewsletterForm />, wrapper) : false;