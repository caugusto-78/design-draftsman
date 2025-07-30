import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  FolderOpen, 
  QrCode, 
  BarChart3, 
  Settings, 
  HelpCircle,
  Zap,
  Bell
} from "lucide-react";

import ImprovedDashboard from "./ImprovedDashboard";
import OnboardingFlow from "./OnboardingFlow";
import WorkspaceSelector from "@/components/workspace/WorkspaceSelector";

type ViewType = "onboarding" | "dashboard" | "workspaces" | "qr-codes" | "analytics";

const ImprovedPrivateArea = () => {
  const [currentView, setCurrentView] = useState<ViewType>("onboarding");
  const [showOnboarding, setShowOnboarding] = useState(true);

  // Se o onboarding foi completado, mostrar dashboard por padrão
  if (!showOnboarding && currentView === "onboarding") {
    setCurrentView("dashboard");
  }

  const renderNavigation = () => (
    <div className="border-b bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">MiMeCode</span>
            </div>
            
            {!showOnboarding && (
              <nav className="flex items-center gap-1">
                <Button 
                  variant={currentView === "dashboard" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setCurrentView("dashboard")}
                  className="gap-2"
                >
                  <Home className="w-4 h-4" />
                  Dashboard
                </Button>
                <Button 
                  variant={currentView === "workspaces" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setCurrentView("workspaces")}
                  className="gap-2"
                >
                  <FolderOpen className="w-4 h-4" />
                  Workspaces
                </Button>
                <Button 
                  variant={currentView === "qr-codes" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setCurrentView("qr-codes")}
                  className="gap-2"
                >
                  <QrCode className="w-4 h-4" />
                  QR Codes
                </Button>
                <Button 
                  variant={currentView === "analytics" ? "secondary" : "ghost"} 
                  size="sm"
                  onClick={() => setCurrentView("analytics")}
                  className="gap-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  Analytics
                </Button>
              </nav>
            )}
          </div>

          <div className="flex items-center gap-3">
            {!showOnboarding && (
              <>
                <Button variant="ghost" size="sm">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <HelpCircle className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </>
            )}
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              <Zap className="w-3 h-3 mr-1" />
              Trial: 12 dias
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (showOnboarding) {
      return (
        <OnboardingFlow 
          onComplete={() => {
            setShowOnboarding(false);
            setCurrentView("dashboard");
          }}
        />
      );
    }

    switch (currentView) {
      case "dashboard":
        return <ImprovedDashboard />;
      case "workspaces":
        return (
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Workspaces</h1>
              <p className="text-muted-foreground">
                Organize os seus QR Codes por projeto ou cliente usando workspaces dedicados
              </p>
            </div>
            <WorkspaceSelector />
          </div>
        );
      case "qr-codes":
        return (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center py-20">
              <QrCode className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">QR Codes</h2>
              <p className="text-muted-foreground mb-6">
                Gerir todos os seus QR Codes criados
              </p>
              <Button>
                <QrCode className="w-4 h-4 mr-2" />
                Criar Primeiro QR Code
              </Button>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="text-center py-20">
              <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-bold mb-2">Analytics</h2>
              <p className="text-muted-foreground mb-6">
                Estatísticas detalhadas dos seus QR Codes
              </p>
              <Button variant="outline">
                Ver Analytics
              </Button>
            </div>
          </div>
        );
      default:
        return <ImprovedDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderNavigation()}
      {renderContent()}
    </div>
  );
};

export default ImprovedPrivateArea;