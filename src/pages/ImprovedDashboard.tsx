import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { QrCode, FolderOpen, BarChart3, Settings, Plus, Zap, Clock, Users, FileText, PlayCircle, ArrowRight, Star, TrendingUp, Home, Search, File, Link, Share2, Video, TreePine, Mail, Phone, MapPin, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import HeroSection from "@/components/HeroSection";
const ImprovedDashboard = () => {
  const navigate = useNavigate();
  const [selectedWorkspace, setSelectedWorkspace] = useState("Meu Primeiro Workspace");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Dados simulados
  const stats = {
    qrCodes: 3,
    scans: 127,
    workspaces: 1,
    daysLeft: 12
  };
  const recentQrCodes = [{
    name: "QR - Website Principal",
    type: "Website",
    scans: 45,
    created: "há 2 dias"
  }, {
    name: "QR - vCard João Silva",
    type: "vCard",
    scans: 23,
    created: "há 3 dias"
  }, {
    name: "QR - Menu Restaurante",
    type: "PDF",
    scans: 59,
    created: "há 1 semana"
  }];

  // Tipologias de conteúdo para o carrossel
  const contentTypes = [{
    name: "File",
    icon: File,
    description: "PDFs, documentos",
    color: "bg-muted text-foreground"
  }, {
    name: "URL",
    icon: Link,
    description: "Links para websites",
    color: "bg-muted text-foreground"
  }, {
    name: "Redes Sociais",
    icon: Share2,
    description: "Instagram, Facebook",
    color: "bg-muted text-foreground"
  }, {
    name: "LinkTree",
    icon: TreePine,
    description: "Múltiplos links",
    color: "bg-muted text-foreground"
  }, {
    name: "Video",
    icon: Video,
    description: "YouTube, Vimeo",
    color: "bg-muted text-foreground"
  }, {
    name: "Email",
    icon: Mail,
    description: "Contacto direto",
    color: "bg-muted text-foreground"
  }, {
    name: "Telefone",
    icon: Phone,
    description: "Chamada direta",
    color: "bg-muted text-foreground"
  }, {
    name: "Localização",
    icon: MapPin,
    description: "Google Maps",
    color: "bg-muted text-foreground"
  }];
  const workspaces = [{
    name: "Meu Primeiro Workspace",
    initials: "MP",
    active: true
  }, {
    name: "Empresa XYZ",
    initials: "EX",
    active: false
  }, {
    name: "Projeto Pessoal",
    initials: "PP",
    active: false
  }];
  return <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-full lg:w-64'} border-b lg:border-r lg:border-b-0 bg-muted/30 flex flex-col transition-all duration-300`}>
        <div className="p-4 lg:p-6">
          <div className="flex flex-col items-center gap-4 mb-6 lg:mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
              className="shrink-0 p-2 self-start"
            >
              {isSidebarCollapsed ? <Menu className="w-4 h-4" /> : <X className="w-4 h-4" />}
            </Button>
            
            <div className={`flex items-center gap-2 ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}`}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-primary-foreground" />
              </div>
              {!isSidebarCollapsed && (
                <span className="font-bold text-lg">Midiacode</span>
              )}
            </div>
          </div>
          
          {/* Menu Principal */}
          <nav className={`flex ${isSidebarCollapsed ? 'flex-col' : 'lg:flex-col'} gap-2 mb-6 lg:mb-8 overflow-x-auto lg:overflow-x-visible`}>
            <Button variant="secondary" className={`flex-shrink-0 ${isSidebarCollapsed ? 'justify-center' : 'lg:w-full justify-start'} gap-3`}>
              <Home className="w-4 h-4" />
              {!isSidebarCollapsed && <span className="hidden sm:inline">Home</span>}
            </Button>
            <Button variant="ghost" className={`flex-shrink-0 ${isSidebarCollapsed ? 'justify-center' : 'lg:w-full justify-start'} gap-3`}>
              <Search className="w-4 h-4" />
              {!isSidebarCollapsed && <span className="hidden sm:inline">Pesquisar</span>}
            </Button>
          </nav>

          {/* Workspaces */}
          {!isSidebarCollapsed && <div className="hidden lg:block">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Workspaces</h3>
              <div className="space-y-1">
                {workspaces.map((workspace, index) => 
                  <Button key={index} variant={workspace.active ? "secondary" : "ghost"} className="w-full justify-start gap-3 text-sm" size="sm">
                    <div className="w-6 h-6 bg-muted rounded flex items-center justify-center text-xs font-bold">
                      {workspace.initials}
                    </div>
                    {workspace.name}
                  </Button>
                )}
                {/* Add New Workspace Button */}
                <Button variant="ghost" className="w-full justify-start gap-3 text-sm" size="sm">
                  <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                    <Plus className="w-4 h-4" />
                  </div>
                  Novo Workspace
                </Button>
              </div>
            </div>}
          
          {/* Collapsed Workspaces */}
          {isSidebarCollapsed && <div className="hidden lg:block space-y-1">
              {workspaces.map((workspace, index) => 
                <Button key={index} variant={workspace.active ? "secondary" : "ghost"} className="w-full justify-center" size="sm">
                  <div className="w-6 h-6 bg-muted rounded flex items-center justify-center text-xs font-bold">
                    {workspace.initials}
                  </div>
                </Button>
              )}
              {/* Add New Workspace Button - Collapsed */}
              <Button variant="ghost" className="w-full justify-center" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b bg-muted/30">
          <div className="px-4 lg:px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-foreground">Olá, João! 👋</h1>
                <p className="text-sm lg:text-base text-muted-foreground">Bem-vindo de volta ao seu dashboard MiMeCode</p>
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

        <div className="flex-1 flex flex-col xl:flex-row">
          {/* Main Content Area */}
          <div className="flex-1 px-4 lg:px-6 py-6 lg:py-8 space-y-6 lg:space-y-8 overflow-auto">
            
            {/* Hero Section */}
            <HeroSection />

            {/* Content Types Carousel */}
            <div className="space-y-4">
              <div>
                <h2 className="text-base lg:text-lg font-semibold mb-2">Tipologias de Conteúdo</h2>
                <p className="text-xs lg:text-sm text-muted-foreground">Escolha o tipo de conteúdo para o seu QR Code</p>
              </div>
              
              <div className="relative px-12">
                <Carousel opts={{
                align: "start",
                loop: true
              }} className="w-full">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {contentTypes.map((type, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                          <CardContent className="p-4">
                            <div className="flex flex-col items-center gap-3 text-center">
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${type.color}`}>
                                <type.icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="font-medium text-sm">{type.name}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{type.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>)}
                  </CarouselContent>
                  <CarouselPrevious className="hidden sm:flex" />
                  <CarouselNext className="hidden sm:flex" />
                </Carousel>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              <h2 className="text-base lg:text-lg font-semibold">Estatísticas Rápidas</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                <Card>
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded-lg flex items-center justify-center">
                        <QrCode className="w-3 h-3 lg:w-4 lg:h-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-lg lg:text-xl font-bold">{stats.qrCodes}</p>
                        <p className="text-xs text-muted-foreground">QR Codes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-lg lg:text-xl font-bold">{stats.scans}</p>
                        <p className="text-xs text-muted-foreground">Total Scans</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-3 h-3 lg:w-4 lg:h-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-lg lg:text-xl font-bold">{stats.workspaces}</p>
                        <p className="text-xs text-muted-foreground">Workspaces</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-3 lg:p-4">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-muted rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-foreground" />
                      </div>
                      <div>
                        <p className="text-lg lg:text-xl font-bold">+24%</p>
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                      <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      Conteúdo Recente
                    </CardTitle>
                    <CardDescription className="text-xs lg:text-sm">
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
                  {recentQrCodes.map((qr, index) => <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
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
                    </div>)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Account & Upgrade */}
          <div className="w-full xl:w-80 border-t xl:border-l xl:border-t-0 bg-muted/30 p-4 lg:p-6 space-y-4 lg:space-y-6">
            {/* Account Limits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm lg:text-base">Limites da Conta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span>QR Codes criados</span>
                    <span className="font-medium">3 / ∞</span>
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span>Scans este mês</span>
                    <span className="font-medium">127 / ∞</span>
                  </div>
                  <div className="flex justify-between text-xs lg:text-sm">
                    <span>Workspaces</span>
                    <span className="font-medium">1 / 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upgrade Card */}
            <Card className="border-primary/20 bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm lg:text-base">
                  <Zap className="w-4 h-4 text-primary" />
                  Desbloqueie Funcionalidades Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    <QrCode className="w-3 h-3 text-foreground" />
                    <span>QR Codes ilimitados</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    <BarChart3 className="w-3 h-3 text-foreground" />
                    <span>Analytics avançados</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    <Users className="w-3 h-3 text-foreground" />
                    <span>Colaboração em equipa</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    <Settings className="w-3 h-3 text-foreground" />
                    <span>Personalização avançada</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs lg:text-sm">
                    <Star className="w-3 h-3 text-foreground" />
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
                <CardTitle className="text-xs lg:text-sm">Precisa de Ajuda?</CardTitle>
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
    </div>;
};
export default ImprovedDashboard;