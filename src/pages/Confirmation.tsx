import { useNavigate } from "react-router-dom";
import SuccessIcon from "@/components/form/SuccessIcon";
import ConfirmationMessage from "@/components/form/ConfirmationMessage";
import Button from "@/components/ui/Button";
import { UI_TEXT } from "@/constants/uiText";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-2xl w-full text-center">
        <SuccessIcon />
        <ConfirmationMessage />

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            text={UI_TEXT.cta.backToHome}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
}
