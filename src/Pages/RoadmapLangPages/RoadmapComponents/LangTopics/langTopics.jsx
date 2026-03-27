import ReactMarkdown from "react-markdown";
import React from "react";

export function LangTopics({ children }) {
  return (
    <ul className="flex flex-wrap gap-10 max-w-[90%]">
      {React.Children.map(children, (topic, idx) => (
        <LangLineTopics key={idx}>
          <ReactMarkdown>{topic}</ReactMarkdown>
        </LangLineTopics>
      ))}
    </ul>
  );
}
export function LangLineTopics({ children }) {
  return <li>{children}</li>;
}
