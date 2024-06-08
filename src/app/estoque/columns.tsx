"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Plant = {
  id: string;
  image?: string;
  name?: string;
  code?: string;
  local?: string;
  price?: number;
  quantity?: number;
};

export const columns: ColumnDef<Plant>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => {
      const image: string = row.getValue("image");
      return (
        <Avatar className="rounded-md h-16 w-16">
          <AvatarImage src={image} />
        </Avatar>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "local",
    header: "Local",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Quantidade</div>,
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"));
      const formatted = new Intl.NumberFormat("pt-BR").format(quantity);

      return <div className="text-center font-bold">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <div className="flex justify-end">
          <Button variant="ghost" size="icon">
            <InfoIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-4 w-4 text-red-600" />
          </Button>
        </div>
      );
    },
  },
];
