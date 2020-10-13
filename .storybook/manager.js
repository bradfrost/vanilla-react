import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: create({
    base: 'light',

    brandTitle: 'Your design system',
    brandUrl: '/'
  })
});
