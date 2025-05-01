
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Lock, Check, X } from "lucide-react";

const PasswordAnalyzer = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Password strength calculation
  const calculateStrength = (pass: string): number => {
    if (!pass) return 0;
    
    let score = 0;
    
    // Length check
    if (pass.length >= 12) score += 25;
    else if (pass.length >= 8) score += 15;
    else if (pass.length >= 5) score += 5;
    
    // Complexity checks
    if (/[A-Z]/.test(pass)) score += 15;
    if (/[a-z]/.test(pass)) score += 10;
    if (/[0-9]/.test(pass)) score += 15;
    if (/[^A-Za-z0-9]/.test(pass)) score += 20;
    
    // Variety check
    const uniqueChars = new Set(pass).size;
    score += Math.min(15, uniqueChars * 2);
    
    return Math.min(100, score);
  };

  const strength = calculateStrength(password);
  
  const getStrengthLabel = (score: number): string => {
    if (score >= 80) return "Strong";
    if (score >= 60) return "Good";
    if (score >= 40) return "Medium";
    if (score >= 20) return "Weak";
    return "Very Weak";
  };
  
  const getStrengthColor = (score: number): string => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-emerald-500";
    if (score >= 40) return "bg-amber-500";
    if (score >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          <span>Password Strength Analyzer</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter a password to analyze"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <Button variant="outline" onClick={() => setPassword("")}>
            Clear
          </Button>
        </div>
        
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm">Password Strength: {getStrengthLabel(strength)}</span>
            <span className="text-sm">{strength}%</span>
          </div>
          <Progress value={strength} className={getStrengthColor(strength)} />
        </div>
        
        <div className="mt-6 grid gap-3 text-sm">
          <div className="flex items-center gap-2">
            {password.length >= 8 ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={password.length >= 8 ? "" : "text-muted-foreground"}>
              At least 8 characters
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/[A-Z]/.test(password) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={/[A-Z]/.test(password) ? "" : "text-muted-foreground"}>
              Contains uppercase letters
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/[0-9]/.test(password) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={/[0-9]/.test(password) ? "" : "text-muted-foreground"}>
              Contains numbers
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/[^A-Za-z0-9]/.test(password) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <X className="h-4 w-4 text-muted-foreground" />
            )}
            <span className={/[^A-Za-z0-9]/.test(password) ? "" : "text-muted-foreground"}>
              Contains special characters
            </span>
          </div>
        </div>
        
        {password && strength < 60 && (
          <div className="mt-4 rounded-md bg-amber-500/10 p-3 text-sm text-amber-500">
            <p className="font-medium">Password Security Recommendation</p>
            <p className="mt-1">
              Consider using a combination of uppercase, lowercase, numbers and special characters 
              to improve your password strength.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PasswordAnalyzer;
