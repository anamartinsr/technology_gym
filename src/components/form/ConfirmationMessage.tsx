import { UI_TEXT } from "@/constants/uiText";

export default function ConfirmationMessage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-(--secondary-color) mb-4">
        {UI_TEXT.confirmation.title}
      </h1>

      <p className="text-lg text-(--gray) mb-8">
        {UI_TEXT.confirmation.description}
      </p>

      <div className="space-y-4">
        <p className="text-base text-(--gray)">
          {UI_TEXT.confirmation.welcomePrefix}{" "}
          <strong>{UI_TEXT.brand.name}</strong>!
        </p>
      </div>
    </>
  );
}
