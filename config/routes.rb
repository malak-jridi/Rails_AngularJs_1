Rails.application.routes.draw do
  devise_for :users

  root 'application#index'

  post 'authenticate', to: 'authentification#authenticate'



  get 'employees' , to: 'user#getAllEmployees'
  get 'admins' , to: 'user#getAllAdmins'
  get 'users', to: 'user#index'


  post '/saveEmployee', to: 'user#create'
  get 'employees/:id' , to: 'user#show'
  put '/updateUser/(/:id)', to: 'user#update'
  put '/profil/(/:id)', to: 'user#changeInfo'


  delete 'employees/:id', to: 'user#destroy'

  get '/GetLoggedUserInfo', to: 'application#GetLoggedUserInfo'
  get '/getEmployeeBYId/(/:id)', to: 'user#getEmployeeBYId'
  
  post '/saveDemand', to: 'demand#create'
  get '/GetUserConges/(/:id)', to: 'demand#getUserConges'
  get 'getCongeById/(/:id)', to: 'demand#getCongeById'
  delete '/deleteDemande/(/:id)', to: 'demand#deleteDemande'
  put 'addMotifR/(/:id)', to: 'demand#postMotifR' 
  get 'demands', to:'demand#index'

  get 'demandaccept', to: 'demand#getDemandA'
  get 'demandrefuse', to: 'demand#getDemandR'

end
