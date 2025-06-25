"use client";

import { useEffect, useState } from "react";
import { deleteUser, updateUser, userType } from "../../lib/api";

export default function UserList({
  onSubmit,
}: {
  onSubmit: () => Promise<userType[]>;
}) {
  const [users, setUsers] = useState<userType[]>([]);
  const [editedUsers, setEditedUsers] = useState<
    Record<number, { name: string; email: string }>
  >({});

  useEffect(() => {
    const fetch = async () => {
      const data = await onSubmit();
      setUsers(data);
    };
    fetch();
  }, [onSubmit]);

  const handleInputChange = (
    id: number,
    field: "name" | "email",
    value: string
  ) => {
    setEditedUsers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleDelete = async (id: number) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleUpdate = async (id: number) => {
    const updated = editedUsers[id];
    if (!updated) return;

    await updateUser(id, updated);

    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, ...updated } : user))
    );
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Lista de Usuários</h2>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id} style={itemStyle}>
            <input
              type="text"
              value={user.id}
              style={{ width: "25px", textAlign: "center" }}
            />

            <input
              type="text"
              value={editedUsers[user.id]?.name ?? user.name}
              onChange={(e) =>
                handleInputChange(user.id, "name", e.target.value)
              }
              style={inputStyle}
              placeholder="Nome"
            />
            <input
              type="text"
              value={editedUsers[user.id]?.email ?? user.email}
              onChange={(e) =>
                handleInputChange(user.id, "email", e.target.value)
              }
              style={inputStyle}
              placeholder="Email"
            />
            <button onClick={() => handleUpdate(user.id)} style={updateBtn}>
              Update
            </button>
            <button onClick={() => handleDelete(user.id)} style={deleteBtn}>
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
