defmodule HelloWeb.HelloController do
  use HelloWeb, :controller

  def saudacao(conn, %{"lang" => "pt", "name" => nome}) do
    render(conn, :saudacao, mensagem: "Olá", name: nome)
  end

  def saudacao(conn, %{"lang" => "en", "name" => nome}) do
    render(conn, :saudacao, mensagem: "Hello", name: nome)
  end
end
