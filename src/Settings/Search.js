import React from "react";
import styled from "styled-components";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Search = () => {
  return <SearchGrid>Search</SearchGrid>;
};

export default Search;
