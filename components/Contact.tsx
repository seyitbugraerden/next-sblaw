"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section>
      <div className="max-contain px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-row items-stretch gap-4">
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d722.1401205993648!2d32.77267406647336!3d39.91178178846948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOrhan%20Aspava!5e0!3m2!1str!2str!4v1740773651587!5m2!1str!2str"
              width="600"
              height="450"
              loading="lazy"
              className="w-full h-full lg:rounded-r-2xl rounded-2xl"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex-1 flex flex-col justify-between p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl"
          >
            <div>
              <h2 className="text-black text-4xl font-bold text-start mb-11">
                Bize Mesaj Gönder
              </h2>
              <input
                {...register("name", {
                  required: "Lütfen adınızı ve soyadınızı girin.",
                  minLength: {
                    value: 3,
                    message: "Ad Soyad en az 3 karakter olmalıdır.",
                  },
                })}
                type="text"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-2"
                placeholder="Ad Soyad"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.name.message}
                </p>
              )}

              <input
                {...register("email", {
                  required: "Lütfen geçerli bir e-posta adresi girin.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Geçerli bir e-posta adresi girin.",
                  },
                })}
                type="email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-2"
                placeholder="E-Posta"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.email.message}
                </p>
              )}

              <input
                {...register("phone", {
                  required: "Lütfen telefon numaranızı girin.",
                  pattern: {
                    value: /^\+?\d{1,3}[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{4}$/,
                    message: "Geçerli bir telefon numarası girin.",
                  },
                })}
                type="tel"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-2"
                placeholder="Telefon"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.phone.message}
                </p>
              )}

              <textarea
                {...register("message", {
                  required: "Lütfen bir mesaj yazın.",
                  minLength: {
                    value: 10,
                    message: "Mesaj en az 10 karakter olmalıdır.",
                  },
                })}
                rows={6}
                className="w-full resize-none text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-lg border border-gray-200 focus:outline-none pl-4 mb-2"
                placeholder="Mesaj"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-12 text-white text-base font-semibold leading-6 rounded-lg transition-all duration-700 hover:bg-red-500/30 hover:text-black bg-red-500 shadow-sm"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
