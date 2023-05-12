defmodule OurmaidsWeb.MailController do
  use OurmaidsWeb, :controller
  import Ourmaids.ContactMail

  def create(conn, email) do
    with {:ok, response} <- contact_email(email) |> Ourmaids.Mailer.deliver(response: true) do
      conn
      |> put_status(:created)
      |> render(:show, response: response)
    end
  end
end
