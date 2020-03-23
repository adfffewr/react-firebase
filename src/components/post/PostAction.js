import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../common/Button';
import styled from 'styled-components';
import { firestore } from '../../firebase/firebase';

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin: 0 10px;
  }
`;

const PostAction = ({ history }) => {
  console.log(history);
  const { pathname } = history.location;
  const location = pathname.split('/');

  const PostDelete = async () => {
    await firestore
      .collection('docs')
      .doc(`${location[2]}_${location[3]}`)
      .delete();

    await firestore
      .collection('docs')
      .doc(`${location[2]}_${location[3]}/content/last`)
      .delete();

    history.push('/');
  };

  return (
    <>
      <Conatiner>
        <Button to={`/write?id=${location[1]}_${location[2]}_${location[3]}`}>
          수정
        </Button>
        <Button onClick={PostDelete}>삭제</Button>
      </Conatiner>
    </>
  );
};

export default withRouter(PostAction);
