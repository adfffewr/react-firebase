import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import Editor from '../components/write/Editor';
import WriteBtnBox from '../components/write/WriteBtnBox';
import { firestore } from '../firebase/firebase';

const PostWriteContainer = ({ history }) => {
  const [form, setForm] = useState({
    title: '',
    category: 'html',
    url: '',
    description: '',
    tags: [],
  });
  const [content, setContent] = useState('');

  const onChangeTitle = useCallback(
    e => {
      setForm({
        ...form,
        title: e.target.value,
      });
    },
    [form],
  );

  const onChangeCategory = useCallback(
    e => {
      setForm({
        ...form,
        category: e.target.value,
      });
    },
    [form],
  );

  const onChangeUrl = useCallback(
    e => {
      setForm({
        ...form,
        url: e.target.value,
      });
    },
    [form],
  );

  const onChangeDescription = useCallback(
    e => {
      setForm({
        ...form,
        description: e.target.value,
      });
    },
    [form],
  );

  const onChangeContent = useCallback(e => {
    // console.log(e);
    setContent(e);
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    let date, createdAt;
    date = yyyy + '-' + mm + '-' + dd;
    createdAt = today;

    const modifiedAt = today;
    const { title, category, url, description, tags } = form;
    console.log(content);
    // console.log(title, category, url, description, tags);
    const slug = `post/${category}/${url}`;
    const id = category + '_' + url;

    try {
      await firestore
        .collection('docs')
        .doc(id)
        .set({
          title,
          category,
          url,
          description,
          tags,
          createdAt,
          date,
          id,
          slug,
        });
      const cid = id + '/content/last';
      await firestore
        .collection('docs')
        .doc(cid)
        .set({ createdAt, modifiedAt, content });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Editor
          form={form}
          onChangeTitle={onChangeTitle}
          onChangeCategory={onChangeCategory}
          onChangeUrl={onChangeUrl}
          onChangeDescription={onChangeDescription}
          onChangeContent={onChangeContent}
          content={content}
        />
        <WriteBtnBox />
      </form>
    </>
  );
};

export default withRouter(PostWriteContainer);
