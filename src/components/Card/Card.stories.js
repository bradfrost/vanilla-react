import React from 'react';
import Card from './Card';
import CardHeader from '../CardHeader';
import CardBody from '../CardBody';
import CardFooter from '../CardFooter';
import TextPassage from '../TextPassage';
import Button from '../Button';

export default {
  component: Card,
  title: 'Molecules/Blocks/Card'
};

const Template = args => (
  <Card {...args}>
    <CardHeader>
      <img
        className='cn-c-card__img'
        src='https://via.placeholder.com/640x360.png'
        alt='Placeholder Text'
      />
    </CardHeader>
    <CardBody>
      <h3 className='cn-c-card__title'>Card Title</h3>
      <TextPassage className='cn-c-card__description'>
        This is the card description
      </TextPassage>
    </CardBody>
    <CardFooter>
      <Button variant='primary' text='Card Button' />
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};

export const Center = Template.bind({});
Center.args = { align: 'center' };

export const CardWithoutImage = () => (
  <Card className='cn-u-padding-top-small'>
    <CardBody>
      <h3 className='cn-c-card__title'>Card Title</h3>
      <TextPassage className='cn-c-card__description'>
        This is the card description
      </TextPassage>
    </CardBody>
    <CardFooter>
      <Button variant='primary' text='Card Button' />
    </CardFooter>
  </Card>
);

export const Inverted = () => (
  <div className='cn-u-padding-large' style={{ background: '#000000' }}>
    <Card theme='inverted'>
      <CardHeader>
        <img
          className='cn-c-card__img'
          src='https://via.placeholder.com/640x360.png'
          alt='Placeholder Text'
        />
      </CardHeader>
      <CardBody>
        <h3 className='cn-c-card__title'>Card Title</h3>
        <TextPassage className='cn-c-card__description'>
          This is the card description
        </TextPassage>
      </CardBody>
      <CardFooter>
        <Button variant='primary' text='Card Button' />
      </CardFooter>
    </Card>
  </div>
);
