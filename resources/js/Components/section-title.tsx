import { CardDescription, CardHeader, CardTitle } from './card';

export default function SectionTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  );
}
