class UserController < ApplicationController

   #before_action :authenticate_user!


   def sign_in
    byebug
  end




  def index
    users = User.all
    render json: users
  end

  def getAllEmployees
      employees = User.where(role: 'employee')
      render json: employees

  end

  def getAllAdmins
    admins = User.where(role:'admin')
    render json: admins

  end
      
  def create
   # byebug
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
          

  def show
    user = User.find(params[:id])
    render json: user
  end
      
   

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  
  def getEmployeeBYId
     employee = User.find(params[:id])
     render json: employee 
  end
      
  def destroy
    user = User.destroy(params[:id])
    render json: {status: 'SUCCESS',message: 'delete employee success'},status: :ok
  end
      
  private    
      def user_params
        params.permit(:name, :username, :email, :password, :role, :phone)
      end
  
  private    
      def admin_params
        params.permit(:email, :password, :name, :username, :image)
      end


end
