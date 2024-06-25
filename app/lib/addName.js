export default async function addName(event, name) {
  event.preventDefault();
  console.log(event);
  console.log(name);

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER, {
    method: "GET",
  });

  if (response.ok) {
    const data = await response.body;
    console.log(data);
  }
}
