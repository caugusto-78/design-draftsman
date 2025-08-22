import { useNavigate } from "react-router-dom";
import OnboardingContainer from "@/components/onboarding/OnboardingContainer";

const FirstTimeOnboarding = () => {
  const navigate = useNavigate();

  const handleOnboardingComplete = () => {
    // Redirect to dashboard after onboarding completion
    navigate("/");
  };

  return <OnboardingContainer onComplete={handleOnboardingComplete} />;
};

export default FirstTimeOnboarding;