import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Ben",
    lastName: "Rogers",
  };
  return (
    <main className="flex h-full w-full font-inter">
      <SideBar user={loggedIn} /> {children}
    </main>
  );
}
