import React from 'react';
import styled from 'styled-components';
import styles from './Layout.style';

const Container = props => <div {...props} />;

const styledContainer = styled(Container)`${styles.container}`;
export default styledContainer;