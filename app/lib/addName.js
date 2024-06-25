export default async function addName(event, name) {
  event.preventDefault();
  console.log(name);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER}/api/addname`,
      {
        method: "POST",
        body: { user: name },
      }
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
    return null;
  }
}
