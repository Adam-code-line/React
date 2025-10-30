import SideNav from './nav-link';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans">
            <SideNav />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}