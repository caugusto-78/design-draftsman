import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, ArrowRight, ArrowLeft, Target, TrendingUp, Users, Share2, BarChart, Globe } from "lucide-react";
import { useState } from "react";

interface OnboardingStep3Props {
  onNext: () => void;
  onBack: () => void;
}

const OnboardingStep3 = ({ onNext, onBack }: OnboardingStep3Props) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const businessGoals = [
    {
      id: "increase_sales",
      name: "Aumentar Vendas",
      description: "Converter mais visitantes em clientes",
      icon: TrendingUp,
      color: "text-green-600 bg-green-50"
    },
    {
      id: "brand_awareness",
      name: "Notoriedade da Marca",
      description: "Dar a conhecer a marca e produtos",
      icon: Globe,
      color: "text-blue-600 bg-blue-50"
    },
    {
      id: "customer_engagement",
      name: "Envolvimento do Cliente",
      description: "Criar experiências interativas",
      icon: Users,
      color: "text-purple-600 bg-purple-50"
    },
    {
      id: "lead_generation",
      name: "Geração de Leads",
      description: "Captar contactos qualificados",
      icon: Target,
      color: "text-orange-600 bg-orange-50"
    },
    {
      id: "social_sharing",
      name: "Partilha Social",
      description: "Aumentar presença nas redes sociais",
      icon: Share2,
      color: "text-pink-600 bg-pink-50"
    },
    {
      id: "analytics",
      name: "Análise de Dados",
      description: "Medir e otimizar campanhas",
      icon: BarChart,
      color: "text-indigo-600 bg-indigo-50"
    }
  ];

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Informação dos Objetivos */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MIDIACODE</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Quais são os seus objetivos?
            </h1>
            <p className="text-xl text-muted-foreground">
              Conhecendo os seus objetivos, podemos recomendar os tipos de QR codes e estratégias mais eficazes para o seu sucesso.
            </p>
          </div>

          {/* Benefícios por Objetivo */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Como vamos ajudar:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Aumentar Vendas</h4>
                  <p className="text-sm text-muted-foreground">QR codes para ofertas especiais, descontos e call-to-actions diretas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Envolvimento</h4>
                  <p className="text-sm text-muted-foreground">Experiências interativas, jogos e conteúdos exclusivos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Analytics Avançadas</h4>
                  <p className="text-sm text-muted-foreground">Relatórios detalhados sobre scans, conversões e ROI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progresso */}
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Progresso do Setup</h4>
              <span className="text-sm text-muted-foreground">Passo 3 de 5</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[60%] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Seleção de Objetivos */}
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MIDIACODE</span>
              </div>
              <CardTitle className="text-2xl">Defina os Seus Objetivos</CardTitle>
              <CardDescription>
                Selecione um ou mais objetivos que pretende alcançar com os seus QR codes
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                {businessGoals.map((goal) => {
                  const Icon = goal.icon;
                  const isSelected = selectedGoals.includes(goal.id);
                  return (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md
                        ${isSelected 
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${goal.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-sm">{goal.name}</h3>
                            {isSelected && (
                              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{goal.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="text-center text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                {selectedGoals.length === 0 && "Selecione pelo menos um objetivo para continuar"}
                {selectedGoals.length === 1 && "1 objetivo selecionado"}
                {selectedGoals.length > 1 && `${selectedGoals.length} objetivos selecionados`}
              </div>

              <div className="flex space-x-3">
                <Button onClick={onBack} variant="outline" size="lg" className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
                <Button 
                  onClick={onNext} 
                  className="flex-1" 
                  size="lg"
                  disabled={selectedGoals.length === 0}
                >
                  Continuar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep3;