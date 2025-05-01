
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ExternalLink } from "lucide-react";
import { threatFeedData } from "@/data/securityData";

const ThreatFeed = () => {
  const getSeverityBadge = (severity: string) => {
    const baseClasses = "inline-block rounded-full px-2 py-0.5 text-xs";
    switch (severity.toLowerCase()) {
      case "critical": return `${baseClasses} bg-red-500/20 text-red-500`;
      case "high": return `${baseClasses} bg-amber-500/20 text-amber-500`;
      case "medium": return `${baseClasses} bg-yellow-500/20 text-yellow-500`;
      case "low": return `${baseClasses} bg-blue-500/20 text-blue-500`;
      default: return `${baseClasses} bg-muted text-muted-foreground`;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span>Threat Intelligence Feed</span>
        </CardTitle>
        <div className="text-xs text-muted-foreground">Updated 14 minutes ago</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threatFeedData.map((threat) => (
            <div key={threat.id} className="rounded-md border border-border p-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-medium">{threat.title}</h3>
                <div className={getSeverityBadge(threat.severity)}>
                  {threat.severity}
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <div className="text-muted-foreground">
                  <span>Source: {threat.source}</span>
                  <span className="mx-2">•</span>
                  <span>{threat.date}</span>
                </div>
                <a href="#" className="flex items-center text-primary hover:underline">
                  <span>Details</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{threat.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <a href="#" className="text-xs text-primary hover:underline">
            View All Threat Intelligence
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatFeed;
