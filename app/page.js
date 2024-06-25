"use client";

import { Container } from "@mantine/core";
import { TextInput, Button, Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import addName from "./lib/addName";
import getAllNames from "./lib/getAllNames";
export default function Home() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchNames() {
      const names = await getAllNames();
      setUsers(names);
    }
    fetchNames();
  }, []);

  const usersList = users.map((user) => {
    return (
      <>
        <Card
          key={user.uuid}
          shadow="sm"
          padding={"lg"}
          radius={"md"}
          withBorder
          style={{ width: "30%" }}
        >
          <Card.Section style={{ display: "flex", justifyContent: "center" }}>
            <IconUser style={{ width: "100px", height: "100px" }}></IconUser>
          </Card.Section>
          <Card.Section style={{ textAlign: "center", padding: "10%" }}>
            <Text fw={500}>{user.name}</Text>
          </Card.Section>
        </Card>
      </>
    );
  });

  return (
    <Container size={"lg"} fluid className="input-container">
      <form id="name-form">
        <TextInput
          size="md"
          radius={"lg"}
          label="Username"
          description="Input Username Here to add to the databas"
          placeholder="Username"
          value={input}
          onChange={(e) => {
            setInput(event.target.value);
          }}
        ></TextInput>
        <Button
          type="submit"
          style={{ margin: "1.2em" }}
          onClick={(event) => {
            addName(event, input);
          }}
        >
          Add User
        </Button>
      </form>
      <Container className="cards-container">{usersList}</Container>
    </Container>
  );
}
