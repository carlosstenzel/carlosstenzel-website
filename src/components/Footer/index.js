import React from 'react';

import { FaRegHeart } from "react-icons/fa";

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <p>
       Made with <FaRegHeart /> - By <a href="https://carlosstenzel.com/">Carlos Stenzel</a> 
      </p>
    </Container>
  );
}
