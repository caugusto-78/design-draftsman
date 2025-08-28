import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, QrCode, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateQRCode = () => {
  const navigate = useNavigate();
  const [qrPurpose, setQrPurpose] = useState("");
  const [qrData, setQrData] = useState({ url: "", text: "", email: "", phone: "", wifi: { ssid: "", password: "" } });
  const [showQrCode, setShowQrCode] = useState(false);

  const renderQrForm = () => {
    switch (qrPurpose) {
      case "url":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">URL do Website</Label>
              <Input 
                id="url" 
                placeholder="https://exemplo.com" 
                value={qrData.url}
                onChange={(e) => setQrData({ ...qrData, url: e.target.value })}
              />
            </div>
          </div>
        );
      case "text":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Texto</Label>
              <Textarea 
                id="text" 
                placeholder="Digite seu texto aqui..." 
                value={qrData.text}
                onChange={(e) => setQrData({ ...qrData, text: e.target.value })}
              />
            </div>
          </div>
        );
      case "email":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="exemplo@email.com" 
                value={qrData.email}
                onChange={(e) => setQrData({ ...qrData, email: e.target.value })}
              />
            </div>
          </div>
        );
      case "phone":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input 
                id="phone" 
                placeholder="+351 000 000 000" 
                value={qrData.phone}
                onChange={(e) => setQrData({ ...qrData, phone: e.target.value })}
              />
            </div>
          </div>
        );
      case "wifi":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="ssid">Nome da Rede (SSID)</Label>
              <Input 
                id="ssid" 
                placeholder="MinhaRede_WiFi" 
                value={qrData.wifi.ssid}
                onChange={(e) => setQrData({ ...qrData, wifi: { ...qrData.wifi, ssid: e.target.value } })}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="password123" 
                value={qrData.wifi.password}
                onChange={(e) => setQrData({ ...qrData, wifi: { ...qrData.wifi, password: e.target.value } })}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const handleCreateQr = () => {
    if (qrPurpose && (qrData.url || qrData.text || qrData.email || qrData.phone || qrData.wifi.ssid)) {
      setShowQrCode(true);
    }
  };

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
            <div className="flex items-center space-x-2">
              <QrCode className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Criar QR Code</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Criar Novo QR Code
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o tipo de conteúdo e preencha as informações necessárias
            </p>
          </div>

          {/* QR Creation Form */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Formulário */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="purpose">Tipo de Conteúdo</Label>
                    <Select value={qrPurpose} onValueChange={setQrPurpose}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de conteúdo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="url">Website / Link</SelectItem>
                        <SelectItem value="text">Texto Simples</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Telefone</SelectItem>
                        <SelectItem value="wifi">WiFi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {renderQrForm()}

                  {qrPurpose && (
                    <Button 
                      onClick={handleCreateQr} 
                      className="w-full"
                      size="lg"
                    >
                      Gerar QR Code <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  )}
                </div>

                {/* Preview do QR Code */}
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-secondary/20 w-64 h-64 rounded-lg flex items-center justify-center mb-6 border-2 border-dashed">
                    {showQrCode ? (
                      <QrCode className="h-40 w-40 text-primary" />
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <QrCode className="h-20 w-20 mx-auto mb-3 opacity-50" />
                        <p className="text-sm">Seu QR Code aparecerá aqui</p>
                      </div>
                    )}
                  </div>
                  {showQrCode && (
                    <div className="text-center space-y-3">
                      <p className="text-sm font-medium text-primary">QR Code criado com sucesso!</p>
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline">Baixar PNG</Button>
                        <Button size="sm" variant="outline">Baixar SVG</Button>
                        <Button size="sm" variant="outline">Copiar Link</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateQRCode;