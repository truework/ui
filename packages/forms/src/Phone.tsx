import * as React from 'react';
import { Field, FieldProps } from 'formik';
import styled from 'styled-components';
import { get } from 'lodash';
import { Box, Icon } from '@truework/ui';

import { BaseLabel } from './BaseLabel';
import { BaseWrapper } from './BaseWrapper';
import { BaseInput } from './BaseInput';
import { IBaseFormField } from './types';
import * as styles from './styles';
import { countries as countryData } from './countryData';

interface Props {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
}

const StyledInput = styled(BaseInput)<IBaseFormField>`
  padding-left: ${(props) => `${parseInt(props.theme.space.sm, 10) + 75}px`};
`;

const StyledSelect = styled.select<IBaseFormField>`
  ${styles.base}
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  padding: 0 ${(props) => props.theme.space.sm};
  text-align: center;

  &:focus,
  &:hover {
    outline: 0;
  }
`;

const CountryCodeMask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.space.sm};
  padding-right: 26px;
  font-size: ${(props) => props.theme.fontSizes[1]};
  line-height: 1;
  background: white;
  transition: ${({ theme }) =>
    `background ${theme.transitionDurations.fast} ${theme.transitionTimingFunctions.ease}`};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: calc(100% - 16px);
    width: 1px;
    background: ${(props) => props.theme.colors.outline};
  }
`;

const CodeSelectWrapper = styled.div`
  overflow: hidden;
  width: 75px;
  padding-right: ${(props) => props.theme.space.sm};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1px;
  height: calc(100% - 2px);
  margin: auto;
  text-align: center;
  border-radius: ${(props) => props.theme.radii[1]};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: ${({ theme }) =>
    `background ${theme.transitionDurations.fast} ${theme.transitionTimingFunctions.ease}`};

  &:focus,
  &:hover,
  &:focus-within {
    background: ${(props) => props.theme.colors.background};

    ${CountryCodeMask} {
      background: ${(props) => props.theme.colors.background};
    }
  }
`;

export function Phone(props: Props) {
  const [country, setCountry] = React.useState('US');
  const { name, label, type, placeholder } = props;
  const { code } = countryData.filter(({ abbrev }) => abbrev === country)[0];

  return (
    <Field name={name}>
      {({ field, form }: FieldProps) => {
        const errors = get(form, ['errors', field.name]);
        const sharedProps = {
          hasError: Boolean(get(form, ['touched', field.name]) && errors),
        };

        return (
          <div>
            <BaseLabel // eslint-disable-line jsx-a11y/label-has-for
              htmlFor={name}
            >
              {label}
            </BaseLabel>

            <BaseWrapper {...sharedProps}>
              <Box display="flex" alignItems="center" width="100%">
                <CodeSelectWrapper>
                  <StyledSelect
                    value={country}
                    onChange={(e) => {
                      const { value } = e.target;
                      const { code: newCode } = countryData.filter(
                        ({ abbrev }) => abbrev === value
                      )[0];

                      setCountry(value);

                      form.setFieldValue(
                        name,
                        newCode +
                          (field.value ? field.value.replace(code, '') : '')
                      );
                    }}
                  >
                    {countryData.map((c) => (
                      <option key={c.abbrev} value={c.abbrev}>
                        {c.name}
                      </option>
                    ))}
                  </StyledSelect>

                  <Icon
                    name="ChevronDown"
                    width="12px"
                    height="12px"
                    position="absolute"
                    top="0"
                    right="sm"
                    bottom="0"
                    m="auto"
                    zIndex={1}
                    color="secondary"
                  />

                  <CountryCodeMask>{code}</CountryCodeMask>
                </CodeSelectWrapper>

                <StyledInput
                  {...field}
                  {...sharedProps}
                  value={field.value ? field.value.replace(code, '') : ''}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    const value = target.value.replace(/[^\d+]/g, '');
                    form.setFieldValue(name, code + value);
                  }}
                  id={name}
                  type={type || 'text'}
                  placeholder={placeholder || `1234567890`}
                />
              </Box>
            </BaseWrapper>
          </div>
        );
      }}
    </Field>
  );
}
