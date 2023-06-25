import { useState, useEffect } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

const TextEditor = () => {

    // const toolbarOptions = {
    //     options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'history'],
    //     inline: {
    //       options: ['bold', 'italic', 'underline', 'strikethrough'],
    //     },
    //     blockType: {
    //       inDropdown: true,
    //       options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
    //     },
    //     list: {
    //       inDropdown: true,
    //       options: ['unordered', 'ordered'],
    //     },
    //     textAlign: {
    //       inDropdown: true,
    //       options: ['left', 'center', 'right', 'justify'],
    //     },
    //     link: {
    //       inDropdown: true,
    //       showOpenOptionOnHover: true,
    //       defaultTargetOption: '_blank',
    //       options: ['link', 'unlink'],
    //     },
    // };
      
    const initialContent = `Hey! I am a dummy text. You can generate text or type any topic of your choice. The fun part is that you can tune it as you need.`;
    const contentState = ContentState.createFromText(initialContent);
    const initialEditorState = EditorState.createWithContent(contentState);
    const [editorState, setEditorState] = useState(initialEditorState);

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

    console.log(getHtmlFromEditor());

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