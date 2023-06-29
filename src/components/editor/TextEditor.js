import { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const TextEditor = (props) => {

    const [editorState, setEditorState] = useState(EditorState.createWithContent(ContentState.createFromText(props.content)));

    useEffect(() => {
      setEditorState(EditorState.createWithContent(ContentState.createFromText(props.content)));
      // console.log(props.content);
    },[props.content])

    const onEditorStateChange = (newEditorState) => {
      setEditorState(newEditorState);
    };
  
    const getTextFromEditor = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const text = rawContentState.blocks
          .map((block) => block.text)
          .join('\n');
        return text;
    };

    const getHtmlFromEditor = () => {
        const contentState = editorState.getCurrentContent();
        const html = draftToHtml(convertToRaw(contentState));
        return html;
    };

    // console.log(getHtmlFromEditor());

  return (
    <Editor
        editorState={editorState}
        // toolbar={toolbarOptions}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        onEditorStateChange={onEditorStateChange}
    />
  )
}

export default TextEditor