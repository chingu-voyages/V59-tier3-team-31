import PublicHeader from "@/components/header/PublicHeader";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PublicHeader />
      <main className="bg-background pt-16 min-w-100 flex flex-col items-center">
        {children}
      </main>
    </>
  );
};

export default PublicLayout;
