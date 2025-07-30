import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Zap, Users, QrCode, FolderOpen, PlayCircle } from "lucide-react";

type OnboardingStep = "welcome" | "workspace-intro" | "first-qr" | "dashboard";

interface OnboardingFlowProps {
  onComplete?: () => void;
}

const OnboardingFlow = ({ onComplete }: OnboardingFlowProps = {}) => {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome");
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const steps = [
    { id: "welcome", title: "Bem-vindo", progress: 25 },
    { id: "workspace-intro", title: "Workspace", progress: 50 },
    { id: "first-qr", title: "Primeiro QR", progress: 75 },
    { id: "dashboard", title: "Dashboard", progress: 100 }
  ];

  const currentProgress = steps.find(step => step.id === currentStep)?.progress || 0;

  const completeStep = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const nextStep = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      completeStep(currentStep);
      setCurrentStep(steps[currentIndex + 1].id as OnboardingStep);
    }
  };

  const renderWelcomeStep = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">🎉 Bem-vindo ao MiMeCode!</h1>
        <p className="text-xl text-muted-foreground">
          Em menos de 5 minutos vai criar o seu primeiro QR Code e descobrir todo o potencial da plataforma.
        </p>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          <Zap className="w-4 h-4 mr-2" />
          Trial de 14 dias ativo
        </Badge>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <QrCode className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Criar QR Code</CardTitle>
            <CardDescription>
              Comece por criar o seu primeiro QR Code em segundos
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <FolderOpen className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Organizar Workspace</CardTitle>
            <CardDescription>
              Organize os seus projetos em workspaces dedicados
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <PlayCircle className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Explorar Funcionalidades</CardTitle>
            <CardDescription>
              Descubra todas as possibilidades da plataforma
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" onClick={nextStep} className="px-8">
          Começar agora
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderWorkspaceIntro = () => (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">O que é um Workspace?</h2>
        <p className="text-lg text-muted-foreground">
          Um workspace é o seu espaço de trabalho dedicado onde organiza todos os seus QR Codes e conteúdos.
        </p>
      </div>

      <Card className="border-2 border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">✨ Benefícios dos Workspaces:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Organize projetos por cliente ou campanha</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Partilhe acesso com a sua equipa</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Mantenha tudo organizado e acessível</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Analise estatísticas por workspace</span>
                </li>
              </ul>
            </div>
            <div className="bg-background rounded-lg p-6 border">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  <span className="font-medium">Meu Primeiro Workspace</span>
                </div>
                <div className="ml-8 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-background rounded text-sm">
                    <QrCode className="w-4 h-4" />
                    <span>QR Code - Website</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded text-sm">
                    <QrCode className="w-4 h-4" />
                    <span>QR Code - Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" onClick={nextStep} className="px-8">
          Entendi! Vamos criar o primeiro QR
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderFirstQrStep = () => (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Vamos criar o seu primeiro QR Code!</h2>
        <p className="text-lg text-muted-foreground">
          Escolha uma das opções abaixo para começar rapidamente:
        </p>
      </div>

      <div className="grid gap-4">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <QrCode className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">QR Code para Website</h3>
                <p className="text-sm text-muted-foreground">Direcione para o seu website ou landing page</p>
              </div>
              <Badge variant="secondary">Mais popular</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">QR Code para vCard</h3>
                <p className="text-sm text-muted-foreground">Partilhe os seus contactos profissionais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <PlayCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Explorar Template</h3>
                <p className="text-sm text-muted-foreground">Use um dos nossos templates prontos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button size="lg" onClick={nextStep} className="px-8">
          Continuar para o Dashboard
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case "welcome":
        return renderWelcomeStep();
      case "workspace-intro":
        return renderWorkspaceIntro();
      case "first-qr":
        return renderFirstQrStep();
      default:
        return null;
    }
  };

  if (currentStep === "dashboard") {
    return (
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        <h2 className="text-3xl font-bold">Onboarding Concluído!</h2>
        <p className="text-lg text-muted-foreground">
          Agora está pronto para explorar todo o potencial do MiMeCode.
        </p>
        <Button size="lg" onClick={onComplete} className="px-8">
          Ir para o Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Header */}
      <div className="border-b bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg font-semibold">Configuração Inicial</h1>
            <Badge variant="outline">
              {currentProgress}% concluído
            </Badge>
          </div>
          <Progress value={currentProgress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingFlow;