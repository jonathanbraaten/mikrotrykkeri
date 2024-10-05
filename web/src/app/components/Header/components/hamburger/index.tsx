import { RxHamburgerMenu } from 'react-icons/rx';

type Props = {
  onClick: () => void;
};
export default function HamburgerButton({ onClick }: Props) {
  return (
    <button onClick={onClick} className="flex gap-1 bg-slate-100 rounded-full py-1 px-2 md:hidden">
      <span> Meny</span>
      <RxHamburgerMenu size={24} />
    </button>
  );
}
