import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)

const MarkdownEditor = ({ onContentChange }) => {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: containerRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange?.(content);
    });

    editorRef.current = editor;

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  return <div ref={containerRef} />;
};

export default MarkdownEditor;

// END