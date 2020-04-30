/* eslint-disable */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { P, H1 } from '../Typography';
import { Box } from '../Box';
import { Container } from '../Container';
import { theme, Sizes } from '../theme';

const stories = storiesOf('Container', module);

stories.add(
  'All',
  () => (
    <Box p="xxl">
      <H1 mb="xl">Container</H1>
      <Box p="sm" mb="xxl" bg="background">
        <pre
          dangerouslySetInnerHTML={{
            __html:
              "import Container from 'src/javascript/components/Container';",
          }}
        />
      </Box>

      {Object.keys(theme.sizes).map((key: keyof Sizes) => {
        return (
          <Box mb="xxl">
            <Container key={key} size={key}>
              <H1>key</H1>

              <pre
                dangerouslySetInnerHTML={{
                  __html: `&lt;Container size='${key}'>...&lt;/Container>`,
                }}
              />

              <P>
                Lorem ipsum dolor amet bushwick slow-carb fam, sustainable
                authentic lumbersexual single-origin coffee activated charcoal
                kitsch pour-over hell of. Raw denim crucifix celiac man bun.
                Stumptown la croix pitchfork, pork belly hexagon live-edge
                sartorial schlitz normcore affogato readymade street art.
                Wayfarers pok pok VHS kinfolk occupy, mixtape glossier. Af twee
                brunch +1 single-origin coffee unicorn disrupt neutra kitsch
                four loko. Trust fund glossier poutine pok pok, PBR&B organic
                adaptogen. Affogato photo booth raclette craft beer cloud bread
                selvage, etsy kogi jean shorts freegan.
              </P>
            </Container>
          </Box>
        );
      })}
    </Box>
  ),
  {
    info: { inline: true },
  }
);
