import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  QrCode, 
  FolderOpen, 
  BarChart3, 
  Settings, 
  Plus, 
  Zap, 
  Clock, 
  Users,
  FileText,
  PlayCircle,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";

const ImprovedDashboard = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState("Meu Primeiro Workspace");

  // Dados simulados
  const stats = {
    qrCodes: 3,
    scans: 127,
    workspaces: 1,
    daysLeft: 12
  };

  const recentQrCodes = [
    { name: "QR - Website Principal", type: "Website", scans: 45, created: "há 2 dias" },
    { name: "QR - vCard João Silva", type: "vCard", scans: 23, created: "há 3 dias" },
    { name: "QR - Menu Restaurante", type: "PDF", scans: 59, created: "há 1 semana" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Olá, João! 👋</h1>
              <p className="text-muted-foreground">Bem-vindo de volta ao seu dashboard MiMeCode</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Zap className="w-3 h-3 mr-1" />
                {stats.daysLeft} dias de trial
              </Badge>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Criar QR Code
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <QrCode className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.qrCodes}</p>
                  <p className="text-sm text-muted-foreground">QR Codes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.scans}</p>
                  <p className="text-sm text-muted-foreground">Total Scans</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stats.workspaces}</p>
                  <p className="text-sm text-muted-foreground">Workspaces</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">+24%</p>
                  <p className="text-sm text-muted-foreground">vs. semana passada</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Ações Rápidas
                </CardTitle>
                <CardDescription>
                  Comece aqui para criar ou gerir os seus QR Codes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 justify-start" size="lg">
                    <div className="flex items-center gap-3">
                      <QrCode className="w-6 h-6 text-primary" />
                      <div className="text-left">
                        <div className="font-semibold">Criar QR Code</div>
                        <div className="text-sm text-muted-foreground">Website, vCard, PDF...</div>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start" size="lg">
                    <div className="flex items-center gap-3">
                      <FolderOpen className="w-6 h-6 text-blue-600" />
                      <div className="text-left">
                        <div className="font-semibold">Novo Workspace</div>
                        <div className="text-sm text-muted-foreground">Organize os seus projetos</div>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start" size="lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-green-600" />
                      <div className="text-left">
                        <div className="font-semibold">Templates</div>
                        <div className="text-sm text-muted-foreground">Use exemplos prontos</div>
                      </div>
                    </div>
                  </Button>

                  <Button variant="outline" className="h-auto p-4 justify-start" size="lg">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-6 h-6 text-purple-600" />
                      <div className="text-left">
                        <div className="font-semibold">Tutorial</div>
                        <div className="text-sm text-muted-foreground">Aprenda em 3 minutos</div>
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent QR Codes */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      QR Codes Recentes
                    </CardTitle>
                    <CardDescription>
                      Os seus QR Codes mais recentes e estatísticas
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQrCodes.map((qr, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-background rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                          <QrCode className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{qr.name}</p>
                          <p className="text-sm text-muted-foreground">{qr.type} • {qr.created}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{qr.scans}</p>
                        <p className="text-sm text-muted-foreground">scans</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Workspace & Upgrade */}
          <div className="space-y-6">
            {/* Current Workspace */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  Workspace Atual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{selectedWorkspace}</h3>
                    <Badge variant="secondary">Ativo</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    O seu workspace principal para todos os projetos
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>QR Codes utilizados</span>
                      <span>3 / ∞</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Gerir Workspace
                </Button>
              </CardContent>
            </Card>

            {/* Upgrade Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Upgrade para Pro
                </CardTitle>
                <CardDescription>
                  Desbloqueie todas as funcionalidades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <QrCode className="w-4 h-4 text-green-600" />
                    <span>QR Codes ilimitados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="w-4 h-4 text-green-600" />
                    <span>Analytics avançados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-green-600" />
                    <span>Colaboração em equipa</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold">€19</p>
                    <p className="text-sm text-muted-foreground">por mês</p>
                  </div>
                  <Button className="w-full">
                    Fazer Upgrade
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start h-auto p-3">
                  <PlayCircle className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Tutorial de 3 min</div>
                    <div className="text-xs text-muted-foreground">Como criar o primeiro QR</div>
                  </div>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start h-auto p-3">
                  <FileText className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Documentação</div>
                    <div className="text-xs text-muted-foreground">Guias detalhados</div>
                  </div>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start h-auto p-3">
                  <Users className="w-4 h-4 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">Suporte</div>
                    <div className="text-xs text-muted-foreground">Contacte a nossa equipa</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedDashboard;