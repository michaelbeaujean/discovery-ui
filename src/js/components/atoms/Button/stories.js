import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('default', () => <Button handleSubmit={action('clicked')} type="submit" text="Click me" />)