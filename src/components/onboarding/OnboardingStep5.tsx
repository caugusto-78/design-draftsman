import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, ArrowRight, ArrowLeft, Zap, BarChart, Palette, Share2, CheckCircle, Rocket } from "lucide-react";

interface OnboardingStep5Props {
  onNext: () => void;
  onBack: () => void;
}

const OnboardingStep5 = ({ onNext, onBack }: OnboardingStep5Props) => {
  const features = [
    {
      id: "quick_creation",
      name: "Criação Rápida",
      description: "Crie QR codes em segundos com templates prontos a usar",
      icon: Zap,
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      id: "custom_design",
      name: "Design Personalizado",
      description: "Personalize cores, logotipos e estilos para a sua marca",
      icon: Palette,
      color: "text-purple-600 bg-purple-50"
    },
    {
      id: "analytics",
      name: "Analytics Detalhadas",
      description: "Acompanhe scans, localizações e performance em tempo real",
      icon: BarChart,
      color: "text-blue-600 bg-blue-50"
    },
    {
      id: "easy_sharing",
      name: "Partilha Facilitada",
      description: "Exporte, imprima ou partilhe directamente nas redes sociais",
      icon: Share2,
      color: "text-green-600 bg-green-50"
    }
  ];

  const quickTips = [
    "Comece com um template para resultados rápidos",
    "Teste sempre os seus QR codes antes de publicar",
    "Use cores contrastantes para melhor leitura",
    "Inclua um call-to-action claro junto ao QR code"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Apresentação das Funcionalidades */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MIDIACODE</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Explore as funcionalidades
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra como as nossas ferramentas vão acelerar o crescimento do seu negócio através de QR codes inteligentes.
            </p>
          </div>

          {/* Lista de Funcionalidades */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Principais Ferramentas:</h3>
            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.id} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${feature.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.name}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dicas Rápidas */}
          <div className="bg-card rounded-lg p-6 border">
            <h4 className="font-medium mb-4 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              Dicas para Começar
            </h4>
            <div className="space-y-2">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progresso */}
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Progresso do Setup</h4>
              <span className="text-sm text-muted-foreground">Passo 5 de 5</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[100%] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Finalização */}
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MIDIACODE</span>
              </div>
              <CardTitle className="text-2xl">Está Tudo Pronto!</CardTitle>
              <CardDescription>
                A sua conta foi configurada com sucesso. Está pronto para começar a criar QR codes extraordinários.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-green-700">Configuração Completa!</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalizámos a plataforma com base nas suas respostas. 
                    Pode começar a criar o seu primeiro QR code agora mesmo.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="font-medium text-primary mb-3 flex items-center">
                  <Rocket className="h-4 w-4 mr-2" />
                  Próximos Passos
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Explore o dashboard personalizado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Crie o seu primeiro QR code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Experimente os templates recomendados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Configure integrações avançadas</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button onClick={onBack} variant="outline" size="lg" className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Rever
                </Button>
                <Button 
                  onClick={onNext} 
                  className="flex-1" 
                  size="lg"
                >
                  Ir para Dashboard
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                Pode sempre aceder ao tutorial e ajuda através do menu da aplicação
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep5;