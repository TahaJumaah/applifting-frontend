"use client";

import { Container } from "@mantine/core";
import { TextInput, Button, Card, Image, Text } from "@mantine/core";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";
import addName from "./lib/addName";
export default function Home() {
  const [input, setInput] = useState("");
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
      <Container className="cards-container">
        <Card
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
            <Text fw={500}>User name here</Text>
          </Card.Section>
        </Card>
        <Card
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
            <Text fw={500}>User name here</Text>
          </Card.Section>
        </Card>
      </Container>
    </Container>
  );
}
