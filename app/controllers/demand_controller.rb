class DemandController < ApplicationController


     def create
        conge = Demand.new(demand_params);
        if conge.save
         render json: {status: 'SUCCESS',message: 'Saved demand',data: conge},status: :ok
        else
            render json: {status: 'ERROR',message: 'Demand not saved ',data: conge.errors},status: :unprocessable_entity
        
        end
    end
     
    
        def index
         conges = Demand.all
       
         render json: {status: 'SUCCESS',message: 'employees loaded',data: conges},:include=> :user, status: :ok
        end

def getCongeById
    conge = Demand.find(params[:id]) 
    render json: {status: 'SUCCESS',message: 'employee loaded ',data: conge},:include=> :user, status: :ok

end

       # get '/GetUserConges/(/:id)
       def getUserConges
        conge = Demand.where(user_id: params[:id])
        #.order('updated_at DESC')
        render json: {status: 'SUCCESS',message: 'Loaded Congés demande',data: conge},status: :ok
       end 
        # get '/getUserCongeModel/(/:id)
  

        def postMotifR
           # byebug
            conge = Demand.find(params[:id])
            if conge.update_attributes(demand_params)
              render json: conge
            else
              render json: { errors: conge.errors.full_messages }, status: :unprocessable_entity
            end
        end


    private
    def demand_params
        params.permit(:id, :user_id , :date_from, :date_to, :reason_request, :etat, :reason_refuse)
    end
    
end
