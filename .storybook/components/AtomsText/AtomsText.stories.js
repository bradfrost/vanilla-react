import React from 'react';
import { AtomsText } from './AtomsText';
import { TypographyStyles } from './TypographyStyles';

export default {
  component: AtomsText,
  title: 'Atoms/Text'
};

export const BaseTextStyles = () => <AtomsText />;

export const TypeStyles = () => <TypographyStyles />;
