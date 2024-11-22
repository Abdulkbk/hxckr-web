export const GitPushContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full rounded-b-lg overflow-hidden">
      {children}
    </div>
  );
};