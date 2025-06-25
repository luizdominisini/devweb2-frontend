"use client";

import { useRouter } from "next/navigation";
import PostList from "../../../components/posts/PostList";
import { listPost } from "../../../lib/api";

export default function ListPage() {
  const router = useRouter();

  const handleList = async () => {
    return listPost();
  };

  return (
    <div style={pageStyle}>
      <button onClick={() => router.push("/")} style={backButtonStyle}>
        ⬅ Back
      </button>
      <PostList onSubmit={handleList} />
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#121212",
  padding: "40px 20px",
  color: "#fff",
};

const backButtonStyle: React.CSSProperties = {
  marginBottom: "20px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};
