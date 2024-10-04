import { HeroPageBlock } from '@/data/types/types';

type Props = {
  data: HeroPageBlock;
};
export default function HeroPageBlockComponent({ data }: Props) {
  console.log(data);
  return (
    <section>
      <h1>Hero</h1>
    </section>
  );
}
