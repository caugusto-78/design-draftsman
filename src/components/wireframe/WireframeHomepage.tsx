import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, QrCode, Link, BarChart3, Users, Building2, Heart } from "lucide-react";

const WireframeHomepage = () => {
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

      {/* Hero Section - Foco na clareza imediata do valor */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">✨ Crie QR Codes em 10 segundos</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            QR Codes Dinâmicos que <span className="text-primary">Convertem Visitantes</span> em Resultados
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crie, gere e acompanhe QR codes profissionais para empresas. 
            Meça resultados em tempo real e otimize suas campanhas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              Criar QR Grátis Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Demo (2 min)
            </Button>
          </div>
          
          {/* Demonstração Visual Rápida */}
          <div className="bg-card rounded-lg p-8 max-w-md mx-auto border">
            <div className="bg-secondary/20 w-32 h-32 mx-auto rounded-lg flex items-center justify-center mb-4">
              <QrCode className="h-16 w-16 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Seu QR Code está pronto!</p>
          </div>
        </div>
      </section>

      {/* Segmentação por Perfil - Solução para cada persona */}
      <section id="solucoes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Para Que Tipo de Empresa é Ideal?</h2>
            <p className="text-muted-foreground text-lg">Escolha sua área e veja como o Midiacode resolve seus problemas específicos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* PME/Marketing */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>PME & Marketing</CardTitle>
                <CardDescription>Para Sofia e equipas de marketing ágeis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Campanhas de ponto de venda com QR dinâmicos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Relatórios simples de conversão
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Setup em menos de 5 minutos
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Ver Caso de Uso <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* IT/Documentação */}
            <Card className="p-6 hover:shadow-lg transition-shadow border-primary">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>IT & Documentação</CardTitle>
                <CardDescription>Para Carlos e equipas técnicas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Links organizados para manuais digitais
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Integração API e webhook
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Controlo de acesso e segurança
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Ver Recursos Técnicos <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* ONG/Instituições */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>ONG & Instituições</CardTitle>
                <CardDescription>Para Patrícia e organizações sociais</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Cartões digitais acessíveis
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Plano gratuito robusto
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Partilha segura com parceiros
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Começar Grátis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
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

      {/* CTA Final - Foco na Conversão */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já usam QR codes dinâmicos para aumentar conversões
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Criar Conta Grátis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Ver Preços
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Sem cartão de crédito • Setup em 2 minutos • Cancele a qualquer momento
          </p>
        </div>
      </section>
    </div>
  );
};

export default WireframeHomepage;