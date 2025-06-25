"use client";
import { useState } from "react";
import { postCreateType } from "../../lib/api";

export default function PostForm({
  onSubmit,
}: {
  onSubmit: (user: postCreateType) => void;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, authorId });
    setAuthorId(0);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2 style={titleStyle}>Register New User</h2>

      <input
        id="title"
        type="text"
        placeholder="Your Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <input
        id="content"
        type="text"
        placeholder="Your content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={inputStyle}
      />

      <input
        id="authorId"
        type="text"
        placeholder="Your Id"
        value={authorId}
        onChange={(e) => setAuthorId(+e.target.value)}
        style={inputStyle}
      />

      <button type="submit" style={buttonStyle}>
        Register
      </button>
    </form>
  );
}

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  backgroundColor: "#1f1f1f",
  padding: "30px",
  borderRadius: "12px",
  width: "100%",
  maxWidth: "400px",
  margin: "40px auto",
};

const titleStyle: React.CSSProperties = {
  color: "#fff",
  marginBottom: "10px",
};

const inputStyle: React.CSSProperties = {
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
  padding: "12px 24px",
  backgroundColor: "#f97316",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  textTransform: "uppercase",
};
