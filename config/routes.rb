Rails.application.routes.draw do
  root to: 'pages#home'
  get "/about", to: "pages#about"
  get "/projects", to: "pages#projects"
  get "/contact", to: "pages#contact"
end
