export default async function getAllNames() {
  event.preventDefault();

  try {
    const response = await fetch("http://127.0.0.1:2000/", {
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
