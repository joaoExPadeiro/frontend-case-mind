"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setloginData({
      ...loginData,
      email: event.target.value,
    });
  };

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setloginData({
      ...loginData,
      password: event.target.value,
    });
  };

  const handleSubmit = async () => {
    if (loginData.email === "" || loginData.password === "") {
      toast.error("Preencha todos os campos.");
    } else {
      try {
        const response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        if (response.status === 200) {
          const data = await response.json();
          console.log(data.userLogin)
          router.push("/pricing");
        } else {
          toast.error("Credenciais inválidas.");
        }
      } catch (err) {}
    }
  };
  return (
    <div className="flex flex-col h-screen  items-center bg-white dark:bg-black">
      <Image
        width={300}
        height={300}
        alt="NextUI hero Image"
        src="https://lojinha.mindconsulting.com.br/wp-content/uploads/2022/07/bear-png.png"
      />
      <Card className="w-full max-w-md">
        <CardHeader>
          <p className="text-2xl">Login</p>
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="space-y-2">
            <p>Email</p>
            <Input
              type="email"
              required
              value={loginData.email}
              onChange={onEmailChange}
            />
          </div>
          <div className="space-y-2">
            <p>Password</p>
            <Input
              type="password"
              required
              value={loginData.password}
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
      <div className="mt-4">
        <span className="text-sm">Don't have an account? </span>
        <Link href="/register" className="text-sm text-blue-500">
          Sign up
        </Link>
      </div>
    </div>
  );
}
