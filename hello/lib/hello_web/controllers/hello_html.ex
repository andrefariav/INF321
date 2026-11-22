defmodule HelloWeb.HelloHTML do
  use HelloWeb, :html

  embed_templates "hello_html/*"

  def format_name(name) do
    String.capitalize(name)
  end

end
