import { Plant, columns } from "./columns";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Plant[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, ninguém pode",
      price: 5.99,
      quantity: 15,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, pode sim",
      price: 2.49,
      quantity: 25,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, talvez possa",
      price: 4.99,
      quantity: 35,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, pode?",
      price: 3.99,
      quantity: 40,
    },
    {
      id: "728ed52f",
      image:
        "https://www.jornalopcao.com.br/assets/2022/11/Comigo-ninguem-pode.webp",
      code: "BG716251",
      name: "Comigo, poderia",
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
      <DataTable columns={columns} data={data} />
    </div>
  );
}
