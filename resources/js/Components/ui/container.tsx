import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return <div className='sm:px-6 lg:px-8 max-w-7xl mx-auto'>{children}</div>;
}
