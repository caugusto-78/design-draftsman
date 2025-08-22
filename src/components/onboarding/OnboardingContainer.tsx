import { useState } from "react";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import OnboardingStep4 from "./OnboardingStep4";
import OnboardingStep5 from "./OnboardingStep5";

interface OnboardingContainerProps {
  onComplete: () => void;
}

const OnboardingContainer = ({ onComplete }: OnboardingContainerProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <OnboardingStep1 onNext={nextStep} />;
      case 2:
        return <OnboardingStep2 onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <OnboardingStep3 onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <OnboardingStep4 onNext={nextStep} onBack={prevStep} />;
      case 5:
        return <OnboardingStep5 onNext={nextStep} onBack={prevStep} />;
      default:
        return <OnboardingStep1 onNext={nextStep} />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default OnboardingContainer;