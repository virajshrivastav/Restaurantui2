import { Zap, Gift, AlertCircle, Plus } from "lucide-react";
import { Badge } from "./ui/badge";

export function PromotionalSection() {
  const suggestedItems = [
    "Paneer Tikka",
    "↓ Spend ₹500",
    "↓ Save ₹0",
    "NA",
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 p-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-slate-900 flex items-center gap-2">
              BOGO / Flash Sale
              <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                Planning
              </Badge>
            </h3>
            <p className="text-sm text-slate-600 mt-1">Promotional campaigns management</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Attention Required */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="bg-orange-100 p-2 rounded-full flex-shrink-0">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-orange-900 mb-2">Action Required</h4>
              <p className="text-sm text-orange-800 mb-3">
                Suggested Items for BOGO/Flash sale to be opened
              </p>
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Open Selection
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Items Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-slate-900 flex items-center gap-2">
              <Gift className="w-5 h-5 text-purple-600" />
              Suggested Items Preview
            </h4>
            <Badge variant="outline" className="bg-slate-50">
              {suggestedItems.length} items
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                <span className="text-sm text-slate-700">{item}</span>
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              </div>
            ))}
          </div>

          {/* Campaign Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <div className="text-slate-900 mb-1">0</div>
              <div className="text-xs text-slate-600">Active Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-slate-900 mb-1">4</div>
              <div className="text-xs text-slate-600">Pending Review</div>
            </div>
            <div className="text-center">
              <div className="text-slate-900 mb-1">12</div>
              <div className="text-xs text-slate-600">Total This Month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
