import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../GlobalStyles';

const List = styled.li`
  & + li {
    margin-top: 1.5rem;
  }
  a {
    color: ${palette.white};
  }
  a:hover {
    color: ${palette.green};
  }
`;
const Date = styled.time`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${palette.green};
`;
const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px 0;
`;
// const TextContent = styled.div`
//   p {
//     font-size: 0.9rem;
//     font-weight: bold;
//   }
// `;

const PostList = ({ lists }) => {
  // console.log(lists);
  return (
    <>
      {lists &&
        lists.length >= 1 &&
        lists.map(list => (
          <List key={list.id}>
            <Link to={list.slug}>
              <Date datetime={list.date}>{list.date}</Date>
              <Title>{list.title}</Title>
            </Link>
          </List>
        ))}
    </>
  );
};

export default PostList;
