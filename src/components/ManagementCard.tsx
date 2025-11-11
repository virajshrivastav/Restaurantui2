import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";

interface ManagementCardProps {
  title: string;
  subtitle?: string;
  items: Array<{ label: string; value: string }>;
  sections?: Array<{ title: string; count: number }>;
  hasApprovalSection?: boolean;
  hasPendingItems?: boolean;
  pendingNote?: string;
}

export function ManagementCard({
  title,
  subtitle,
  items,
  sections,
  hasApprovalSection,
  hasPendingItems,
  pendingNote,
}: ManagementCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-900">{title}</h3>
            {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Items Grid */}
        <div className="space-y-2 mb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded hover:bg-slate-50 transition-colors"
            >
              <span className="text-sm text-slate-600">{item.label}</span>
              <span className="text-sm text-slate-900">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Sections */}
        {sections && (
          <div className="grid grid-cols-2 gap-2 mt-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded p-3 border border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-xs text-slate-600">{section.title}</span>
                </div>
                <div className="text-slate-900 mt-1">{section.count}</div>
              </div>
            ))}
          </div>
        )}

        {/* Approval Section */}
        {hasApprovalSection && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-slate-600">Approval Status</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Approved
              </Badge>
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                Converted
              </Badge>
            </div>
          </div>
        )}

        {/* Pending Items */}
        {hasPendingItems && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-amber-900">{pendingNote}</p>
                <div className="flex gap-2 mt-2">
                  {["Flash Sale", "↓ Spend 50", "↓ Save ₹0"].map((item, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-white border-amber-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
