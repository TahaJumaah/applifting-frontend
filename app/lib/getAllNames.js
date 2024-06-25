export default async function getAllNames() {
  event.preventDefault();

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER, {
      method: "GET",
    });

    const names = await response.json();
    console.log(names);
    return names;
  } catch (error) {
    console.log(error);
    return;
  }
}
