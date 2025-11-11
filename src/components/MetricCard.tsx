import { ReactNode } from "react";
import { Progress } from "./ui/progress";

interface MetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  variant?: "primary" | "success" | "warning" | "default";
  progress?: number;
}

export function MetricCard({ title, value, icon, variant = "default", progress }: MetricCardProps) {
  const variantStyles = {
    primary: "bg-blue-50 border-blue-200",
    success: "bg-green-50 border-green-200",
    warning: "bg-amber-50 border-amber-200",
    default: "bg-white border-slate-200",
  };

  const iconStyles = {
    primary: "text-blue-600",
    success: "text-green-600",
    warning: "text-amber-600",
    default: "text-slate-600",
  };

  const valueStyles = {
    primary: "text-blue-700",
    success: "text-green-700",
    warning: "text-amber-700",
    default: "text-slate-900",
  };

  return (
    <div
      className={`${variantStyles[variant]} rounded-lg shadow-sm border p-6 hover:shadow-md transition-all hover:scale-105 duration-200`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-slate-600">{title}</span>
        <div className={iconStyles[variant]}>{icon}</div>
      </div>
      <div className={`${valueStyles[variant]} mb-2`}>{value}</div>
      {progress !== undefined && (
        <div className="mt-3">
          <Progress value={progress} className="h-2" />
          <span className="text-xs text-slate-500 mt-1 block">{progress}% utilized</span>
        </div>
      )}
    </div>
  );
}
