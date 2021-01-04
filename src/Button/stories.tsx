/* eslint-disable */
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../theme'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { Box } from '../Box'
import { H4, P } from '../Typography'

const stories = storiesOf('Button', module)

stories
  .addDecorator((story: any) => {
    return <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  })
  .add(
    'Base',
    () => (
      <div>
        <Box>
          <Button onClick={() => console.log('Clicking')}>
            Our base button style
          </Button>
        </Box>
        <Box>
          <H4>
            This is an H4 component with a{' '}
            <Button onClick={() => console.log('Clicking')}>button</Button>{' '}
            within it
          </H4>
        </Box>
        <Box>
          <P>
            This is an P component with a{' '}
            <Button onClick={() => console.log('Clicking')}>button</Button>{' '}
            within it
          </P>
        </Box>
        <Box>
          <P>
            Our{' '}
            <Button color='primary' onClick={() => console.log('Clicking')}>
              base button
            </Button>{' '}
            can be styled using Styled System
          </P>
        </Box>
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add(
    'Primary',
    () => (
      <div>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='large'
          >
            Label
          </Button>
        </Box>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='small'
          >
            Label
          </Button>
        </Box>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='large'
            disabled
          >
            Label
          </Button>
        </Box>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='small'
            disabled
          >
            Label
          </Button>
        </Box>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='smallSquare'
          >
            <Icon name='Info' />
          </Button>
        </Box>
        <Box>
          <Button
            appearance='primary'
            onClick={() => console.log('Clicking')}
            size='largeSquare'
          >
            <Icon name='Info' />
          </Button>
        </Box>
      </div>
    ),
    {
      info: { inline: true }
    }
  )
  .add('Secondary', () => (
    <div>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='large'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='small'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='large'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='small'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='smallSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
      <Box>
        <Button
          appearance='secondary'
          onClick={() => console.log('Clicking')}
          size='largeSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
    </div>
  ))
  .add('Tertiary', () => (
    <div>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='large'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='small'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='large'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='small'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='smallSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
      <Box>
        <Button
          appearance='tertiary'
          onClick={() => console.log('Clicking')}
          size='largeSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
    </div>
  ))
  .add('Error', () => (
    <div>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='large'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='small'
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='large'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='small'
          disabled
        >
          Label
        </Button>
      </Box>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='smallSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
      <Box>
        <Button
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='largeSquare'
        >
          <Icon name='Info' />
        </Button>
      </Box>
      <Box>
        <Button
          display='flex'
          appearance='error'
          onClick={() => console.log('Clicking')}
          size='small'
        >
          <Icon name='Download' width='12px' mr='xs' />
          Download
        </Button>
      </Box>
    </div>
  ))
  .add('ButtonAnchor', () => (
    <div>
      <Box>
        <Button as='a' href='/'>
          Link to Home
        </Button>
      </Box>
      <Box>
        <Button as='a' href='/' appearance='primary' size='large'>
          Link to Home
        </Button>
      </Box>
    </div>
  ))
