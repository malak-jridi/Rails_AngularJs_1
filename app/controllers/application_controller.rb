class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    before_action :configure_permitted_parameters, if: :devise_controller?
    skip_before_action :verify_authenticity_token
  
  
    respond_to :json

    delegate :user, :to => :demand
  


def index
  render 'application/index'
end

    protected
    def configure_permitted_parameters
      add_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
      devise_parameter_sanitizer.permit :sign_up, keys: add_attrs
      devise_parameter_sanitizer.permit :account_update, keys: add_attrs
    end

    public
    def GetLoggedUserInfo
      @user= current_user
      render json: {status: 'SUCCESS',message: 'GetLoggedUserInfo',data: @user},status: :ok
    end

    def not_found
    render json: {page: 'not found !'}
    end

end
