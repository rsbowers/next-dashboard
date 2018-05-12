import React from 'react';
import styled from 'styled-components';
import styles from './Layout.style';

const Column = props => <div {...props} />;

const styledColumn = styled(Column)`${styles.column}`;
export default styledColumn;