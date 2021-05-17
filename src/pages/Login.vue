<template>
 <div>
     <div class="row">
         <div class="col-md-4"></div>
         <div class="col-md-4">
             <div class="card mt-5" style="width:700px">
            <form id="login" v-on:submit.prevent="submit">
                 <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" :class="{'is-invalid':validationStatus($v.username)}" placeholder="Enter username" id="email" v-model.trim="$v.username.$model">
                     <div v-if="!$v.username.required" class="invalid-feedback">le Username est obligatoire </div>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="text" class="form-control" :class="{'is-invalid':validationStatus($v.email)}" placeholder="Enter email" id="email" v-model.trim="$v.email.$model">
                     <div v-if="!$v.email.required" class="invalid-feedback">le mail est obligatoire </div>
                     <div  class="valid-feedback">well </div>
                     <div v-if="!$v.email.email" class="invalid-feedback">le mail n'est pas valide </div>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" :class="{'is-invalid':validationStatus($v.password)}" placeholder="Enter password" id="pwd"
                     v-model.trim="$v.password.$model">
                    <div v-if="!$v.password.required" class="invalid-feedback">Le mot de passe est obligatoire </div>
                    <div v-if="!$v.password.minLength" class="invalid-feedback">Le mot de passe doit être égal ou supérieur à {{$v.password.$params.minLength.min}} </div>
                    <div v-if="!$v.password.maxLength" class="invalid-feedback">Le mot de passe ne doit pas dépasser {{$v.password.$params.maxLength.max}}  caractères </div>
                </div>



                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Envoyer</button>
    </form>
     </div>
         </div>
         <div class="col-md-4"></div>
     </div>
     
 </div>
</template>

<script>
import {required, email,minLength,maxLength} from 'vuelidate/lib/validators'
export default {
    name:'Login',
    data: function(){
        return {
            email:'',
            password:'',
            username:''
           // repeat_password:''
        }
    },
    validations:{
        email:{required, email},
        password:{required, minLength:minLength(6), maxLength:maxLength(15)},
       // repeat_password:{required, minLength:minLength(6), maxLength:maxLength(15)},
        username:{required}
    },
    methods:{
        resetdata(){
            this.email='';
            this.password='';
           // this.repeat_password='';
            this.username='';
        },
        validationStatus:function(validation){
            return  typeof validation !="undefined" ? validation.$error:false;
        },
        submit:function(){
            this.$v.$touch();
            if(this.$v.$pendding || this.$v.$error) return ;

            alert('connecté avec succès !');
            this.$v.$reset();
            this.resetdata();
        }
    }

    
}
</script>