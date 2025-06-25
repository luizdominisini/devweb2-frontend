"use client";

import { useRouter } from "next/navigation";
import PostForm from "../../../components/posts/PostForm";
import { createPost, postCreateType } from "../../../lib/api";

export default function CreatePage() {
  const router = useRouter();

  const handleCreate = async ({ title, content, authorId }: postCreateType) => {
    await createPost({ title, content, authorId });
  };

  return (
    <div style={pageStyle}>
      <button onClick={() => router.push("/")} style={backButtonStyle}>
        ⬅ Back
      </button>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#121212",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 20px",
  color: "white",
};

const backButtonStyle: React.CSSProperties = {
  alignSelf: "flex-start",
  marginBottom: "20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};
