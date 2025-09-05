import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, ArrowRight, ArrowLeft, User, Mail, Building, Globe, Phone } from "lucide-react";
import { useState } from "react";

interface OnboardingStep4Props {
  onNext: () => void;
  onBack: () => void;
}

const OnboardingStep4 = ({ onNext, onBack }: OnboardingStep4Props) => {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    phone: "",
    contactEmail: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.companyName.trim() !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Lado Esquerdo - Informação do Perfil */}
        <div className="hidden lg:flex flex-col justify-between h-full space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">MIDIACODE</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight">
              Configure o seu perfil
            </h1>
            <p className="text-xl text-muted-foreground">
              Estas informações ajudam-nos a personalizar a sua experiência e aparecerão nos seus QR codes quando necessário.
            </p>
          </div>


          {/* Progresso */}
          <div className="bg-card rounded-lg p-6 border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Progresso do Setup</h4>
              <span className="text-sm text-muted-foreground">Passo 4 de 5</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-[80%] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Formulário de Perfil */}
        <div className="w-full max-w-md mx-auto">
          <Card className="w-full">
            <CardHeader className="text-center space-y-2">
              <div className="lg:hidden flex items-center justify-center space-x-2 mb-4">
                <QrCode className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">MIDIACODE</span>
              </div>
              <CardTitle className="text-2xl">Informações do Negócio</CardTitle>
              <CardDescription>
                Preencha os dados básicos da sua empresa para personalizar os seus QR codes
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="flex items-center space-x-2">
                    <Building className="h-4 w-4" />
                    <span>Nome da Empresa *</span>
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Digite o nome da sua empresa"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>Website</span>
                  </Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://www.exemplo.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Telefone</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+351 XXX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Email de Contacto</span>
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="contacto@empresa.com"
                    value={formData.contactEmail}
                    onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <div className="text-sm">
                    <p className="font-medium text-muted-foreground">Apenas o nome da empresa é obrigatório</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Os restantes campos podem ser preenchidos posteriormente nas definições
                    </p>
                  </div>
                </div>
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
                  disabled={!isFormValid}
                >
                  Continuar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground">
                Estas informações são privadas e apenas são utilizadas nos QR codes quando escolher incluí-las
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep4;