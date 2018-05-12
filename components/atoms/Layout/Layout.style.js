import { css } from 'styled-components';

const container = css`
  margin-left: auto;
  margin-right: auto;
  width: ${props => props.width || '80%'};
`;

const column = css`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  flex-grow: ${props => props.flexGrow || 1};
  max-width: ${props => props.width || 'auto'};
  flex-basis: ${props => props.width || 'auto'};
  ${props => props.debug && `
    background: palevioletred;
    border: 1px dashed #802342;
    padding: 16px;
  `}
`;

const row = css`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'stretch'};
`;

export default {
  column,
  container,
  row,
};