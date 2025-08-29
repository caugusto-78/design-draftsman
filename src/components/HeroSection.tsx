import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, FolderOpen, FileText, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // 5 rotating text messages
  const heroMessages = [
    "Pode associar geolocalização aos seus QR Codes.",
    "Crie QR Codes interativos para os seus documentos partilhados.",
    "Transforme links longos em QR Codes elegantes e funcionais.",
    "Conecte-se às redes sociais através de QR Codes personalizados.",
    "Crie menus digitais e catálogos interativos instantaneamente."
  ];

  // Auto-rotate slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroMessages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroMessages.length]);

  return (
    <div className="bg-muted/50 rounded-lg p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[400px]">
        {/* Left Column - Rotating Text */}
        <div className="bg-muted rounded-lg p-6 space-y-6">
          <div className="min-h-[180px] flex items-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight animate-fade-in">
              {heroMessages[currentSlideIndex]}
            </h1>
          </div>
          
          <Button 
            variant="default" 
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Ver tutorial
          </Button>

          {/* Bullet indicators */}
          <div className="flex gap-2">
            {heroMessages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlideIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlideIndex 
                    ? 'bg-foreground' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Action Buttons */}
        <div className="space-y-4 p-6">
          {/* Main Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button 
              size="lg" 
              className="h-auto p-6 bg-foreground text-background hover:bg-foreground/90 flex-col items-start text-left space-y-2 min-w-[200px]"
              onClick={() => navigate('/create-qr')}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-background/20 rounded flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg whitespace-nowrap">Criar QR Code</div>
                  <div className="text-sm opacity-90">Comece a criar o seu primeiro QR Code</div>
                </div>
              </div>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="h-auto p-6 border-foreground bg-transparent hover:bg-muted/50 flex-col items-start text-left space-y-2 min-w-[200px]"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg text-foreground whitespace-nowrap">Novo Workspace</div>
                  <div className="text-sm text-muted-foreground">Organize os seus projetos por categorias</div>
                </div>
              </div>
            </Button>
          </div>

          {/* Secondary Action Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" className="gap-2">
              <FileText className="w-4 h-4" />
              Templates
            </Button>
            <Button variant="ghost" className="gap-2">
              <PlayCircle className="w-4 h-4" />
              Tutorial (3 min)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;