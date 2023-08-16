import { Card, CardFooter } from '@/components/card';
import SectionTitle from '@/components/section-title';
import UserLayout from '@/layouts/user-layout';
import { Head, usePage } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table';
import SimplePagination from '@/components/pagination';
import { UserListOptions } from './partials/user-list-options';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

export default function Index() {
  const { data: users, meta, links } = usePage<any>().props.users;

  return (
    <div>
      <Head title='Users' />

      <Card>
        <SectionTitle title='Users' description='Welcome to users list' />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>#</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Created at</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              <>
                {users.map((user: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className='w-0'>{meta.from + index}</TableCell>
                    <TableCell>
                      <div className='flex items-center font-normal'>
                        <div className='mr-3 shrink-0'>
                          <Avatar>
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.acronym}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <div>{user.name}</div>
                          <div className='text-muted-foreground'>{user.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{user.created_at}</TableCell>
                    <TableCell>
                      <div className='flex justify-end'>
                        <UserListOptions user={user} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell rowSpan={5}></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <CardFooter className='flex items-center justify-between pt-6'>
          <span className='text-muted-foreground text-sm'>
            Showing you {meta.to} of {meta.total} users.
          </span>
          <SimplePagination links={links} />
        </CardFooter>
      </Card>
    </div>
  );
}

Index.layout = (page: React.ReactNode) => <UserLayout children={page} />;
