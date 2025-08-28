import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Camera, Utensils, Gamepad2, Play, Smartphone, DollarSign, Share2, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateQRCode = () => {
  const navigate = useNavigate();
  const [selectedContentType, setSelectedContentType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const contentTypes = [
    {
      id: "augment-reality",
      name: "Augment Reality", 
      icon: Zap,
      options: null,
      description: "Create AR experiences"
    },
    {
      id: "document",
      name: "Document",
      icon: FileText,
      options: "4 options",
      description: "Share documents and files"
    },
    {
      id: "restaurant-menu",
      name: "Restaurant Menu",
      icon: Utensils,
      options: null,
      description: "Digital menu experiences"
    },
    {
      id: "game", 
      name: "Game",
      icon: Gamepad2,
      options: null,
      description: "Interactive gaming content"
    },
    {
      id: "media",
      name: "Media",
      icon: Camera,
      options: "2 options", 
      description: "Photos, videos and media"
    },
    {
      id: "mobile-experience",
      name: "Mobile Experience",
      icon: Smartphone,
      options: "2 options",
      description: "Mobile-optimized content"
    },
    {
      id: "other",
      name: "Other",
      icon: Play,
      options: "4 options",
      description: "Custom content types"
    },
    {
      id: "pay",
      name: "Pay", 
      icon: DollarSign,
      options: "2 options",
      description: "Payment and transactions"
    },
    {
      id: "social-networks",
      name: "Social Networks",
      icon: Share2,
      options: null,
      description: "Social media integration"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                Create New Content
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Build dynamic content with our intelligent form builder
            </p>
          </div>

          {/* Content Configuration Card */}
          <Card className="w-full">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl">Content Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1 Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Step 1: Content Type</h3>
                  <Badge variant="secondary" className="text-xs">Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Choose the primary type of content you want to create
                </p>
              </div>

              {/* Content Type Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contentTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <Button
                      key={type.id}
                      variant={selectedContentType === type.id ? "default" : "outline"}
                      className={`h-auto p-4 justify-start text-left space-y-2 ${
                        selectedContentType === type.id 
                          ? "border-primary bg-primary text-primary-foreground" 
                          : "border-border hover:border-primary/50 hover:bg-primary/5"
                      }`}
                      onClick={() => setSelectedContentType(type.id)}
                    >
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent className="w-4 h-4" />
                            <span className="font-medium text-sm">{type.name}</span>
                          </div>
                          {type.options && (
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                selectedContentType === type.id 
                                  ? "bg-primary-foreground/20 text-primary-foreground" 
                                  : ""
                              }`}
                            >
                              {type.options}
                            </Badge>
                          )}
                        </div>
                        <p className={`text-xs ${
                          selectedContentType === type.id 
                            ? "text-primary-foreground/80" 
                            : "text-muted-foreground"
                        }`}>
                          {type.description}
                        </p>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Next Step Button */}
              {selectedContentType && (
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto"
                    onClick={() => setCurrentStep(2)}
                  >
                    Continue to Step 2
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2 would go here when selectedContentType is set and currentStep is 2 */}
          {currentStep === 2 && selectedContentType && (
            <Card className="w-full mt-6">
              <CardHeader>
                <CardTitle className="text-2xl">Step 2: Configure Content</CardTitle>
                <CardDescription>
                  Set up the details for your {contentTypes.find(t => t.id === selectedContentType)?.name} content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-muted-foreground">
                  <p>Content configuration options for {selectedContentType} will appear here...</p>
                  <p className="text-sm mt-2">This step would contain specific form fields based on the selected content type.</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default CreateQRCode;