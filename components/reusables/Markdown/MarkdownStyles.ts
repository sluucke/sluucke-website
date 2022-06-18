import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
export const MarkdownStyles = styled(ReactMarkdown)`
  font-family: 'Epilogue', serif;
  & > h1 {
    font-size: 2.5rem;
    font-family: 'Yeseva One', serif;
  }
  & > h2 {
    font-size: 2rem;
    font-family: 'Yeseva One', serif;
  }
  & > h3 {
    font-size: 1.75rem;
    font-family: 'Yeseva One', serif;
  }
  & > h4 {
    font-size: 1.5rem;
    font-family: 'Yeseva One', serif;
  }
  & > h5 {
    font-size: 1.25rem;
    font-family: 'Yeseva One', serif;
  }
  & > h6 {
    font-size: 1rem;
    font-family: 'Yeseva One', serif;
  }
  & > p {
    font-size: 1rem;
  }
  & > ul {
    list-style-position: inside;
    padding: 0;
    margin: 0;
  }

  & > li {
    padding: 0;
    margin: 0;
  }
  & > blockquote {
    border-left: 4px solid #000;
    padding: 0 1em;
    margin: 0;
  }
  & > blockquote p {
    margin: 0;
  }
  & > blockquote p:first-child {
    margin-top: 0;
  }
  & > blockquote p:last-child {
    margin-bottom: 0;
  }
  & > blockquote footer {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.8rem;
    color: #000;
  }
  & > blockquote footer:before {
    content: '—';
  }
  & > blockquote footer:after {
    content: '';
  }
  & > blockquote footer a {
    color: #000;
    text-decoration: none;
  }
  & > blockquote footer a:hover {
    text-decoration: underline;
  }
  & > blockquote footer a:first-child:after {
    content: ' ';
  }
  & > blockquote footer a:last-child:after {
    content: '';
  }

  & a {
    text-decoration: none;
    font-family: 'Yeseva One', serif;
    color: #0070f3;
  }
  & a:hover {
    text-decoration: underline;
  }
`
