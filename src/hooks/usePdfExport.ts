import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useToast } from '@/hooks/use-toast';

export const usePdfExport = () => {
  const { toast } = useToast();

  const exportToPdf = async (elementId: string, filename: string) => {
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        toast({
          title: "Erro",
          description: "Elemento não encontrado para exportação",
          variant: "destructive",
        });
        return;
      }

      // Criar canvas da página
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Configurar PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = pdfWidth / pdfHeight;

      let imgWidth, imgHeight;
      
      if (imgAspectRatio > pdfAspectRatio) {
        imgWidth = pdfWidth;
        imgHeight = pdfWidth / imgAspectRatio;
      } else {
        imgHeight = pdfHeight;
        imgWidth = pdfHeight * imgAspectRatio;
      }

      const x = (pdfWidth - imgWidth) / 2;
      const y = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
      pdf.save(`${filename}.pdf`);

      toast({
        title: "Sucesso",
        description: `PDF ${filename} exportado com sucesso!`,
      });
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      toast({
        title: "Erro",
        description: "Falha ao exportar PDF",
        variant: "destructive",
      });
    }
  };

  const exportAllPages = async () => {
    const pages = [
      { id: 'wireframe-homepage', name: 'Midiacode-Homepage' },
      { id: 'wireframe-pricing', name: 'Midiacode-Precos' },
      { id: 'wireframe-login', name: 'Midiacode-Login' }
    ];

    for (const page of pages) {
      // Delay entre exportações para evitar conflitos
      await new Promise(resolve => setTimeout(resolve, 1000));
      await exportToPdf(page.id, page.name);
    }
  };

  return {
    exportToPdf,
    exportAllPages
  };
};