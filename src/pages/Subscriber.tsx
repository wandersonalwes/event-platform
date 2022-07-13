import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from "../../src/assets/code-mockup.png";
import { toast } from "react-toastify";

export const Subscriber = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading, error }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    if (!name || !email) {
      toast.warning("Por favor, preencha todos os campos");
      return;
    }

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  useEffect(() => {
    if (error) {
      toast.error("Sua inscrição falhou! :(");
    }
  }, [error]);
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center mx-auto mt-20 gap-8 px-5">
        <div className="max-w-[640px] px-4 flex flex-col items-center md:items-start">
          <Logo />
          <h1 className="mt-8 text-[1.97rem] md:text-[2.5rem] leading-tight text-center md:text-start">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed text-center md:text-start text-sm md:text-base">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <span className="text-2xl mb-6 block font-bold">
            Inscreva-se gratuitamente
          </span>

          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={(event) => handleSubscribe(event)}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              id=""
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Carregando..." : "Garantir minha vaga"}
            </button>
          </form>
        </div>
      </div>

      <img src={imgUrl} className="mt-10" />
    </div>
  );
};
