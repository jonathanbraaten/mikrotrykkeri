import clsx from 'clsx';
type ResponsiveWrapperProps = {
  fullHeight?: string;
  children: React.ReactNode;
};
export default function ResponsiveWrapper({ fullHeight, children }: ResponsiveWrapperProps) {
  return (
    <div
      className={clsx('bg-red-500 max-w-[95%] mx-auto', {
        'h-full': fullHeight,
      })}
    >
      {children}
    </div>
  );
}
