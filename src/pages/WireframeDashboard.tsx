import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import WireframeHomepage from "@/components/wireframe/WireframeHomepage";
import WireframePricing from "@/components/wireframe/WireframePricing";
import WireframeLogin from "@/components/wireframe/WireframeLogin";
import { Monitor, Smartphone, Tablet, RotateCcw, Download, FileText } from "lucide-react";
import { usePdfExport } from "@/hooks/usePdfExport";

const WireframeDashboard = () => {
  const [currentView, setCurrentView] = useState<"homepage" | "pricing" | "login">("homepage");
  const [deviceView, setDeviceView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const { exportToPdf, exportAllPages } = usePdfExport();

  const renderCurrentView = () => {
    switch (currentView) {
      case "homepage":
        return <div id="wireframe-homepage"><WireframeHomepage /></div>;
      case "pricing":
        return <div id="wireframe-pricing"><WireframePricing /></div>;
      case "login":
        return <div id="wireframe-login"><WireframeLogin /></div>;
      default:
        return <div id="wireframe-homepage"><WireframeHomepage /></div>;
    }
  };

  const getCurrentPageName = () => {
    switch (currentView) {
      case "homepage":
        return "Midiacode-Homepage";
      case "pricing":
        return "Midiacode-Precos";
      case "login":
        return "Midiacode-Login";
      default:
        return "Midiacode-Homepage";
    }
  };

  const handleExportCurrentPage = () => {
    const elementId = `wireframe-${currentView}`;
    exportToPdf(elementId, getCurrentPageName());
  };

  const getDeviceClass = () => {
    switch (deviceView) {
      case "mobile":
        return "max-w-sm mx-auto";
      case "tablet":
        return "max-w-3xl mx-auto";
      default:
        return "w-full";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Controls Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Wireframe Midiacode</h1>
              <p className="text-muted-foreground">Redesign baseado em UX Audit</p>
            </div>
            
            {/* Page Navigation */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={currentView === "homepage" ? "default" : "outline"}
                onClick={() => setCurrentView("homepage")}
                size="sm"
              >
                Homepage
              </Button>
              <Button
                variant={currentView === "pricing" ? "default" : "outline"}
                onClick={() => setCurrentView("pricing")}
                size="sm"
              >
                Pricing
              </Button>
              <Button
                variant={currentView === "login" ? "default" : "outline"}
                onClick={() => setCurrentView("login")}
                size="sm"
              >
                Login
              </Button>
            </div>

            <div className="flex items-center gap-4">
              {/* Device View Controls */}
              <div className="flex gap-2 border rounded-lg p-1">
                <Button
                  variant={deviceView === "desktop" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("desktop")}
                >
                  <Monitor className="h-4 w-4" />
                </Button>
                <Button
                  variant={deviceView === "tablet" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("tablet")}
                >
                  <Tablet className="h-4 w-4" />
                </Button>
                <Button
                  variant={deviceView === "mobile" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("mobile")}
                >
                  <Smartphone className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Export Controls */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportCurrentPage}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Exportar Página
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportAllPages}
                >
                  <FileText className="w-4 h-4 mr-1" />
                  Exportar Todas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe Display */}
      <div className="py-8">
        <div className={`${getDeviceClass()} transition-all duration-300`}>
          <div className="border border-border rounded-lg overflow-hidden shadow-lg bg-card">
            {renderCurrentView()}
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🎯 Problemas Resolvidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✅ Clareza imediata do valor</p>
              <p>✅ Jornada orientada para conversão</p>
              <p>✅ Segmentação por personas</p>
              <p>✅ CTAs focados e hierarquia visual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📈 Melhorias Aplicadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Homepage com hero claro</p>
              <p>• Segmentação por perfil de utilizador</p>
              <p>• Pricing simplificado e visual</p>
              <p>• Login com onboarding contextual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔄 Próximos Passos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>1. Testar com utilizadores reais</p>
              <p>2. A/B test dos CTAs principais</p>
              <p>3. Implementar onboarding guiado</p>
              <p>4. Medir conversão por persona</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WireframeDashboard;