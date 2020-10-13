import React, { Component } from 'react';
import {
  Main,
  Header,
  Footer,
  Hero,
  TextPassage,
  Section,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardFooter,
  Button,
  LayoutContainer
} from 'design-system-name';

export class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <Header />
        <main>
          <Hero
            imgSrc='https://via.placeholder.com/1200x650'
            imgAlt='Hero Alt Txt'
            title='Hero Title'
            description='This is the hero description'
          >
            <TextPassage>This is the hero description</TextPassage>
          </Hero>
          <LayoutContainer>
            <Section
              title='Section 1 Title'
              description='Section 1 description'
            >
              <Grid variant='1-2-4up'>
                <GridItem>
                  <Card className='cn-u-padding-top-medium'>
                    <CardBody>
                      <h3 className='cn-c-card__title'>Card 1</h3>
                      <TextPassage className='cn-c-card__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </TextPassage>
                    </CardBody>
                    <CardFooter>
                      <Button variant='primary' text='Card Button' />
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card className='cn-u-padding-top-medium'>
                    <CardBody>
                      <h3 className='cn-c-card__title'>Card 2</h3>
                      <TextPassage className='cn-c-card__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </TextPassage>
                    </CardBody>
                    <CardFooter>
                      <Button variant='primary' text='Card Button' />
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card className='cn-u-padding-top-medium'>
                    <CardBody>
                      <h3 className='cn-c-card__title'>Card 3</h3>
                      <TextPassage className='cn-c-card__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </TextPassage>
                    </CardBody>
                    <CardFooter>
                      <Button variant='primary' text='Card Button' />
                    </CardFooter>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card className='cn-u-padding-top-medium'>
                    <CardBody>
                      <h3 className='cn-c-card__title'>Card 4</h3>
                      <TextPassage className='cn-c-card__description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </TextPassage>
                    </CardBody>
                    <CardFooter>
                      <Button variant='primary' text='Card Button' />
                    </CardFooter>
                  </Card>
                </GridItem>
              </Grid>
            </Section>
            <Section
              title='Section 2 Title'
              description='Section 2 description'
            >
              <TextPassage>
                <h1>Heading 1</h1>
                <p>
                  A text passage contains arbitrary text that might come from a
                  CMS. It should live within a container that caps the line
                  length of the text to avoid a straining reading experience.
                </p>

                <h2>Heading 2</h2>

                <p>
                  This is another paragraph of text. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>

                <ul>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                </ul>

                <h3>Heading 3</h3>

                <ol>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                  <li>Here is a unordered list item</li>
                </ol>

                <p>
                  <a href='#'>Lorem ipsum dolor sit amet</a>, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>

                <blockquote>
                  <p>This is a quotation from something.</p>
                  <cite>Cite source</cite>
                </blockquote>

                <h4>Heading 4</h4>

                <p>
                  This is another paragraph of text. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <h5>Heading 5</h5>

                <p>
                  This is another paragraph of text. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>

                <p>That is all.</p>
              </TextPassage>
            </Section>
          </LayoutContainer>
        </main>
        <Footer>Footer content</Footer>
      </body>
    );
  }
}
