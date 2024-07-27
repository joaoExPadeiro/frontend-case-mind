"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Link } from "@nextui-org/link";

export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setUserData({
      ...userData,
      email: event.target.value,
    });
  };

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setUserData({
      ...userData,
      username: event.target.value,
    });
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setUserData({
      ...userData,
      password: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(userData);
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const json = await response.json();
      console.log(response.status);
      console.log(json);
      router.push("/");
    } catch (err) {}
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <p className="text-2xl">Register</p>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <p>Email</p>
            <Input
              type="email"
              required
              value={userData.email}
              onChange={onEmailChange}
            />
          </div>
          <div>
            <label>Username</label>
            <Input
              type="text"
              required
              value={userData.username}
              onChange={onUsernameChange}
            />
          </div>
          <div className="space-y-2">
            <p>Password</p>
            <Input
              type="password"
              required
              value={userData.password}
              onChange={onPasswordChange}
            />
          </div>
        </CardBody>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            className="w-full hover:bg-blue-500 transition-colors"
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
