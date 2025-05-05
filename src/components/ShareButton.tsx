
import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TranslationCategory } from '../data/translationPairs';

interface ShareButtonProps {
  designText: string;
  businessText: string;
  marketingText: string;
  developmentText: string;
  familyText: string;
  currentCategory: TranslationCategory;
}

const ShareButton: React.FC<ShareButtonProps> = ({ 
  designText, 
  businessText
}) => {
  const [isSharing, setIsSharing] = useState(false);
  const { t } = useLanguage();

  const handleShare = async () => {
    setIsSharing(true);
    
    // Create text to share - simplified to just design and business
    const shareText = `💬 ${t("share.designSays")}:\n"${designText}"\n\n🔄 ${t("share.businessUnderstands")}:\n"${businessText}"\n\nwhendesignsays.com`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          text: shareText
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert(t("share.copied"));
      }
    } catch (error) {
      console.error('Error sharing:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <button 
      className={`flex items-center justify-center gap-2 py-2 px-8 bg-white text-black font-mono text-sm uppercase border-2 border-black hover:bg-black hover:text-white transition-colors ${isSharing ? 'opacity-50' : ''}`}
      onClick={handleShare}
      disabled={isSharing}
    >
      <span>{t("share.button")}</span>
      <Share2 className="h-4 w-4" />
    </button>
  );
};

export default ShareButton;
