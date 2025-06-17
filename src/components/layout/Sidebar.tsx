import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // For conditional classes
import { Home, Settings, BarChart2, Users, FileText } from 'lucide-react'; // Example icons

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType; // Lucide icon component
}

const mainNavItems: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/users', label: 'User Management', icon: Users },
  { href: '/dashboard/reports', label: 'Reports', icon: FileText },
];

const secondaryNavItems: NavItem[] = [
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();
  console.log("Rendering Sidebar, current location:", location.pathname);

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <Link
        key={item.href}
        to={item.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
          location.pathname === item.href && "bg-muted text-primary"
        )}
      >
        <item.icon className="h-4 w-4" />
        {item.label}
      </Link>
    ));
  };

  return (
    <aside className={cn("hidden border-r bg-muted/40 md:block", className)}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
            {/* You can use a smaller logo version here or just text */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span>Admin Panel</span>
          </Link>
          {/* Optional: Add a small bell icon or similar for notifications here */}
        </div>
        <ScrollArea className="flex-1 py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {renderNavItems(mainNavItems)}
            {/* Optional: Add a separator or title for secondary navigation */}
            {secondaryNavItems.length > 0 && (
                <div className="my-2 px-3 text-xs font-semibold uppercase text-muted-foreground/70">
                    Account
                </div>
            )}
            {renderNavItems(secondaryNavItems)}
          </nav>
        </ScrollArea>
        {/* Optional: Add a section at the bottom of the sidebar, e.g., user profile link */}
      </div>
    </aside>
  );
};

export default Sidebar;