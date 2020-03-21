import React from 'react';
import Editor from '../components/write/Editor';
import WriteBtnBox from '../components/write/WriteBtnBox';
import { firestore } from '../firebase/firebase';

const PostWriteContainer = () => {
  return (
    <>
      <Editor />
      <WriteBtnBox />
    </>
  );
};

export default PostWriteContainer;
