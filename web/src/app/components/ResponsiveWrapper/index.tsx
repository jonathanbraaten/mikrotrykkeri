import clsx from 'clsx';
type ResponsiveWrapperProps = {
  className?: string;

  children: React.ReactNode;
};
export default function ResponsiveWrapper({ className, children }: ResponsiveWrapperProps) {
  return <div className={clsx(className, 'max-w-[95%] mx-auto')}>{children}</div>;
}
