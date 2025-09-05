import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, ArrowRight, Sparkles, Target, Zap } from "lucide-react";

interface OnboardingStep1Props {
  onNext: () => void;
}

const OnboardingStep1 = ({ onNext }: OnboardingStep1Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Boas-vindas Visual */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MIDIACODE</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Bem-vindo ao futuro dos QR Codes!
            </h1>
            <p className="text-xl text-muted-foreground">
              Vamos configurar a sua conta em poucos passos para começar a criar experiências digitais únicas
            </p>
          </div>


          {/* Progresso Visual */}
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Progresso do Setup</h4>
              <span className="text-sm text-muted-foreground">Passo 1 de 5</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[20%] transition-all duration-500"></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Vamos começar esta jornada juntos!</p>
          </div>
        </div>

        {/* Lado Direito - Wizard de Início */}
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MIDIACODE</span>
              </div>
              <CardTitle className="text-2xl">Vamos Começar!</CardTitle>
              <CardDescription>
                Configure a sua conta em alguns passos simples para aproveitar ao máximo a plataforma
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Configuração Inteligente</h3>
                  <p className="text-sm text-muted-foreground">
                    Iremos personalizar a sua experiência com base no seu negócio e objetivos. 
                    Este processo demora apenas 2-3 minutos.
                  </p>
                </div>
              </div>


              <Button onClick={onNext} className="w-full" size="lg">
                Iniciar Configuração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="text-center text-xs text-muted-foreground">
                Pode alterar estas configurações a qualquer momento nas definições da conta
              </div>
            </CardContent>
          </Card>

          {/* Onboarding Mobile */}
          <div className="lg:hidden mt-8 text-center space-y-4">
            <h2 className="text-xl font-semibold">Bem-vindo à Revolução Digital!</h2>
            <p className="text-muted-foreground">
              Transforme a forma como se conecta com o seu público através de QR codes inteligentes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep1;