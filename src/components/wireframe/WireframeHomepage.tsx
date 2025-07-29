import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, QrCode, Link, BarChart3, Users, Building2, Heart, Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Star } from "lucide-react";

const WireframeHomepage = () => {
  const [qrPurpose, setQrPurpose] = useState("");
  const [qrData, setQrData] = useState({ url: "", text: "", email: "", phone: "", wifi: { ssid: "", password: "" } });
  const [showQrCode, setShowQrCode] = useState(false);

  // Perfis disponíveis para mostrar aleatoriamente
  const availableProfiles = [
    {
      icon: BarChart3,
      title: "PME & Marketing",
      description: "Para equipas de marketing ágeis",
      features: ["Campanhas com QR dinâmicos", "Relatórios de conversão", "Setup em 5 minutos"],
      highlight: false
    },
    {
      icon: Building2,
      title: "IT & Documentação", 
      description: "Para equipas técnicas",
      features: ["Manuais digitais organizados", "Integração API", "Controlo de segurança"],
      highlight: true
    },
    {
      icon: Heart,
      title: "ONG & Instituições",
      description: "Para organizações sociais", 
      features: ["Cartões digitais acessíveis", "Plano gratuito robusto", "Partilha segura"],
      highlight: false
    },
    {
      icon: Users,
      title: "Equipas de Vendas",
      description: "Para profissionais comerciais",
      features: ["Cards de contacto dinâmicos", "Tracking de leads", "Catálogos digitais"],
      highlight: false
    },
    {
      icon: Globe,
      title: "Retalho & E-commerce",
      description: "Para lojas e comércio",
      features: ["Menus digitais", "Códigos de desconto", "Reviews automáticos"],
      highlight: false
    }
  ];

  // Selecionar 3 perfis aleatórios (para demo, vamos usar os primeiros 3)
  const selectedProfiles = availableProfiles.slice(0, 3);

  const renderQrForm = () => {
    switch (qrPurpose) {
      case "url":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">URL do Website</Label>
              <Input 
                id="url" 
                placeholder="https://exemplo.com" 
                value={qrData.url}
                onChange={(e) => setQrData({ ...qrData, url: e.target.value })}
              />
            </div>
          </div>
        );
      case "text":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Texto</Label>
              <Textarea 
                id="text" 
                placeholder="Digite seu texto aqui..." 
                value={qrData.text}
                onChange={(e) => setQrData({ ...qrData, text: e.target.value })}
              />
            </div>
          </div>
        );
      case "email":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="exemplo@email.com" 
                value={qrData.email}
                onChange={(e) => setQrData({ ...qrData, email: e.target.value })}
              />
            </div>
          </div>
        );
      case "phone":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                placeholder="+351 000 000 000" 
                value={qrData.phone}
                onChange={(e) => setQrData({ ...qrData, phone: e.target.value })}
              />
            </div>
          </div>
        );
      case "wifi":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="ssid">Nome da Rede (SSID)</Label>
              <Input 
                id="ssid" 
                placeholder="MinhaRede_WiFi" 
                value={qrData.wifi.ssid}
                onChange={(e) => setQrData({ ...qrData, wifi: { ...qrData.wifi, ssid: e.target.value } })}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="password123" 
                value={qrData.wifi.password}
                onChange={(e) => setQrData({ ...qrData, wifi: { ...qrData.wifi, password: e.target.value } })}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleCreateQr = () => {
    if (qrPurpose && (qrData.url || qrData.text || qrData.email || qrData.phone || qrData.wifi.ssid)) {
      setShowQrCode(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header com navegação simplificada */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MIDIACODE</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#solucoes" className="text-muted-foreground hover:text-foreground">Soluções</a>
            <a href="#precos" className="text-muted-foreground hover:text-foreground">Preços</a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground">Recursos</a>
          </nav>
          <div className="space-x-2">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar Grátis</Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Wizard Simplificado */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">✨ Crie QR Codes em 10 segundos</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              QR Codes Dinâmicos que <span className="text-primary">Convertem Visitantes</span> em Resultados
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crie, gere e acompanhe QR codes profissionais para empresas. 
              Meça resultados em tempo real e otimize suas campanhas.
            </p>
          </div>

          {/* Wizard de Criação Simplificado */}
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Formulário */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="purpose">O que quer partilhar?</Label>
                    <Select value={qrPurpose} onValueChange={setQrPurpose}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a finalidade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="url">Website / Link</SelectItem>
                        <SelectItem value="text">Texto Simples</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Telefone</SelectItem>
                        <SelectItem value="wifi">WiFi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {renderQrForm()}

                  {qrPurpose && (
                    <Button 
                      onClick={handleCreateQr} 
                      className="w-full"
                      size="lg"
                    >
                      Gerar QR Code <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}

                  <div className="text-center">
                    <Button variant="outline" size="lg">
                      Ver Demo Completa (2 min)
                    </Button>
                  </div>
                </div>

                {/* Preview do QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-secondary/20 w-48 h-48 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed">
                    {showQrCode ? (
                      <QrCode className="h-32 w-32 text-primary" />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <QrCode className="h-16 w-16 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Seu QR Code aparecerá aqui</p>
                      </div>
                    )}
                  </div>
                  {showQrCode && (
                    <div className="text-center space-y-2">
                      <p className="text-sm font-medium text-primary">QR Code criado com sucesso!</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Baixar</Button>
                        <Button size="sm" variant="outline">Copiar Link</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Segmentação por Perfil - Solução para diferentes áreas */}
      <section id="solucoes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ideal Para Diferentes Áreas de Negócio</h2>
            <p className="text-muted-foreground text-lg">Veja como empresas de vários setores usam o Midiacode para resolver problemas específicos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {selectedProfiles.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <Card key={index} className={`p-6 hover:shadow-lg transition-shadow ${profile.highlight ? 'border-primary' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{profile.title}</CardTitle>
                    <CardDescription>{profile.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      {profile.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mt-6">
                      <Button className="flex-1" variant="outline" size="sm">
                        Ver Casos de Estudo
                      </Button>
                      <Button className="flex-1" size="sm">
                        Começar Grátis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">E muitos outros setores...</p>
            <Button variant="outline">
              Ver Todos os Casos de Uso <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Jornada Guiada - Como Funciona */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Como Funciona em 3 Passos</h2>
            <p className="text-muted-foreground">Simples, rápido e sem complicações</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Crie seu QR</h3>
              <p className="text-sm text-muted-foreground">Cole o link, escolha o design e pronto!</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Partilhe & Use</h3>
              <p className="text-sm text-muted-foreground">Baixe, imprima ou partilhe digitalmente</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Acompanhe Resultados</h3>
              <p className="text-sm text-muted-foreground">Veja acessos, localizações e horários</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">
              Experimentar Agora (100% Grátis) <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">O Que Dizem Os Nossos Clientes</h2>
            <p className="text-muted-foreground">Histórias reais de empresas que transformaram resultados</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">"Aumentámos as conversões em 40% com os QR codes dinâmicos. A funcionalidade de tracking é fantástica!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Sofia Castro</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager, TechStart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">"Implementação super simples. Em 10 minutos tínhamos QR codes em toda a documentação técnica."</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Carlos Mendes</p>
                    <p className="text-xs text-muted-foreground">CTO, InnovaTech</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm mb-4">"O plano gratuito permitiu à nossa ONG digitalizar todos os materiais. Ferramenta essencial!"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-sm">Patrícia Lima</p>
                    <p className="text-xs text-muted-foreground">Diretora, Coração Solidário</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Alguns dos Nossos Clientes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Alguns dos Nossos Clientes</h2>
            <p className="text-muted-foreground">Empresas de todos os tamanhos confiam no Midiacode</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Logos simulados */}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-12 bg-muted rounded flex items-center justify-center">
                <span className="text-xs font-medium">LOGO {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Parceiros */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossos Parceiros</h2>
            <p className="text-muted-foreground">Integrações e parcerias que potenciam o seu negócio</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-16 bg-card border rounded flex items-center justify-center">
                <span className="text-sm font-medium">PARCEIRO {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Foco na Conversão */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já usam QR codes dinâmicos para aumentar conversões
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8 py-6">
              Criar Conta Grátis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Preços
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Sem cartão de crédito • Setup em 2 minutos • Cancele a qualquer momento
          </p>

          {/* Redes Sociais */}
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">MIDIACODE</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A plataforma mais simples para criar e gerir QR codes dinâmicos para o seu negócio.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Produto */}
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-foreground">Preços</a></li>
                <li><a href="#" className="hover:text-foreground">API</a></li>
                <li><a href="#" className="hover:text-foreground">Integrações</a></li>
                <li><a href="#" className="hover:text-foreground">Templates</a></li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Carreiras</a></li>
                <li><a href="#" className="hover:text-foreground">Parceiros</a></li>
                <li><a href="#" className="hover:text-foreground">Imprensa</a></li>
              </ul>
            </div>

            {/* Contactos */}
            <div>
              <h3 className="font-semibold mb-4">Contactos</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:hello@midiacode.com" className="hover:text-foreground">hello@midiacode.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+351000000000" className="hover:text-foreground">+351 000 000 000</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>Rua Exemplo, 123<br />1000-000 Lisboa, Portugal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© 2024 Midiacode. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Política de Privacidade</a>
              <a href="#" className="hover:text-foreground">Termos de Serviço</a>
              <a href="#" className="hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WireframeHomepage;