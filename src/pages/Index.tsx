
import React from "react";
import Layout from "@/components/Layout";
import SecurityMetrics from "@/components/SecurityMetrics";
import VulnerabilityScanner from "@/components/VulnerabilityScanner";
import NetworkTraffic from "@/components/NetworkTraffic";
import PasswordAnalyzer from "@/components/PasswordAnalyzer";
import ThreatFeed from "@/components/ThreatFeed";

const Index = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Cybersecurity Dashboard</h1>
        <p className="text-muted-foreground">Security status overview and tools</p>
      </div>

      <div className="space-y-6">
        <SecurityMetrics />

        <div className="grid gap-6 lg:grid-cols-2">
          <VulnerabilityScanner />
          <NetworkTraffic />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <PasswordAnalyzer />
          <ThreatFeed />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
