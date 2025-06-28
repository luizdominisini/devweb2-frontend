export type userCreateType = {
  name: string;
  email: string;
};

export type userType = {
  id: number;
  name: string;
  email: string;
};

export type postCreateType = {
  title: string;
  content: string;
  authorId: number;
};

export type postType = {
  id: number;
  title: string;
  content: string;
  authorId: number;
};

export async function createUser(userCreate: userCreateType) {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//user/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userCreate),
    }
  );

  console.log(response);

  return response.json();
}

export async function listUser(): Promise<userType[]> {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//user/list`,
    {
      method: "GET",
    }
  );

  const { users } = await response.json();

  return users;
}

export async function deleteUser(id: number) {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//user/delete/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
}

export async function updateUser(id: number, update: userCreateType) {
  console.log(update);
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//user/update/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    }
  );

  return response.json();
}

export async function createPost(postCreate: postCreateType) {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//post/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postCreate),
    }
  );

  return response.json();
}

export async function listPost(): Promise<postType[]> {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//post/list`,
    {
      method: "GET",
    }
  );

  const { posts } = await response.json();

  return posts;
}

export async function deletePost(id: number) {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//post/delete/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();
}

export async function updatePost(id: number, update: postCreateType) {
  const response = await fetch(
    `https://devweb2-prisma-production.up.railway.app//post/update/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    }
  );

  return response.json();
}
