"use client";

import { Container } from "@mantine/core";
import { TextInput, Button, Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import addName from "./lib/addName";
import getAllNames from "./lib/getAllNames";
import deleteName from "./lib/deleteName";
export default function Home() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [refreshNames, setRefreshNames] = useState(false);
  useEffect(() => {
    const fetchNames = async () => {
      const names = await getAllNames();
      setUsers(names ? names : []);
    };

    fetchNames();
  }, [refreshNames]);
  useEffect(() => {
    async function fetchNames() {
      const names = await getAllNames();
      setUsers(names || []);
    }
    fetchNames();
  }, []);

  const usersList = Array.isArray(users)
    ? users.map((user) => {
        return (
          <>
            <div className="card" key={user.uuid}>
              <IconUser style={{ width: "100px", height: "100px" }}></IconUser>
              <h3 key={user.uuid}>{user.name}</h3>
              <Button
                variant="filled"
                color="red"
                onClick={async (event) => {
                  event.preventDefault();
                  const response = await deleteName(user.uuid);
                  console.log(response);
                  setRefreshNames((prev) => !prev);
                }}
              >
                Delete User
              </Button>
            </div>
          </>
        );
      })
    : null;

  return (
    <Container size={"lg"} fluid className="input-container">
      <form id="name-form">
        <TextInput
          size="md"
          radius={"lg"}
          label="Username"
          description="Input Username Here to add to the database"
          placeholder="Username"
          value={input}
          onChange={(e) => {
            setInput(event.target.value);
          }}
        ></TextInput>
        <Button
          value={"default"}
          color="green"
          type="submit"
          style={{ margin: "1.2em" }}
          onClick={async (event) => {
            event.preventDefault();
            await addName(event, input);
            setInput("");
            setRefreshNames((prev) => !prev);
          }}
        >
          Add User
        </Button>
      </form>
      <Container className="cards-container">{usersList}</Container>
    </Container>
  );
}
