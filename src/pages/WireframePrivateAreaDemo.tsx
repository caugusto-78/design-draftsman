import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Monitor, 
  Tablet, 
  Smartphone,
  FileDown,
  Home,
  FolderOpen,
  QrCode,
  BarChart3
} from "lucide-react";

import ImprovedPrivateArea from "./ImprovedPrivateArea";
import OnboardingFlow from "./OnboardingFlow";
import ImprovedDashboard from "./ImprovedDashboard";
import WorkspaceSelector from "@/components/workspace/WorkspaceSelector";

type DemoView = "overview" | "onboarding" | "dashboard" | "workspaces";
type DeviceView = "desktop" | "tablet" | "mobile";

const WireframePrivateAreaDemo = () => {
  const [currentView, setCurrentView] = useState<DemoView>("overview");
  const [deviceView, setDeviceView] = useState<DeviceView>("desktop");

  const getDeviceClass = () => {
    switch (deviceView) {
      case "tablet":
        return "max-w-3xl mx-auto border-2 border-gray-300 rounded-lg overflow-hidden";
      case "mobile":
        return "max-w-sm mx-auto border-2 border-gray-300 rounded-lg overflow-hidden";
      default:
        return "w-full";
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case "onboarding":
        return <OnboardingFlow />;
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
      default:
        return <ImprovedPrivateArea />;
    }
  };

  if (currentView !== "overview") {
    return (
      <div className="min-h-screen bg-background">
        {/* Demo Controls */}
        <div className="border-b bg-muted/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setCurrentView("overview")}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
                <Badge variant="outline">Mockup Melhorado - {currentView}</Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Visualização:</span>
                <Button
                  variant={deviceView === "desktop" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("desktop")}
                >
                  <Monitor className="w-4 h-4" />
                </Button>
                <Button
                  variant={deviceView === "tablet" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("tablet")}
                >
                  <Tablet className="w-4 h-4" />
                </Button>
                <Button
                  variant={deviceView === "mobile" ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceView("mobile")}
                >
                  <Smartphone className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`${deviceView !== "desktop" ? "p-6" : ""}`}>
          <div className={getDeviceClass()}>
            {renderCurrentView()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-primary/10 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Mockups Melhorados - Área Privada
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Novos wireframes baseados no UX Audit, implementando onboarding guiado, 
              dashboard orientado à ação e clarificação do conceito de workspace.
            </p>
            <div className="flex items-center justify-center gap-2">
              <Badge variant="secondary">Screens 06-10</Badge>
              <Badge variant="outline">Área Privada</Badge>
              <Badge variant="outline">UX Melhorado</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before vs After */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="text-red-800">❌ Problemas Identificados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Sem dashboard funcional após registo</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Conceito de "workspace" não explicado</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Fluxo abrupto sem onboarding guiado</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">CTAs em excesso, foco visual confuso</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="text-green-800">✅ Soluções Implementadas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Dashboard orientado à ação com tarefas claras</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Onboarding interativo explicando workspaces</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Fluxo sequencial com progresso visível</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm">Hierarquia visual clara e CTAs focados</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mockup Previews */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Explore os Mockups Melhorados</h2>
            <p className="text-muted-foreground">
              Clique em cada mockup para ver a versão interativa completa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
              onClick={() => setCurrentView("onboarding")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <QrCode className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Onboarding Guiado</CardTitle>
                    <CardDescription>Screens 06-09 melhorados</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Fluxo interativo que introduz o conceito de workspace e guia o utilizador 
                    na criação do primeiro QR Code.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Boas-vindas</Badge>
                    <Badge variant="secondary" className="text-xs">Explicação Workspace</Badge>
                    <Badge variant="secondary" className="text-xs">Primeiro QR</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
              onClick={() => setCurrentView("dashboard")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle>Dashboard Orientado à Ação</CardTitle>
                    <CardDescription>Screen 10 melhorado</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Dashboard funcional com ações rápidas, estatísticas claras e 
                    foco na criação de conteúdo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Ações Rápidas</Badge>
                    <Badge variant="secondary" className="text-xs">Estatísticas</Badge>
                    <Badge variant="secondary" className="text-xs">Workspace Atual</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
              onClick={() => setCurrentView("workspaces")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FolderOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle>Gestão de Workspaces</CardTitle>
                    <CardDescription>Conceito clarificado</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Explicação clara do conceito de workspace com exemplos visuais 
                    e gestão simplificada.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Explicação Visual</Badge>
                    <Badge variant="secondary" className="text-xs">Criação Fácil</Badge>
                    <Badge variant="secondary" className="text-xs">Gestão</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30"
              onClick={() => setCurrentView("overview")}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Experiência Completa</CardTitle>
                    <CardDescription>Fluxo integrado</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Experiência completa da área privada com navegação entre 
                    todas as secções melhoradas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Navegação</Badge>
                    <Badge variant="secondary" className="text-xs">Integração</Badge>
                    <Badge variant="secondary" className="text-xs">UX Completo</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Metrics Summary */}
        <div className="mt-16 pt-8 border-t">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Melhorias Implementadas</h3>
            <p className="text-muted-foreground">
              Baseadas nas recomendações do UX Audit de Weinschenk & Barker + Nielsen
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2.4 → 4.2</div>
                <p className="text-sm text-muted-foreground">Score UX estimado (de 5)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <p className="text-sm text-muted-foreground">Recomendações implementadas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <p className="text-sm text-muted-foreground">Redução de fricção estimada</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WireframePrivateAreaDemo;