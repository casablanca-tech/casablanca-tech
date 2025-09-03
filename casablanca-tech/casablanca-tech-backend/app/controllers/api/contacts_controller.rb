class Api::ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    contact_params = params.permit(:name, :email, :company, :message)
    
    if contact_params[:name].present? && 
       contact_params[:email].present? && 
       contact_params[:message].present?
      
      # In production, you would send this to email or save to database
      # For now, we'll just log it
      Rails.logger.info "Contact form submission: #{contact_params.inspect}"
      
      render json: { message: "Contact form submitted successfully" }, status: :created
    else
      render json: { error: "Name, email, and message are required" }, status: :unprocessable_entity
    end
  end
end