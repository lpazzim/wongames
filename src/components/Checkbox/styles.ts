import styled, { css } from 'styled-components'
import theme from 'styles/theme'
import { CheckboxProps } from '.'

export const Wrapper = styled.main``

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`
