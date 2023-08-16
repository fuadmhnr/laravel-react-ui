import { cn } from '@/lib/utils';
import * as icons from '@tabler/icons-react';
import { TablerIconsProps } from '@tabler/icons-react';
import { FC } from 'react';

interface IconProps extends TablerIconsProps {
  name: keyof typeof icons;
  className?: string;
}

export function Icon({ className, name, ...props }: IconProps) {
  const TablerIcon = icons[name] as FC<TablerIconsProps>;
  return <TablerIcon className={cn('w-5 h-5 stroke-[1.25]', className)} {...props} />;
}
