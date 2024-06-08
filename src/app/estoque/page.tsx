import { Plant, columns } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

async function getData(): Promise<Plant[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, ninguém pode",
      local: "Armário",
      price: 5.99,
      quantity: 15,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, pode sim",
      local: "Armário",
      price: 2.49,
      quantity: 25,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, talvez possa",
      local: "Armário",
      price: 4.99,
      quantity: 35,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, pode?",
      local: "Armário",
      price: 3.99,
      quantity: 40,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, poderia",
      local: "Armário",
      price: 6.99,
      quantity: 100,
    },
    // ...
  ];
}

export default async function Estoque() {
  const data = await getData();
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Estoque</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex items-center justify-between mb-4">
        <h2 className="mt-5 text-4xl font-semibold">Plantas</h2>
        <Link href="/estoque/novo-item">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Novo item
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
