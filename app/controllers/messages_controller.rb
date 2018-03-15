class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages
  end

  def create
    Message.create!(message_param)
    render json: :ok
  end

  private

    def message_param
      params.permit(:text)
    end
end
