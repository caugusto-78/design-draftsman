import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  FolderOpen, 
  Plus, 
  Settings, 
  Users, 
  QrCode, 
  MoreHorizontal,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const WorkspaceSelector = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState("workspace-1");
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const workspaces = [
    {
      id: "workspace-1",
      name: "Meu Primeiro Workspace",
      description: "Workspace principal para todos os meus projetos pessoais",
      qrCount: 3,
      isActive: true,
      isOwner: true,
      color: "blue"
    },
    {
      id: "workspace-2",
      name: "Projetos Cliente ABC",
      description: "Workspace dedicado aos projetos do cliente ABC Corp",
      qrCount: 0,
      isActive: false,
      isOwner: true,
      color: "green"
    }
  ];

  const currentWorkspace = workspaces.find(w => w.id === selectedWorkspace);

  return (
    <div className="space-y-6">
      {/* Current Workspace Display */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{currentWorkspace?.name}</CardTitle>
                <CardDescription>{currentWorkspace?.description}</CardDescription>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              Ativo
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{currentWorkspace?.qrCount}</p>
              <p className="text-sm text-muted-foreground">QR Codes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">127</p>
              <p className="text-sm text-muted-foreground">Total Scans</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">1</p>
              <p className="text-sm text-muted-foreground">Membros</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is a Workspace? */}
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <AlertCircle className="w-5 h-5" />
            O que é um Workspace?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-orange-700">
            Um <strong>Workspace</strong> é o seu espaço de trabalho dedicado onde organiza todos os seus QR Codes por projeto ou cliente.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-orange-700">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Organize por projeto</span>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Partilhe com equipas</span>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Analytics separados</span>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <CheckCircle className="w-4 h-4 text-orange-600" />
              <span>Acesso controlado</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All Workspaces */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Os Meus Workspaces</CardTitle>
              <CardDescription>
                Gerir e alternar entre os seus workspaces
              </CardDescription>
            </div>
            <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Workspace
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Criar Novo Workspace</DialogTitle>
                  <DialogDescription>
                    Organize os seus QR Codes criando um novo workspace dedicado
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="workspace-name">Nome do Workspace</Label>
                    <Input 
                      id="workspace-name" 
                      placeholder="Ex: Projetos Cliente XYZ" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="workspace-desc">Descrição (opcional)</Label>
                    <Textarea 
                      id="workspace-desc" 
                      placeholder="Descreva o propósito deste workspace..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={() => setShowCreateDialog(false)}>
                      Criar Workspace
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {workspaces.map((workspace) => (
              <div 
                key={workspace.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  workspace.id === selectedWorkspace 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-muted-foreground/50'
                }`}
                onClick={() => setSelectedWorkspace(workspace.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded bg-${workspace.color}-100 flex items-center justify-center`}>
                      <FolderOpen className={`w-4 h-4 text-${workspace.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{workspace.name}</h3>
                      <p className="text-sm text-muted-foreground">{workspace.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium">{workspace.qrCount} QR Codes</p>
                      <p className="text-xs text-muted-foreground">
                        {workspace.isOwner ? 'Proprietário' : 'Membro'}
                      </p>
                    </div>
                    {workspace.id === selectedWorkspace && (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions for Current Workspace */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start h-auto p-3">
              <QrCode className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div className="font-medium">Criar QR Code</div>
                <div className="text-xs text-muted-foreground">Neste workspace</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-3">
              <Users className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div className="font-medium">Convidar Equipa</div>
                <div className="text-xs text-muted-foreground">Partilhar acesso</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-3">
              <Settings className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div className="font-medium">Configurações</div>
                <div className="text-xs text-muted-foreground">Gerir workspace</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-3">
              <MoreHorizontal className="w-4 h-4 mr-3" />
              <div className="text-left">
                <div className="font-medium">Ver Todos</div>
                <div className="text-xs text-muted-foreground">QR Codes</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkspaceSelector;