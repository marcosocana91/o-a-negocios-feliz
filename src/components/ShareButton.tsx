
import React from 'react';
import { Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface ShareButtonProps {
  designText: string;
  businessText: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ designText, businessText }) => {
  const handleShare = async () => {
    const shareText = `Cuando diseño dice: "${designText}"\n\nNegocio debería entender: "${businessText}"\n\nTraducido con Traductor Diseño-Negocio`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Traductor Diseño-Negocio',
          text: shareText,
          url: window.location.href,
        });
        toast.success('¡Compartido con éxito!');
      } catch (error) {
        console.error('Error al compartir:', error);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const shareText = `Cuando diseño dice: "${designText}"\n\nNegocio debería entender: "${businessText}"\n\nTraducido con Traductor Diseño-Negocio`;
    
    navigator.clipboard.writeText(shareText)
      .then(() => {
        toast.success('Copiado', {
          description: 'Texto copiado al portapapeles'
        });
      })
      .catch((err) => {
        console.error('Error al copiar:', err);
        toast.error('No se pudo copiar al portapapeles');
      });
  };

  return (
    <button 
      onClick={handleShare}
      className="flex items-center justify-center gap-2 py-2 px-8 border-2 border-black font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white"
      aria-label="Compartir traducción"
    >
      <Share2 className="h-4 w-4" />
      <span>Compartir</span>
    </button>
  );
};

export default ShareButton;
