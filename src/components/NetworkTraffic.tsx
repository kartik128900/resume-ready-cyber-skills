
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network } from "lucide-react";
import { networkTrafficData } from "@/data/securityData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const NetworkTraffic = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Network className="h-5 w-5 text-primary" />
          <span>Network Traffic</span>
        </CardTitle>
        <Tabs defaultValue="12h">
          <TabsList className="grid h-7 w-[240px] grid-cols-3">
            <TabsTrigger value="1h">1h</TabsTrigger>
            <TabsTrigger value="12h">12h</TabsTrigger>
            <TabsTrigger value="24h">24h</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={networkTrafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorOutbound" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <XAxis dataKey="time" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}GB`} />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(17, 24, 39, 0.9)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#fff'
              }}
              itemStyle={{ padding: 0, margin: 0 }}
            />
            <Area type="monotone" dataKey="inbound" stroke="#3B82F6" fillOpacity={1} fill="url(#colorInbound)" name="Inbound" />
            <Area type="monotone" dataKey="outbound" stroke="#10B981" fillOpacity={1} fill="url(#colorOutbound)" name="Outbound" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="mt-1 flex justify-center gap-4 text-xs">
          <div className="flex items-center">
            <span className="mr-1 block h-2 w-2 rounded-full bg-blue-500"></span>
            <span>Inbound Traffic</span>
          </div>
          <div className="flex items-center">
            <span className="mr-1 block h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>Outbound Traffic</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkTraffic;
