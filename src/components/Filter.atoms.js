import styled from 'styled-components';

export const FilterList = styled.ul`
  align-items: center;
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 5px 0 15px 0;
  @media screen and (min-width: 700px) {
    li:not(:first-of-type):before {
      content: '-';
      display: inline-block;
      padding: 0 5px;
    }
  }
`;

export const ListItem = styled.li`
  button {
    background-color: transparent;
    border: 1px black solid;
    border-radius: 50px;
    display: inline-block;
    font-size: 1em;
    margin: 0 2px;
    min-width: 50px;
    min-height: 2.2em;
    padding: 5px 10px;
    text-align: center;
  }
  &.active {
    button {
      background-color: #404040;
      color: white;
    }
  }
`;
