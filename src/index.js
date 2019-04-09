import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NewsletterForm from './js/components/organisms/NewsletterForm';
  
import './css/_base.css';

const wrapper = document.getElementById('app');

wrapper ? ReactDOM.render(<NewsletterForm />, wrapper) : false;