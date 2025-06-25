"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#0a0a0a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "20px" }}>Principal panel</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <button onClick={() => router.push("/user/create")} style={buttonStyle}>
          Register User
        </button>
        <button onClick={() => router.push("/user/list")} style={buttonStyle}>
          List Users
        </button>
        <button onClick={() => router.push("/post/create")} style={buttonStyle}>
          Register Post
        </button>
        <button onClick={() => router.push("/post/list")} style={buttonStyle}>
          List Posts
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#f97316",
  color: "white",
  cursor: "pointer",
  transition: "background-color 0.3s",
  minWidth: "200px",
  textTransform: "uppercase",
};
