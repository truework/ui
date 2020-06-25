import * as React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import { Field, FieldProps, FieldConfig } from 'formik';
import {
  useSelect,
  ItemConfig,
  Item as ItemProps,
  OnSelect,
  OnRemove,
} from 'use-drop';
import { Box, Span, Icon } from '@truework/ui';

import { Label } from './Label';

export type DropdownProps = {
  value?: string;
  placeholder?: string;
  label?: string;
  items: ItemConfig[];
  hasError?: boolean;
  disabled?: boolean;
  onSelect?: OnSelect;
  onRemove?: OnRemove;
};

export type DropdownFieldProps = DropdownProps &
  Pick<FieldConfig, 'validate'> & {
    name: string;
    label: string;
    disabled?: boolean;
  };

export type DropdownFieldWithLabelProps = { label: string } & DropdownFieldProps;

const ItemOuter = styled(Box)<Partial<ItemProps>>(
  ({ theme, selected, highlighted }) => `
  display: flex;
  align-items: center;
  padding: ${theme.space.sm};
  color: ${
    selected || highlighted ? theme.colors.body : theme.colors.secondary
  };
  background-color: ${
    selected || highlighted ? theme.colors.background : 'white'
  };
  cursor: pointer;
  font-size: ${theme.fontSizes[1]};
  font-weight: 400;
  line-height: ${theme.lineHeights[1]};
  letter-spacing: 0.6px;

  &:hover {
    background: ${theme.colors.background};
  }
`
);

export function Item({
  children,
  ...props
}: Partial<ItemProps> & {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <ItemOuter as="li" {...props}>
      {children}
    </ItemOuter>
  );
}

export const Body = React.forwardRef(
  ({ children, ...props }: Partial<React.HTMLAttributes<HTMLElement>>, ref) => {
    return (
      <Box
        ref={ref as React.RefObject<HTMLUListElement>}
        as="ul"
        boxShadow="medium"
        borderRadius={2}
        overflow="auto"
        width="100%"
        bg="white"
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Body.displayName = 'Body';

const ControlOuter = styled.button<{
  isActive?: boolean;
  hasError?: boolean;
  disabled?: boolean;
}>(
  ({ theme, isActive, hasError, disabled }) => `
  display: block;
  position: relative;
  width: 100%;
  z-index: 1;
  height: 48px;
  padding: 0 16px;
  text-align: left;
  font-size: ${theme.fontSizes[1]};
  font-weight: 400;
  line-height: ${theme.lineHeights[1]};
  color: ${theme.colors.secondary};
  transition-property: color;
  transition-duration: ${theme.transitionDurations.fast};
  transition-timing-function: ${theme.transitionTimingFunctions.ease};

  ${
    disabled
      ? `
      background: transparent;
      color: ${theme.colors.placeholder};
      cursor: not-allowed;
      & ~ .__border {
        background: ${theme.colors.background};
        cursor: not-allowed;
      }
    `
      : `
      &:active,
      &:focus,
      &:hover {
        outline: 0;
        color: ${theme.colors.body};

        & ~ .__bg {
          opacity: 1;
        }
        & ~ .__border {
          border-color: ${hasError ? theme.colors.error : theme.colors.primary};

          div {
            border-color: ${
              hasError ? theme.colors.error : theme.colors.primary
            };
            color: ${hasError ? theme.colors.error : theme.colors.primary};
          }
        }
      }
    `
  }

  ${
    isActive
      ? `
      outline: 0;
      color: ${theme.colors.body};

      & ~ .__bg {
        opacity: 1;
      }
      & ~ .__border {
        border-color: ${hasError ? theme.colors.error : theme.colors.primary};

        div {
          border-color: ${hasError ? theme.colors.error : theme.colors.primary};
          color: ${hasError ? theme.colors.error : theme.colors.primary};
        }
      }
  `
      : ``
  }
`
);

ControlOuter.displayName = 'ControlOuter';

export const Control = React.forwardRef(
  (
    {
      children,
      isActive,
      hasError,
      ...props
    }: Partial<React.HTMLAttributes<HTMLButtonElement>> & {
      isActive?: boolean;
      hasError?: boolean;
      disabled?: boolean;
    },
    ref
  ) => {
    return (
      <div style={{ position: 'relative' }}>
        <ControlOuter
          ref={ref as React.RefObject<HTMLButtonElement>}
          isActive={isActive}
          hasError={hasError}
          type="button"
          {...props}
        >
          <Span
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Span
              width="100%"
              fontWeight={4}
              style={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                letterSpacing: '0.6px',
              }}
            >
              {children}
            </Span>
            <Icon name="ChevronDown" ml="xs" />
          </Span>
        </ControlOuter>

        <Box
          className="__bg"
          bg={hasError ? 'error-alpha01' : 'primary-alpha01'}
          position="absolute"
          top="-2px"
          bottom="-2px"
          left="-2px"
          right="-2px"
          zIndex={0}
          borderRadius="6px"
          opacity={0}
          transitionProperty="opacity"
          transitionDuration="fast"
          transitionTimingFunction="ease"
        />
        <Box
          className="__border"
          bg="white"
          border={['1px solid', hasError ? 'error' : 'outline']}
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex={0}
          borderRadius="4px"
          transitionProperty="border-color"
          transitionDuration="fast"
          transitionTimingFunction="ease"
        />
      </div>
    );
  }
);

Control.displayName = 'Control';

export function Dropdown({
  value,
  placeholder,
  label,
  items,
  hasError,
  disabled,
  onSelect,
  onRemove,
}: DropdownProps) {
  const [cta, ctaSet] = React.useState(
    get(items.filter((i) => i.value === value)[0], 'label') ||
      placeholder ||
      'Please select'
  );

  const {
    id,
    items: _items,
    isOpen,
    getControlProps,
    getDropProps,
  } = useSelect({
    items: items.map((i) => ({
      ...i,
      selected: i.value === value,
    })),
    onSelect(item) {
      ctaSet(item.label);
      if (onSelect) onSelect(item);
    },
    onRemove(item) {
      ctaSet('Please select');
      if (onRemove) onRemove(item);
    },
  });

  return (
    <Box>
      <Control
        id={id}
        {...(disabled ? {} : getControlProps())}
        aria-label={label}
        isActive={isOpen}
        hasError={hasError}
        disabled={disabled}
      >
        {cta}
      </Control>

      {isOpen && (
        <Box
          position="absolute"
          bottom="0"
          width="100%"
          transform="translateY(100%) translateY(6px)"
          zIndex={1000}
        >
          <Body
            {...getDropProps()}
            style={{
              maxHeight: '240px',
              overflow: 'auto',
            }}
          >
            {_items.map((i) => (
              <Item
                key={i.value}
                selected={i.selected}
                highlighted={i.highlighted}
                {...i.getItemProps()}
              >
                {i.label}
              </Item>
            ))}
          </Body>
        </Box>
      )}
    </Box>
  );
}

export function DropdownField({ name, validate, ...rest }: DropdownFieldProps) {
  return (
    <Field name={name} validate={validate}>
      {({ field, form }: FieldProps) => {
        const hasError = Boolean(form.errors && form.errors[field.name]);

        return (
          <Dropdown
            {...rest}
            hasError={hasError}
            onSelect={(item) => {
              form.setFieldValue(field.name, item.value);
              if (rest.onSelect) rest.onSelect(item);
            }}
          />
        );
      }}
    </Field>
  );
}

export function DropdownFieldWithLabel(props: DropdownFieldProps) {
  return (
    <>
      <Label htmlFor={props.name}>{props.label}</Label>
      <DropdownField {...props} />
    </>
  );
}
