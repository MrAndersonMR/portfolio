import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

const Opening = () => (
  <Container>
    <Button variant="primary">Primary</Button>{' '}
    Opening Component
  </Container>
);

Opening.propTypes = {};

Opening.defaultProps = {};

export default Opening;
