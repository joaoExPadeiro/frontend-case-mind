"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { Link } from "@nextui-org/link";

export default function Home() {
  const router = useRouter();
  const [itemData, setItemData] = useState({
    userId: "",
    description: "",
    valor: "",
    tipo: "",
  });
  const onUserIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setItemData({
      ...itemData,
      userId: event.target.value,
    });
  };

  const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setItemData({
      ...itemData,
      description: event.target.value,
    });
  };

  const onValorChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setItemData({
      ...itemData,
      valor: event.target.value,
    });
  };

  const onTipoChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setItemData({
      ...itemData,
      tipo: event.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(itemData);
    try {
      const response = await fetch("http://localhost:3000/Finance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });
      const json = await response.json();
      console.log(response.status);
      console.log(json);
      router.push("/pricing");
    } catch (err) {}
  };
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <p className="text-2xl">Registre sua transação</p>
        </CardHeader>
        <CardBody className="space-y-4">
          <div>
            <label>Usuário</label>
            <Input
              type="int"
              required
              value={itemData.userId}
              onChange={onUserIdChange}
            />
          </div>
          <div className="space-y-2">
            <p>Descrição</p>
            <Input
              type="text"
              required
              value={itemData.description}
              onChange={onDescriptionChange}
            />
          </div>
          <div>
            <label>Valor</label>
            <Input
              type="number"
              required
              value={itemData.valor}
              onChange={onValorChange}
            />
          </div>
          <div className="space-y-2">
            <p>Tipo</p>
            <Input
              type="text"
              required
              value={itemData.tipo}
              onChange={onTipoChange}
            />
          </div>
        </CardBody>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            className="w-full hover:bg-blue-500 transition-colors"
          >
            Confirm
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
