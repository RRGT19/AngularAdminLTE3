export const FORM_VALIDATION_MESSAGES = {
  email: [
    {type: 'required', message: 'Campo requerido.'},
    {type: 'pattern', message: 'Correo electrónico inválido.'}
  ],
  password: [
    {type: 'required', message: 'Campo requerido.'},
    {type: 'minlength', message: 'Mínimo 6 caracteres.'}
  ],
};

export const REGEXP = {
  email: new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
};

export const Constants = {};
