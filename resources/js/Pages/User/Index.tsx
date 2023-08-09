import { Card, CardFooter } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui/section-title";
import UserLayout from "@/Layouts/user-layout";
import { Head, usePage } from "@inertiajs/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import SimplePagination from "@/Components/ui/pagination";

export default function Index() {
  const { data: users, meta, links } = usePage<any>().props.users;

  return (
    <div>
      <Head title="Users" />

      <Card>
        <SectionTitle title="Users" description="Welcome to users list" />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0
              ? (
                <>
                  {users.map((user: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell className="w-0">{meta.from + index}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.created_at}</TableCell>
                      <TableCell>Options</TableCell>
                    </TableRow>
                  ))}
                </>
              )
              : (
                <TableRow>
                  <TableCell rowSpan={5}></TableCell>
                </TableRow>
              )}
          </TableBody>
        </Table>

        <CardFooter className="flex items-center justify-between pt-6">
          <span className="text-muted-foreground text-sm">
            Showing you {meta.to} of {meta.total} users.
          </span>
          <SimplePagination links={links}/>
        </CardFooter>
      </Card>
    </div>
  );
}

Index.layout = (page: React.ReactNode) => <UserLayout children={page} />;
