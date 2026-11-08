defmodule LanguageList do
  def new() do
    list = []
  end

  def add(list, language) do
    list = [ language | list ]
  end

  def remove(list) do
    list = tl(list)
  end

  def first(list) do
    list = hd(list)
  end

  def count(list) do
     list = length(list)
  end

  def functional_list?(list) do
    "Elixir" in list
  end
end