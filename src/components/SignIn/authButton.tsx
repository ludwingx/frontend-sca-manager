import React from "react";

const AuthButton = ({
  type,
  loading,
}: {
  type: "Iniciar Sesión" | "Registrar Usuario" | "Cambiar Contraseña" | "Forgot Password";
  loading: boolean;
}) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className={`$flex justify-center rounded bg-primary px-6 py-2 font-medium text-gray hover:bg-opacity-90{
        loading ? "bg-gray-600" : "bg-blue-600"
      } rounded-md w-full px-12 py-3 text-sm font-medium text-white`}
    >
      {loading ? "Cargando..." : type}
    </button>
  );
};

export default AuthButton;