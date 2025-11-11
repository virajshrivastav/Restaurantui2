import { Store, TrendingUp, DollarSign, ChefHat, Tag, Zap, Grid3x3 } from "lucide-react";
import { MetricCard } from "./components/MetricCard";
import { ManagementCard } from "./components/ManagementCard";
import { PromotionalSection } from "./components/PromotionalSection";
import { Badge } from "./components/ui/badge";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Store className="w-8 h-8 text-blue-600" />
                <h1 className="text-slate-900">Cafe Delight</h1>
              </div>
              <div className="flex items-center gap-4 text-slate-600">
                <span className="text-sm">RESID-195286</span>
                <span className="text-sm">•</span>
                <span className="text-sm">KP, Pune</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors text-sm">
                WhatsApp
              </button>
              <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors text-sm">
                Mail
              </button>
            </div>
          </div>
        </header>

        {/* Operational Metrics Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MetricCard
            title="Active Draws"
            value="3"
            icon={<Grid3x3 className="w-5 h-5" />}
            variant="primary"
          />
          <MetricCard
            title="ZVD.PO"
            value="30/rs."
            icon={<TrendingUp className="w-5 h-5" />}
            variant="success"
          />
          <MetricCard
            title="ADS Budget"
            value="20,000/-"
            progress={65}
            icon={<DollarSign className="w-5 h-5" />}
            variant="warning"
          />
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-2">
              <ChefHat className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-600">Cuisine</span>
            </div>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200">
              North Indian
            </Badge>
          </div>
        </div>

        {/* Management Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <ManagementCard
            title="NCN"
            subtitle="Perceived"
            items={[
              { label: "Bacon", value: "2" },
              { label: "Push Side", value: "-" },
              { label: "Relax Tunnels", value: "-" },
              { label: "Close", value: "2" },
              { label: "Flash Side", value: "-" },
              { label: "Suggested items", value: "2" },
            ]}
            sections={[
              { title: "Active", count: 2 },
              { title: "Suggested", count: 3 },
            ]}
          />
          <ManagementCard
            title="N2R"
            subtitle="Current Codes"
            items={[
              { label: "LT", value: "MM" },
              { label: "EA", value: "MM" },
              { label: "CASO", value: "-" },
              { label: "Key Connector", value: "-" },
              { label: "Recommended codes", value: "MM" },
              { label: "Connected night", value: "MM" },
            ]}
            hasApprovalSection
          />
          <ManagementCard
            title="Dish Suggestions"
            items={[
              { label: "Priority", value: "P.O" },
              { label: "Push-back reignite", value: "-" },
              { label: "Items under IDEN", value: "2NT" },
            ]}
            hasPendingItems
            pendingNote="Items to be added"
          />
        </div>

        {/* Promotional Planning Section */}
        <PromotionalSection />

        {/* Comments/Notes Section */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-slate-600" />
            <h3 className="text-slate-900">Comments / Notes</h3>
          </div>
          <textarea
            className="w-full min-h-[100px] p-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 resize-y"
            placeholder="Add your notes here..."
          />
        </div>
      </div>
    </div>
  );
}
