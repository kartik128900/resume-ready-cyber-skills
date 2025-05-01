
import React from "react";
import { Shield, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-foreground">SecGuardian</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="text-sm font-medium text-foreground hover:text-primary">Dashboard</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Scans</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Threats</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">Reports</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
