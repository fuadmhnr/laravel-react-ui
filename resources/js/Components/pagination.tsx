import { Link } from '@inertiajs/react';
import { Button } from './button';

interface Props {
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

export default function SimplePagination({ links }: Props) {
  return (
    <div className='flex-items-center gap-x-1'>
      {links.prev !== null ? (
        <Button asChild className='rounded-full text-xs px-6 mr-2' variant='outline' size='sm'>
          <Link preserveState preserveScroll href={links.prev}>
            Prev
          </Link>
        </Button>
      ) : (
        <Button
          asChild
          className='rounded-full text-xs px-6 mr-2'
          variant='outline'
          size='sm'
          disabled
        >
          <span>Prev</span>
        </Button>
      )}

      {links.next !== null ? (
        <Button asChild className='rounded-full text-xs px-6' variant='outline' size='sm'>
          <Link preserveScroll preserveState href={links.next}>
            Next
          </Link>
        </Button>
      ) : (
        <Button asChild className='rounded-full text-xs px-6' variant='outline' size='sm' disabled>
          <span>Next</span>
        </Button>
      )}
    </div>
  );
}
