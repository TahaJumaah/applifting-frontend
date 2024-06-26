export default async function deleteName(uuid) {
  console.log(uuid);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/deleteName`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: uuid }),
      }
    );

    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
