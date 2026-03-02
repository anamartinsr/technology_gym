export default function ConfirmationMessage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-(--secondary-color) mb-4">
        Matrícula Confirmada!
      </h1>

      <p className="text-lg text-(--gray) mb-8">
        Sua matrícula foi realizada com sucesso. Em breve você receberá um
        e-mail com os detalhes e próximos passos.
      </p>

      <div className="space-y-4">
        <p className="text-base text-(--gray)">
          Bem-vindo à <strong>Technology Gym</strong>! 💪
        </p>
      </div>
    </>
  );
}
