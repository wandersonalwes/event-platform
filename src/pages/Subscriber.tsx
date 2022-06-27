import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from "../../src/assets/code-mockup.png";

export const Subscriber = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex justify-between items-center mx-auto mt-20">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
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
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={imgUrl} className="mt-10" />
    </div>
  );
};
