export default async function addName(event, name) {
  event.preventDefault();
  console.log(name);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/addname`,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify({ username: name }), // Convert the body to a JSON string
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
