
export const securityMetrics = {
  vulnerabilities: {
    total: 47,
    critical: 8,
    high: 12,
    medium: 15,
    low: 12,
    change: -4,
  },
  threatEvents: {
    total: 284,
    blocked: 279,
    investigating: 5,
    change: +12,
  },
  patchStatus: {
    total: 124,
    upToDate: 98,
    pending: 26,
    percentage: 79,
  },
  securityScore: 78,
};

export const vulnerabilityScanResults = [
  { id: 1, name: 'CVE-2023-7891', severity: 'Critical', system: 'Web Server', status: 'Open', dateDetected: '2023-04-28' },
  { id: 2, name: 'CVE-2023-5432', severity: 'High', system: 'Database', status: 'Mitigated', dateDetected: '2023-04-25' },
  { id: 3, name: 'CVE-2022-9876', severity: 'Medium', system: 'API Gateway', status: 'Patched', dateDetected: '2023-04-22' },
  { id: 4, name: 'CVE-2023-1122', severity: 'Critical', system: 'Authentication Service', status: 'Open', dateDetected: '2023-04-20' },
  { id: 5, name: 'CVE-2022-7654', severity: 'Medium', system: 'Load Balancer', status: 'Patched', dateDetected: '2023-04-18' },
];

export const networkTrafficData = [
  { time: '00:00', inbound: 42, outbound: 35 },
  { time: '01:00', inbound: 38, outbound: 30 },
  { time: '02:00', inbound: 35, outbound: 28 },
  { time: '03:00', inbound: 30, outbound: 25 },
  { time: '04:00', inbound: 28, outbound: 22 },
  { time: '05:00', inbound: 32, outbound: 28 },
  { time: '06:00', inbound: 48, outbound: 40 },
  { time: '07:00', inbound: 75, outbound: 65 },
  { time: '08:00', inbound: 95, outbound: 85 },
  { time: '09:00', inbound: 115, outbound: 100 },
  { time: '10:00', inbound: 125, outbound: 110 },
  { time: '11:00', inbound: 130, outbound: 115 },
  { time: '12:00', inbound: 135, outbound: 120 },
];

export const threatFeedData = [
  {
    id: 1,
    title: 'New Ransomware Variant Targeting Healthcare Sector',
    severity: 'Critical',
    source: 'CISA',
    date: '2023-04-28',
    summary: 'A new ransomware variant named "BlackCat" has been observed targeting healthcare organizations with sophisticated encryption techniques.'
  },
  {
    id: 2,
    title: 'Critical Vulnerability in Popular JavaScript Library',
    severity: 'High',
    source: 'NVD',
    date: '2023-04-27',
    summary: 'A remote code execution vulnerability has been discovered in a widely used JavaScript library affecting millions of websites.'
  },
  {
    id: 3,
    title: 'State-Sponsored APT Group Targeting Energy Sector',
    severity: 'High',
    source: 'FBI Alert',
    date: '2023-04-26',
    summary: 'A state-sponsored advanced persistent threat group has been observed targeting critical infrastructure in the energy sector.'
  },
  {
    id: 4,
    title: 'New Phishing Campaign Impersonating Financial Institutions',
    severity: 'Medium',
    source: 'US-CERT',
    date: '2023-04-25',
    summary: 'A sophisticated phishing campaign impersonating major banks has been observed, using convincing templates to steal credentials.'
  },
  {
    id: 5,
    title: 'Bluetooth Vulnerability Affecting IoT Devices',
    severity: 'Medium',
    source: 'NVD',
    date: '2023-04-24',
    summary: 'A new vulnerability in Bluetooth Low Energy protocol impacts a wide range of IoT devices, potentially allowing unauthorized access.'
  },
];
