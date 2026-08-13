import Link from "next/link";

const demoAccounts = [
  {
    role: "USER",
    label: "User",
  },
  {
    role: "AUTHOR",
    label: "Author",
  },
  {
    role: "ADMIN",
    label: "Admin",
  },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="mx-auto flex w-full max-w-md flex-col items-center">
        {/* Demo Accounts */}
        <div className="mt-6 w-full border-t pb-3">
          <p className="mb-3 text-center text-xs text-muted-foreground">
            Demo login
          </p>

          <div className="flex justify-center gap-2">
            {demoAccounts.map((account) => (
              <Link
                key={account.role}
                href={`/login?demo=${account.role}`}
                className="rounded-md border px-4 py-2 text-xs font-medium transition-colors hover:bg-muted"
              >
                {account.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
