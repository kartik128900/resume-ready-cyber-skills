
import React from "react";
import DashboardHeader from "./DashboardHeader";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className={cn("container mx-auto px-4 py-6", className)}>
        {children}
      </main>
      <footer className="border-t border-border py-4">
        <div className="container mx-auto text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cybersecurity Toolkit. Built for resume demonstration purposes.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
