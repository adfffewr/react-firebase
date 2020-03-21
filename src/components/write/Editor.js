import React, { useState, useCallback, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
// import hljs from 'highlight.js/lib/highlight';
// import 'highlight.js/styles/github.css';
import styled from 'styled-components';
import { palette } from '../GlobalStyles';
import Input from '../common/Input';
import Select from '../common/Select';
import Textarea from '../common/Textarea';

const EditorBox = styled.div`
  display: block;
`;
const InputBox = styled.div`
  & > span {
    font-size: 0.75rem;
    color: ${palette.white};
    display: block;
    margin-bottom: 5px;
  }
  & + div {
    margin-top: 15px;
  }
`;
const QuillWrapper = styled.div`
  display: block;
  margin-bottom: 15px;
  max-height: 368px;
  .ql-editor {
    min-height: 320px;
    max-height: 320px;
    overflow: auto;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-toolbar.ql-snow {
    border-color: ${palette.white};
  }
  .ql-snow .ql-stroke {
    stroke: ${palette.white};
  }
  .ql-snow .ql-fill,
  .ql-snow .ql-stroke.ql-fill {
    fill: ${palette.white};
  }
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${palette.green};
  }
  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${palette.green};
  }
  .ql-snow .ql-editor pre.ql-syntax {
    background-color: rgb(1, 22, 39);
  }
`;

const Editor = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const onChangeTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onChangeCategory = useCallback(e => {
    setCategory(e.target.value);
  }, []);

  const onChangeUrl = useCallback(e => {
    setUrl(e.target.value);
  }, []);

  const onChangeDescription = useCallback(e => {
    setDescription(e.target.value);
  }, []);

  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  // hljs.configure({
  //   // optionally configure hljs
  //   languages: ['javascript', 'ruby', 'python']
  // });

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow', // or 'bubble , snow'
      placeholder: '내용을 작성하세요...',
      modules: {
        syntax: true,
        // syntax: {
        //   highlight: text => hljs.highlightAuto(text).value
        // },

        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image']
        ]
      }
    });

    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events
    // const quill = quillInstance.current;
    // quill.on('text-change', (delta, oldDelta, source) => {
    //   console.log(quill.root.innerHTML);
    // });
  }, []);

  return (
    <>
      {/* <TitleInput placeholder="제목을 입력하세요" /> */}
      <EditorBox>
        <InputBox>
          <span>제목</span>
          <Input
            placeholder="제목을 입력하세요"
            full
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </InputBox>

        <InputBox>
          <span>카테고리</span>
          <Select full value={category} onChange={onChangeCategory}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </Select>
        </InputBox>

        <InputBox>
          <span>URL</span>
          <Input
            placeholder="url을 입력하세요"
            full
            type="text"
            value={url}
            onChange={onChangeUrl}
          />
        </InputBox>

        <InputBox>
          <span>포스트 소개</span>
          <Textarea
            placeholder="포스트 소개를 짧게 작성해주세요"
            full
            value={description}
            onChange={onChangeDescription}
          />
        </InputBox>
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </EditorBox>
    </>
  );
};

export default Editor;
