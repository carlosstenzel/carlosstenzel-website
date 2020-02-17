import React from 'react';

import { GoMail } from "react-icons/go";

import { Container } from './styles';

export default function VacantJob() {
  return (
    <Container>
      <h3>Do you have a job to refer me?</h3>
      <p><GoMail /> <a href="mailto:carlosstenzel@hotmail.com">carlosstenzel@hotmail.com</a></p>
    </Container>
  );
}
