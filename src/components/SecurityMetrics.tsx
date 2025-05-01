
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ShieldCheck, ShieldAlert, Database, Wifi } from "lucide-react";
import { securityMetrics } from "@/data/securityData";

const SecurityMetrics = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {/* Vulnerabilities Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
          <ShieldAlert className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{securityMetrics.vulnerabilities.total}</div>
          <div className="mt-4 grid grid-cols-4 gap-2 text-xs">
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="mt-1">{securityMetrics.vulnerabilities.critical}</span>
              <span className="text-muted-foreground">Critical</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              <span className="mt-1">{securityMetrics.vulnerabilities.high}</span>
              <span className="text-muted-foreground">High</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span className="mt-1">{securityMetrics.vulnerabilities.medium}</span>
              <span className="text-muted-foreground">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="mt-1">{securityMetrics.vulnerabilities.low}</span>
              <span className="text-muted-foreground">Low</span>
            </div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            <span className={securityMetrics.vulnerabilities.change < 0 ? "text-green-500" : "text-red-500"}>
              {securityMetrics.vulnerabilities.change < 0 ? "↓" : "↑"} {Math.abs(securityMetrics.vulnerabilities.change)}
            </span> from last week
          </div>
        </CardContent>
      </Card>

      {/* Threat Events Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Threat Events</CardTitle>
          <ShieldCheck className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{securityMetrics.threatEvents.total}</div>
          <div className="mt-4 flex justify-between text-xs">
            <div>
              <div className="text-green-500">{securityMetrics.threatEvents.blocked}</div>
              <div className="text-muted-foreground">Blocked</div>
            </div>
            <div>
              <div className="text-amber-500">{securityMetrics.threatEvents.investigating}</div>
              <div className="text-muted-foreground">Investigating</div>
            </div>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            <span className="text-red-500">
              ↑ {securityMetrics.threatEvents.change}
            </span> from last week
          </div>
        </CardContent>
      </Card>

      {/* Patch Status Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Patch Status</CardTitle>
          <Database className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{securityMetrics.patchStatus.percentage}%</div>
          <Progress value={securityMetrics.patchStatus.percentage} className="mt-2" />
          <div className="mt-4 flex justify-between text-xs">
            <div>
              <div>{securityMetrics.patchStatus.upToDate}</div>
              <div className="text-muted-foreground">Up to Date</div>
            </div>
            <div>
              <div className="text-amber-500">{securityMetrics.patchStatus.pending}</div>
              <div className="text-muted-foreground">Pending</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Score Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Security Score</CardTitle>
          <Wifi className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{securityMetrics.securityScore}/100</div>
          <div className="mt-2">
            <Progress 
              value={securityMetrics.securityScore} 
              className="h-2"
              indicatorClassName={
                securityMetrics.securityScore >= 80 ? "bg-green-500" :
                securityMetrics.securityScore >= 60 ? "bg-amber-500" : "bg-red-500"
              }
            />
          </div>
          <div className="mt-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="block h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-muted-foreground">Good (80-100)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-2 w-2 rounded-full bg-amber-500"></span>
              <span className="text-muted-foreground">Needs Improvement (60-79)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="block h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-muted-foreground">At Risk (0-59)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecurityMetrics;
