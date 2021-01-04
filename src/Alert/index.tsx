import * as React from 'react'
import styled from 'styled-components'
import { compose, variant, space, SpaceProps, VariantArgs } from 'styled-system'

import { Icon } from '../Icon'
import { theme } from '../theme'

export type AlertTypes =
  | 'primary'
  | 'warning'
  | 'error'
  | 'success'
  | 'secondary'

export type AlertProps = {
  appearance: 'primary' | 'secondary'
  type: AlertTypes
  icon?: React.ReactElement
} & VariantArgs &
  SpaceProps

const AlertLeft = styled.div<SpaceProps>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'body-alpha01',
    minWidth: '52px'
  },
  space
)

AlertLeft.displayName = 'AlertLeft'

const AlertRight = styled.div<SpaceProps>(
  {
    display: 'block',
    fontSize: theme.fontSizes[1],
    lineHeight: theme.lineHeights[1],
    letterSpacing: '0.3px',
    fontWeight: 400,
    width: '100%'
  },
  space
)

AlertRight.displayName = 'AlertRight'

const AlertOuter = styled.div<React.PropsWithChildren<AlertProps>>(
  {
    display: 'flex',
    color: 'body',
    background: 'white',
    borderRadius: '4px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    '& a': {
      color: 'inherit',
      '&:hover': {
        color: 'inherit',
        textDecoration: 'underline'
      }
    }
  },
  compose(space),
  variant({
    prop: 'appearance',
    variants: {
      primary: {
        border: '1px solid'
      },
      secondary: {}
    }
  }),

  variant({
    prop: 'type',
    variants: {
      primary: {
        borderColor: 'primary',
        [AlertLeft]: {
          bg: 'primary-alpha01',
          color: 'primary'
        },
        [AlertRight]: {
          color: 'body'
        }
      },
      secondary: {
        [AlertLeft]: {
          bg: 'placeholder-alpha01',
          color: 'secondary'
        },
        [AlertRight]: {
          color: 'secondary'
        }
      },
      error: {
        borderColor: 'error',
        [AlertLeft]: {
          bg: 'error-alpha01',
          color: 'error'
        },
        [AlertRight]: {
          color: 'error'
        }
      },
      warning: {
        borderColor: 'warning',
        [AlertLeft]: {
          bg: 'warning-alpha01',
          color: 'warning'
        },
        [AlertRight]: {
          color: 'warningDark'
        }
      },
      success: {
        borderColor: 'success',
        [AlertLeft]: {
          bg: 'success-alpha01',
          color: 'success'
        },
        [AlertRight]: {
          color: 'successDark'
        }
      }
    }
  })
)

AlertOuter.displayName = 'AlertOuter'

const icons: {
  [key: string]: React.ReactElement
} = {
  primary: <Icon name='Info' />,
  secondary: <Icon name='Info' />,
  error: <Icon name='AlertCircle' />,
  warning: <Icon name='AlertTriangle' />,
  success: <Icon name='CircleCheckFull' />
}

export function Alert (props: React.PropsWithChildren<AlertProps>) {
  let I = props.icon || icons[props.type]

  return (
    <AlertOuter {...props}>
      <AlertLeft p={['xs', 'xs', 'sm']}>{I}</AlertLeft>
      <AlertRight px='sm' py={['xs', 'xs', 'sm']}>
        {props.children}
      </AlertRight>
    </AlertOuter>
  )
}
