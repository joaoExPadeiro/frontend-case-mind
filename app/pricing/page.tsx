"use client"
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";

export default function App() {
  return (
    <div className="flex flex-col h-screen  items-center bg-white dark:bg-black">
      <h1 className="text-2xl p-4">Tabela de transações</h1>
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>USUÁRIO</TableColumn>
        <TableColumn>DESCRIÇÃO</TableColumn>
        <TableColumn>VALOR</TableColumn>
        <TableColumn>TIPO</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>João Vasconcelos</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>João Vasconcelos</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>João Vasconcelos</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>João Vasconcelos</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}
