import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import atoms
import Button from '../src/js/components/atoms/Button';
import Headline from '../src/js/components/atoms/Headline';
import Input from '../src/js/components/atoms/Input';
import Instructions from '../src/js/components/atoms/Instructions';

// Import molecules
import FormConfirmation from '../src/js/components/molecules/Forms/FormConfirmation';
import FormEmail from '../src/js/components/molecules/Forms/FormEmail';
import FormName from '../src/js/components/molecules/Forms/FormName';

// Import organisms
import NewsletterForm from '../src/js/components/organisms/NewsletterForm';

// Atom stories
storiesOf('Button', module)
  .add('default', () => <Button handleSubmit={action('clicked')} type="submit" text="Click me" />);

storiesOf('Headline', module)
  .add('default', () => <Headline text="Hello world" />);

storiesOf('Input', module)
  .add('default', () => <Input type="text" name="First name" handleChange={action('changed')} placeholder="Enter your first name" minLength="1" required />);

storiesOf('Instructions', module)
  .add('default', () => <Instructions text="Please enter your email address below" />);

// Molecule stories
storiesOf('FormConfirmation', module)
  .add('default', () => <FormConfirmation headline="Congrats!" instructions="Thank you for signing up!" submessage="You'll receive an email shortly." />);

storiesOf('FormEmail', module)
  .add('default', () => <FormEmail headline="Join now!" instructions="Please enter your email below." handleChange={action('changed')} handleSubmit={action('clicked')} />);

  storiesOf('FormName', module)
  .add('default', () => <FormName headline="Join now!" instructions="Please enter your first and last name below." handleChange={action('changed')} handleSubmit={action('clicked')} />);

// Organism stories
storiesOf('NewsletterForm', module)
  .add('default', () => <NewsletterForm />);