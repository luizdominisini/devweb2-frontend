"use client";

import { useEffect, useState } from "react";
import { deletePost, postType, updatePost } from "../../lib/api";

export default function PostList({
  onSubmit,
}: {
  onSubmit: () => Promise<postType[]>;
}) {
  const [posts, setPosts] = useState<postType[]>([]);
  const [editedPosts, setEditedPosts] = useState<
    Record<number, { title: string; content: string; authorId: number }>
  >({});

  useEffect(() => {
    const fetch = async () => {
      const data = await onSubmit();
      setPosts(data);
    };
    fetch();
  }, [onSubmit]);

  const handleInputChange = (
    id: number,
    field: "title" | "content" | "authorId",
    value: string
  ) => {
    setEditedPosts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleUpdate = async (id: number) => {
    const updated = editedPosts[id];
    if (!updated) return;

    await updatePost(id, updated);

    setPosts((prev) =>
      prev.map((post) => (post.id === id ? { ...post, ...updated } : post))
    );
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Lista de Usuários</h2>
      <ul style={listStyle}>
        {posts.map((post) => (
          <li key={post.id} style={itemStyle}>
            <input
              type="text"
              value={post.id}
              style={{ width: "25px", textAlign: "center" }}
            />

            <input type="text" value={post.authorId} />

            <input
              type="text"
              value={editedPosts[post.id]?.title ?? post.title}
              onChange={(e) =>
                handleInputChange(post.id, "title", e.target.value)
              }
              style={inputStyle}
              placeholder="Title"
            />
            <input
              type="text"
              value={editedPosts[post.id]?.content ?? post.content}
              onChange={(e) =>
                handleInputChange(post.id, "content", e.target.value)
              }
              style={inputStyle}
              placeholder="Email"
            />

            <button onClick={() => handleUpdate(post.id)} style={updateBtn}>
              Update
            </button>
            <button onClick={() => handleDelete(post.id)} style={deleteBtn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ======== ESTILOS ===========
const containerStyle: React.CSSProperties = {
  padding: "40px",
  backgroundColor: "#121212",
  minHeight: "100vh",
  color: "#fff",
};

const titleStyle: React.CSSProperties = {
  fontSize: "24px",
  marginBottom: "20px",
};

const listStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
};

const itemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "16px",
};

const inputStyle: React.CSSProperties = {
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "14px",
  minWidth: "180px",
};

const updateBtn: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
