import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, QrCode, Users, Building2 } from "lucide-react";

const WireframePricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0€",
      period: "para sempre",
      description: "Ideal para testar e projetos pequenos",
      icon: <QrCode className="h-6 w-6" />,
      popular: false,
      cta: "Começar Grátis",
      ctaVariant: "outline" as const,
      features: [
        "5 QR codes dinâmicos",
        "1.000 scans/mês",
        "Relatórios básicos",
        "Designs padrão",
        "Suporte email"
      ],
      limitations: [
        "Máx. 5 QR codes",
        "Branding Midiacode"
      ]
    },
    {
      name: "Start",
      price: "4,5€",
      period: "/mês",
      description: "Para PME e marketing ágil",
      icon: <Users className="h-6 w-6" />,
      popular: true,
      cta: "Experimentar 7 dias grátis",
      ctaVariant: "default" as const,
      features: [
        "25 QR codes dinâmicos", 
        "10.000 scans/mês",
        "Relatórios detalhados",
        "Designs personalizados",
        "Remover branding",
        "Suporte prioritário"
      ],
      limitations: []
    },
    {
      name: "Advanced",
      price: "10€",
      period: "/mês",
      description: "Para equipas e campanhas maiores",
      icon: <Building2 className="h-6 w-6" />,
      popular: false,
      cta: "Experimentar 7 dias grátis",
      ctaVariant: "outline" as const,
      features: [
        "100 QR codes dinâmicos",
        "50.000 scans/mês",
        "Analytics avançado",
        "API e webhooks",
        "Integrações",
        "Suporte telefone"
      ],
      limitations: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <QrCode className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">MIDIACODE</span>
          </div>
          <div className="space-x-2">
            <Button variant="ghost">Entrar</Button>
            <Button>Começar Grátis</Button>
          </div>
        </div>
      </header>

      {/* Hero da Pricing */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Planos Simples e Transparentes</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Teste grátis por 7 dias, sem compromisso.
          </p>
          
          {/* Seletor de Período */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg">
              <Button variant="default" size="sm" className="text-sm">
                Mensal
              </Button>
              <Button variant="ghost" size="sm" className="text-sm">
                Anual (2 meses grátis)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cards dos Planos - Layout Simplificado */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-6 ${plan.popular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.ctaVariant}
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Incluído:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations - apenas se existirem */}
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-border">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                          Limitações:
                        </h4>
                        {plan.limitations.map((limitation, limitIndex) => (
                          <div key={limitIndex} className="flex items-start">
                            <span className="h-4 w-4 text-muted-foreground mt-0.5 mr-3 flex-shrink-0">•</span>
                            <span className="text-sm text-muted-foreground">{limitation}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação Rápida Visual */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Rapidamente</h2>
            <p className="text-muted-foreground">Veja qual plano tem o que precisa</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 border">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div></div>
                <div className="font-semibold">Free</div>
                <div className="font-semibold text-primary">Start</div>
                <div className="font-semibold">Advanced</div>
                
                <div className="text-left font-medium py-3">QR Codes</div>
                <div className="py-3">5</div>
                <div className="py-3 text-primary font-semibold">25</div>
                <div className="py-3">100</div>
                
                <div className="text-left font-medium py-3">Scans/mês</div>
                <div className="py-3">1.000</div>
                <div className="py-3 text-primary font-semibold">10.000</div>
                <div className="py-3">50.000</div>
                
                <div className="text-left font-medium py-3">Relatórios</div>
                <div className="py-3">Básicos</div>
                <div className="py-3 text-primary font-semibold">Detalhados</div>
                <div className="py-3">Analytics</div>
                
                <div className="text-left font-medium py-3">API</div>
                <div className="py-3 text-muted-foreground">✗</div>
                <div className="py-3 text-muted-foreground">✗</div>
                <div className="py-3 text-primary">✓</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Posso mudar de plano a qualquer momento?</h3>
              <p className="text-sm text-muted-foreground">Sim, pode fazer upgrade ou downgrade quando quiser. As alterações são aplicadas no próximo ciclo de faturação.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">O que acontece se exceder os scans?</h3>
              <p className="text-sm text-muted-foreground">Os QR codes continuam a funcionar, mas recomendamos upgrade para acesso total aos relatórios.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Existe reembolso?</h3>
              <p className="text-sm text-muted-foreground">Sim, oferecemos reembolso total nos primeiros 30 dias, sem perguntas.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Preciso de cartão para testar?</h3>
              <p className="text-sm text-muted-foreground">Não para o plano Free. Para os testes de 7 dias dos planos pagos, sim, mas só cobramos depois do período de teste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-muted-foreground mb-8">
            Teste grátis por 7 dias. Sem compromisso, cancele a qualquer momento.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Começar Teste Grátis <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WireframePricing;