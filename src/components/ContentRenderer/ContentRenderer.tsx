"use client";

import { useEffect } from "react";
import 'highlight.js/styles/vs.css';
import styles from "./ContentRenderer.module.css";
import hljs from "highlight.js";

interface ContentRendererProps {
  content: string;
}

export default function ContentRenderer({ content }: ContentRendererProps) {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div data-testid="postContent" className={styles.postContent} dangerouslySetInnerHTML={{ __html: content }} />
} 