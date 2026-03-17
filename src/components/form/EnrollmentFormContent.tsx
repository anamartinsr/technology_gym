import type { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

import CheckboxField from "@/components/form/CheckboxField";
import InputField from "@/components/form/InputField";
import SelectField from "@/components/form/SelectField";
import Button from "@/components/ui/Button";
import { UI_TEXT } from "@/constants/uiText";
import type {
  EnrollmentConsentField,
  EnrollmentInputField,
  EnrollmentInputName,
} from "@/data/enrollmentForm";
import type { EnrollmentFormData } from "@/schemas/enrollmentSchema";

interface PlanOption {
  value: string;
  label: string;
}

interface EnrollmentFormContentProps {
  viewModel: {
    title: string;
    primaryField: EnrollmentInputField;
    fieldRows: readonly (readonly EnrollmentInputField[])[];
    consentFields: readonly EnrollmentConsentField[];
    planOptions: readonly PlanOption[];
    isSubmitting: boolean;
  };
  bindings: {
    errors: FieldErrors<EnrollmentFormData>;
    registerField: (name: EnrollmentInputName) => UseFormRegisterReturn;
    registerPlan: UseFormRegisterReturn;
    registerConsent: (
      name: EnrollmentConsentField["name"],
    ) => UseFormRegisterReturn;
    getFieldKeyDown: (
      name: EnrollmentInputName,
    ) => React.KeyboardEventHandler<HTMLInputElement> | undefined;
  };
}

export default function EnrollmentFormContent({
  viewModel,
  bindings,
}: EnrollmentFormContentProps) {
  return (
    <>
      <h2 className="text-xl font-bold text-(--secondary-color)">
        {viewModel.title}
      </h2>

      <InputField
        label={viewModel.primaryField.label}
        id={viewModel.primaryField.id}
        type={viewModel.primaryField.type}
        placeholder={viewModel.primaryField.placeholder}
        maxLength={viewModel.primaryField.maxLength}
        {...bindings.registerField(viewModel.primaryField.name)}
        onKeyDown={bindings.getFieldKeyDown(viewModel.primaryField.name)}
        error={bindings.errors[viewModel.primaryField.name]}
      />

      {viewModel.fieldRows.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {row.map((field) => (
            <InputField
              key={field.id}
              label={field.label}
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              {...bindings.registerField(field.name)}
              onKeyDown={bindings.getFieldKeyDown(field.name)}
              error={bindings.errors[field.name]}
            />
          ))}
        </div>
      ))}

      <SelectField
        label="Confirme seu plano"
        id="plan"
        options={[...viewModel.planOptions]}
        {...bindings.registerPlan}
        error={bindings.errors.plan}
      />

      <fieldset className="space-y-2">
        <legend className="sr-only">Consentimentos</legend>

        {viewModel.consentFields.map((field) => (
          <CheckboxField
            key={field.id}
            label={field.label}
            id={field.id}
            {...bindings.registerConsent(field.name)}
            error={bindings.errors[field.name]}
          />
        ))}
      </fieldset>

      <div className="flex justify-center mt-4">
        <Button
          variant="enrollment"
          type="submit"
          disabled={viewModel.isSubmitting}
          text={
            viewModel.isSubmitting
              ? UI_TEXT.cta.submitting
              : UI_TEXT.cta.confirmEnrollment
          }
        />
      </div>
    </>
  );
}
