import { cn } from '@/lib/utils';
import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({
  active = false,
  ...props
}: InertiaLinkProps & { active?: boolean }) {
  return (
    <Link
      {...props}
      className={cn(
        'hover:text-foreground transition duration-200 py-2 px-4',
        active ? 'text-foreground font-semibold' : 'text-muted-foreground',
      )}
    />
  );
}
