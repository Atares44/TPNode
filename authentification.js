html
    head
        link(href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', rel='stylesheet')
    body
        form(method='post', action='/login')
            .form-group
                input#email.form-control(type='email', placeholder='Saisissez votre adresse email', name='email', value='')
                input#password.form-control(type='password', placeholder='Saisissez votre mot de passe', name='password', value='')
            button.btn.btn-block.btn-default(type='submit') Se connecter