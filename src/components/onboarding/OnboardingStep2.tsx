import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, ArrowRight, ArrowLeft, Store, Briefcase, Users, Utensils, GraduationCap, Heart, Building, Palette } from "lucide-react";
import { useState } from "react";

interface OnboardingStep2Props {
  onNext: () => void;
  onBack: () => void;
}

const OnboardingStep2 = ({ onNext, onBack }: OnboardingStep2Props) => {
  const [selectedSegment, setSelectedSegment] = useState<string>("");

  const businessSegments = [
    {
      id: "retail",
      name: "Retalho & Comércio",
      description: "Lojas físicas, e-commerce, produtos",
      icon: Store,
      color: "text-blue-600 bg-blue-50"
    },
    {
      id: "services",
      name: "Serviços Profissionais",
      description: "Consultoria, advocacia, contabilidade",
      icon: Briefcase,
      color: "text-green-600 bg-green-50"
    },
    {
      id: "hospitality",
      name: "Hotelaria & Restauração",
      description: "Hotéis, restaurantes, bares, cafés",
      icon: Utensils,
      color: "text-orange-600 bg-orange-50"
    },
    {
      id: "events",
      name: "Eventos & Marketing",
      description: "Organizadores, agências, promotores",
      icon: Users,
      color: "text-purple-600 bg-purple-50"
    },
    {
      id: "education",
      name: "Educação & Formação",
      description: "Escolas, universidades, cursos",
      icon: GraduationCap,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      id: "healthcare",
      name: "Saúde & Bem-estar",
      description: "Clínicas, ginásios, spas, consultórios",
      icon: Heart,
      color: "text-red-600 bg-red-50"
    },
    {
      id: "corporate",
      name: "Empresarial & B2B",
      description: "Grandes empresas, indústria, logística",
      icon: Building,
      color: "text-gray-600 bg-gray-50"
    },
    {
      id: "creative",
      name: "Criativo & Arte",
      description: "Design, fotografia, artistas, galerias",
      icon: Palette,
      color: "text-pink-600 bg-pink-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Lado Esquerdo - Informação do Segmento */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MIDIACODE</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Conte-nos sobre o seu negócio
            </h1>
            <p className="text-xl text-muted-foreground">
              Cada sector tem necessidades específicas. Ao conhecer o seu, podemos sugerir as melhores soluções QR para si.
            </p>
          </div>

          {/* Benefícios por Segmento */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg">Soluções Personalizadas:</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Store className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Retalho</h4>
                  <p className="text-sm text-muted-foreground">QR codes para produtos, promoções e fidelização</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Utensils className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Restauração</h4>
                  <p className="text-sm text-muted-foreground">Menus digitais, reservas e avaliações automáticas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Eventos</h4>
                  <p className="text-sm text-muted-foreground">Check-ins, networking e partilha de conteúdos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Progresso */}
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Progresso do Setup</h4>
              <span className="text-sm text-muted-foreground">Passo 2 de 5</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[40%] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Seleção de Segmento */}
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MIDIACODE</span>
              </div>
              <CardTitle className="text-2xl">Escolha o Seu Segmento</CardTitle>
              <CardDescription>
                Selecione a área que melhor descreve o seu negócio para personalizarmos a sua experiência
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
                {businessSegments.map((segment) => {
                  const Icon = segment.icon;
                  return (
                    <button
                      key={segment.id}
                      onClick={() => setSelectedSegment(segment.id)}
                      className={`
                        p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md
                        ${selectedSegment === segment.id 
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-border hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${segment.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{segment.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">{segment.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
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
                  disabled={!selectedSegment}
                >
                  Continuar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                {selectedSegment ? "Óptima escolha! " : ""}Pode alterar esta seleção posteriormente
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;