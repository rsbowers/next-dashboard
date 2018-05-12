import React from 'react';
import styled from 'styled-components';
import styles from './Layout.style';

const Row = props => <div {...props} />;

const styledRow = styled(Row)`${styles.row}`;
export default styledRow;