import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../components/GlobalStyles';
import { firestore } from '../firebase/firebase';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import PostAction from '../components/post/PostAction';
import { userStore } from '../store';
import { useObserver } from 'mobx-react';

hljs.configure({
  languages: ['javascript', 'css', 'html', 'xml ', 'typescript'],
});

const Container = styled.section`
  display: block;
`;
const PostTitle = styled.h1`
  color: ${palette.white};
  font-size: 32px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
const PostContent = styled.div`
  display: block;
  margin: 1.5rem 0;
  h1,
  h2,
  h3 {
    color: ${palette.white};
    font-weight: bold;
  }
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 18px;
  }
  p {
    margin: 1.5em 0px;
    color: ${palette.white};
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0px auto 1.5em;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
    margin: 0px 0px 1.5em 2em;
  }
  pre {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
      'Courier New', monospace;
    font-size: 14px;
    line-height: 1.4em;
    overflow-x: auto;
    white-space: pre;
    margin: 0px 0px 1.5em;
    padding: 1.5em;
    background: rgb(1, 22, 39);
    border-radius: 4px;
  }
  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 22px;
    }
    code,
    pre {
      font-size: 16px;
    }
  }
`;

const PostContainer = ({ match, history }) => {
  const [metaRead, setMetaRead] = useState({});
  const [docRead, setDocRead] = useState('');
  // console.log(history);
  const { pathname } = history.location;

  const loadPost = useCallback(async () => {
    const location = pathname.split('/');
    const metaRead = await firestore
      .collection('docs')
      .doc(decodeURI(`${location[2]}_${location[3]}`))
      .get();
    const docRead = await firestore
      .collection('docs')
      .doc(decodeURI(`${location[2]}_${location[3]}/content/last`))
      .get();

    setMetaRead(metaRead.data());
    // const aa = hljs.highlightAuto(docRead.data().content).value;
    // console.log(aa);
    setDocRead(docRead.data().content);
  }, [pathname]);

  useEffect(() => {
    loadPost();
  }, [loadPost]);

  const updataPre = () => {
    document.querySelectorAll('pre').forEach(block => {
      hljs.highlightBlock(block);
    });
  };

  useEffect(() => {
    updataPre();
    return () => {
      updataPre();
    };
  }, [docRead]);

  return useObserver(() => (
    <>
      <Container>
        {userStore.currentUser && userStore.currentUser.level === 0 && (
          <PostAction />
        )}

        <PostTitle>{metaRead.title}</PostTitle>
        <PostContent dangerouslySetInnerHTML={{ __html: docRead }} />
      </Container>
    </>
  ));
};

export default withRouter(PostContainer);
