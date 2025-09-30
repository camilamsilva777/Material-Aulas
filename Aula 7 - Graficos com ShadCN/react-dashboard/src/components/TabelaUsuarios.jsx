import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function TabelaUsuarios() {

    const API_URL= import.meta.env.VITE_API_URL;
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((pegaItem) => (
          <TableRow key={pegaItem.id}>
            <TableCell className="font-medium">{pegaItem.id}</TableCell>
            <TableCell className="font-medium">
                <img src={pegaItem.avatar} className="w-[32px]"/>
            </TableCell>
            <TableCell>{pegaItem.name}</TableCell>
            <TableCell>{pegaItem.email}</TableCell>
            <TableCell className="flex gap-2">
                   <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline">Editar</Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you&apos;re done.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid flex-1 auto-rows-min gap-6 px-4">
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-name">Name</Label>
                            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="sheet-demo-username">Username</Label>
                            <Input id="sheet-demo-username" defaultValue="@peduarte" />
                        </div>
                        </div>
                        <SheetFooter>
                        <Button type="submit">Save changes</Button>
                        <SheetClose asChild>
                            <Button variant="outline">Close</Button>
                        </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                    </Sheet>  
                <Button>Apagar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
