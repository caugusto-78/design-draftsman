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
  TrendingUp,
  Home,
  Search,
  File,
  Link,
  Share2,
  Video,
  TreePine,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight
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

  // Tipologias de conteúdo para o carrossel
  const contentTypes = [
    { name: "File", icon: File, description: "PDFs, documentos", color: "bg-blue-100 text-blue-600" },
    { name: "URL", icon: Link, description: "Links para websites", color: "bg-green-100 text-green-600" },
    { name: "Redes Sociais", icon: Share2, description: "Instagram, Facebook", color: "bg-purple-100 text-purple-600" },
    { name: "LinkTree", icon: TreePine, description: "Múltiplos links", color: "bg-orange-100 text-orange-600" },
    { name: "Video", icon: Video, description: "YouTube, Vimeo", color: "bg-red-100 text-red-600" },
    { name: "Email", icon: Mail, description: "Contacto direto", color: "bg-cyan-100 text-cyan-600" },
    { name: "Telefone", icon: Phone, description: "Chamada direta", color: "bg-emerald-100 text-emerald-600" },
    { name: "Localização", icon: MapPin, description: "Google Maps", color: "bg-indigo-100 text-indigo-600" }
  ];

  const workspaces = [
    { name: "Meu Primeiro Workspace", active: true },
    { name: "Empresa XYZ", active: false },
    { name: "Projeto Pessoal", active: false }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/30 flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <QrCode className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">MiMeCode</span>
          </div>
          
          {/* Menu Principal */}
          <nav className="space-y-2 mb-8">
            <Button variant="secondary" className="w-full justify-start gap-3">
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Search className="w-4 h-4" />
              Pesquisar
            </Button>
          </nav>

          {/* Workspaces */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Workspaces</h3>
            <div className="space-y-1">
              {workspaces.map((workspace, index) => (
                <Button 
                  key={index} 
                  variant={workspace.active ? "secondary" : "ghost"} 
                  className="w-full justify-start gap-3 text-sm"
                  size="sm"
                >
                  <FolderOpen className="w-4 h-4" />
                  {workspace.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b bg-muted/30">
          <div className="px-6 py-4">
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Main Content Area */}
          <div className="flex-1 px-6 py-8 space-y-8 overflow-auto">
            
            {/* Primary CTAs */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">Comece Agora</h2>
                <p className="text-muted-foreground">Escolha uma das ações principais para começar</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6">
                    <Button className="w-full h-auto p-6 text-lg" size="lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                          <QrCode className="w-7 h-7" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-lg">Criar QR Code</div>
                          <div className="text-sm opacity-90">Comece a criar o seu primeiro QR Code</div>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <Button variant="outline" className="w-full h-auto p-6 text-lg border-0 bg-white/50 hover:bg-white/80" size="lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                          <FolderOpen className="w-7 h-7 text-blue-600" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-lg text-blue-900">Novo Workspace</div>
                          <div className="text-sm text-blue-700">Organize os seus projetos por categorias</div>
                        </div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Secondary Actions */}
              <div className="flex gap-4 justify-center pt-4">
                <Button variant="ghost" size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Templates
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Tutorial (3 min)
                </Button>
              </div>
            </div>

            {/* Content Types Carousel */}
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-2">Tipologias de Conteúdo</h2>
                <p className="text-sm text-muted-foreground">Escolha o tipo de conteúdo para o seu QR Code</p>
              </div>
              
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {contentTypes.map((type, index) => (
                    <Card key={index} className="min-w-[200px] hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${type.color}`}>
                            <type.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{type.name}</h3>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Estatísticas Rápidas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <QrCode className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">{stats.qrCodes}</p>
                        <p className="text-xs text-muted-foreground">QR Codes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">{stats.scans}</p>
                        <p className="text-xs text-muted-foreground">Total Scans</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">{stats.workspaces}</p>
                        <p className="text-xs text-muted-foreground">Workspaces</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold">+24%</p>
                        <p className="text-xs text-muted-foreground">vs. semana passada</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent QR Codes */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Conteúdo Recente
                    </CardTitle>
                    <CardDescription>
                      Os seus QR Codes criados recentemente
                    </CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentQrCodes.map((qr, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-background rounded border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                          <QrCode className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{qr.name}</p>
                          <p className="text-xs text-muted-foreground">{qr.type} • {qr.created}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{qr.scans}</p>
                        <p className="text-xs text-muted-foreground">scans</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Account & Upgrade */}
          <div className="w-80 border-l bg-muted/30 p-6 space-y-6">
            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <FolderOpen className="w-4 h-4 text-primary" />
                  Workspace Atual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-sm">{selectedWorkspace}</h3>
                    <Badge variant="secondary" className="text-xs">Ativo</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>QR Codes utilizados</span>
                      <span>3 / ∞</span>
                    </div>
                    <Progress value={30} className="h-1" />
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Gerir Workspace
                </Button>
              </CardContent>
            </Card>

            {/* Account Limits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Limites da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>QR Codes criados</span>
                    <span className="font-medium">3 / ∞</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Scans este mês</span>
                    <span className="font-medium">127 / ∞</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Workspaces</span>
                    <span className="font-medium">1 / 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Card */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Zap className="w-4 h-4 text-primary" />
                  Desbloqueie Funcionalidades Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <QrCode className="w-3 h-3 text-green-600" />
                    <span>QR Codes ilimitados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BarChart3 className="w-3 h-3 text-green-600" />
                    <span>Analytics avançados</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-3 h-3 text-green-600" />
                    <span>Colaboração em equipa</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Settings className="w-3 h-3 text-green-600" />
                    <span>Personalização avançada</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-3 h-3 text-green-600" />
                    <span>Suporte prioritário</span>
                  </div>
                </div>
                
                <Button className="w-full" size="sm">
                  Fazer Upgrade
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Help Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start h-auto p-2" size="sm">
                  <PlayCircle className="w-3 h-3 mr-2" />
                  <div className="text-left">
                    <div className="font-medium text-xs">Tutorial de 3 min</div>
                  </div>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start h-auto p-2" size="sm">
                  <FileText className="w-3 h-3 mr-2" />
                  <div className="text-left">
                    <div className="font-medium text-xs">Documentação</div>
                  </div>
                </Button>
                
                <Button variant="ghost" className="w-full justify-start h-auto p-2" size="sm">
                  <Users className="w-3 h-3 mr-2" />
                  <div className="text-left">
                    <div className="font-medium text-xs">Suporte</div>
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