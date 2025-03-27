
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  BarChart, 
  LogOut, 
  Menu, 
  X 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Simulate authentication
  const isAuthenticated = true;
  
  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="h-5 w-5" />,
      path: '/dashboard',
    },
    {
      name: 'Inventory',
      icon: <Package className="h-5 w-5" />,
      path: '/inventory',
    },
    {
      name: 'Customers',
      icon: <Users className="h-5 w-5" />,
      path: '/customers',
    },
    {
      name: 'Sales',
      icon: <BarChart className="h-5 w-5" />,
      path: '/sales',
    },
  ];
  
  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  
  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };
  
  // Don't render the layout on login and landing pages
  if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/') {
    return <>{children}</>;
  }
  
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Mobile sidebar toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-subtle hover:bg-white transition-all duration-200"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {/* Sidebar backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed md:relative h-full z-40 w-64 md:w-64 bg-sidebar shadow-elevation transition-all duration-300 ease-in-out",
          isOpen ? "left-0" : "-left-64 md:left-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-6 border-b border-sidebar-border">
            <h1 className="text-xl font-semibold tracking-tight">SalesHub</h1>
          </div>
          
          <nav className="flex-1 py-6 px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={cn(
                  "w-full flex items-center px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
          
          <div className="p-4 border-t border-sidebar-border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-200"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container py-6 max-w-6xl animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
