<template>
 <div class="card m-5">
     <h3 class="card-header text-center"> Enregistrement</h3>
     <div class="card-body">
         <form>
             <div class="form-row">
                 <div class="col-md-6 form-group">
                     <label for="nom">Nom</label>
                     <input type="text" class="form-control" v-model.trim="$v.nom.$model"
                      :class="{'is-invalid':$v.nom.$error, 'is-valid':!$v.nom.$invalid}">
                      <div class="valid-feedback"> votre nom est valide</div>
                      <div class="invalid-feedback">
                          <span v-if="!$v.nom.required"> le nom est obligatoire</span>
                          <span v-if="!$v.nom.minLength"> le nom doit depasser {{ $v.nom.$params.minLength.min }} lettres</span>
                          <span v-if="!$v.nom.maxLength"> le nom ne doit pas depasser {{ $v.nom.$params.maxLength.max }} lettres</span>
                      </div>
                 </div>


                 <div class="col-md-6 form-group">
                     <label for="prenom">Prenom</label>
                     <input type="text" class="form-control" v-model.trim="$v.prenom.$model"
                      :class="{'is-invalid':$v.prenom.$error, 'is-valid':!$v.prenom.$invalid}">
                      <div class="valid-feedback"> votre prenom est valide</div>
                      <div class="invalid-feedback">
                          <span v-if="!$v.prenom.required"> le prenom est obligatoire</span>
                          <span v-if="!$v.prenom.minLength"> le prenom doit depasser {{ $v.prenom.$params.minLength.min }} lettres</span>
                          <span v-if="!$v.prenom.maxLength"> le prenom ne doit pas depasser {{ $v.prenom.$params.maxLength.max }} lettres</span>
                      </div>
                 </div>
             </div>

             <div class="form-row"> 
                 <div class="col-md-6 form-group">
                     <label for="age">Age</label>
                     <input type="number" class="form-control" v-model.number.lazy="$v.age.$model"
                      :class="{'is-invalid':$v.age.$error, 'is-valid':!$v.age.$invalid}">
                      <div class="valid-feedback"> votre age est valide</div>
                      <div class="invalid-feedback">
                         <span v-if="!$v.age.between"> l'age doit être entre {{ $v.age.$params.between.min }} et {{ $v.age.$params.between.max }}</span>
                      </div>
                 </div>

                  <div class="col-md-6 form-group">
                     <label for="username">Username</label>
                     <input type="text" class="form-control" v-model.trim="$v.username.$model"
                      :class="{'is-invalid':$v.username.$error, 'is-valid':!$v.username.$invalid}">
                      <div class="valid-feedback"> votre username est valide</div>
                      <div class="invalid-feedback">
                          <span v-if="!$v.username.required"> le username est obligatoire</span>
                          <span v-if="!$v.username.minLength"> le username doit depasser {{ $v.username.$params.minLength.min }} lettres</span>
                          <span v-if="!$v.username.maxLength"> le username ne doit pas depasser {{ $v.username.$params.maxLength.max }} lettres</span>
                          <span v-if="!$v.username.isUnique"> le username existe déjà !</span>
                      </div>
                 </div>
             </div>

             <div class="form-row"> 
                 <div class="col-md-5 form-group">
                     <label for="password">Password</label>
                     <input type="password" class="form-control" v-model.trim="$v.password.$model"
                      :class="{'is-invalid':$v.password.$error, 'is-valid':!$v.password.$invalid}" id="password">
                      <div class="valid-feedback"> votre password est valide</div>
                      <div class="invalid-feedback">
                          <span v-if="!$v.password.required"> le password est obligatoire</span>
                          <span v-if="!$v.password.minLength"> le password doit depasser {{ $v.password.$params.minLength.min }} lettres</span>
                          <span v-if="!$v.password.maxLength"> le password ne doit pas depasser {{ $v.password.$params.maxLength.max }} lettres</span>
                         
                      </div>
                 </div>
                 </div>

                 <div class="form-group form-check">
                     <input type="checkbox" class="form-check-input" id="showpassword" v-model="showpassword" @click="ToggleShowPassword">
                     <label for="showpassword" class="form-check-label">show password</label>
                 </div>
            <div class="form-row">
                 <div class="col-md-5 form-group">
                     <label for="password">Repeat Password</label>
                     <input type="password" class="form-control" v-model.trim="$v.repeatpassword.$model"
                      :class="{'is-invalid':$v.repeatpassword.$error, 'is-valid':(password !='') ? !$v.repeatpassword.$invalid:''}">
                      <div class="valid-feedback"> vos mot de passe sont est identiques</div>
                      <div class="invalid-feedback">
                          <span v-if="!$v.repeatpassword.required"> le password est obligatoire</span>
                          <span v-if="!$v.repeatpassword.sameAspassword"> les mots de passe ne sont pas identiques</span>
                         
                      </div>
                 </div>
             </div>
        </form>   
     </div>
 </div>
</template>

<script>
import {required,minLength,maxLength, between, sameAs} from 'vuelidate/lib/validators'
export default {
    name:'register',
    data: function(){
        return {
            nom:'',
            prenom:'',
            username:'',
           // email:'',
            age:0,
            password:'',
            repeatpassword:'',
            showpassword:false
        }
    },
    validations:{
        nom:{required, minLength:minLength(3), maxLength:maxLength(10)},
        prenom:{required, minLength:minLength(4), maxLength:maxLength(30)},
        username:{
            required,
             minLength:minLength(4),
              maxLength:maxLength(30)},
              isUnique(value){
                  if(value ==='') return true;
                  return new Promise((resolve)=>{
                      setTimeout(()=>{
                          resolve(typeof value ==='string' && value.length % 2 !==0)}
                          , 350 +Math.random * 300)
                  })
              },

      /* email:{
            required,
             minLength:minLength(4),
              maxLength:maxLength(30)},
              isUnique(value){
                  if(value ==='') return true;
                  var email_regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                  return new Promise((resolve)=>{
                      setTimeout(()=>{
                          resolve(email_regex.test(value))
                          } , 350 +Math.random * 300)
                  })
              },*/

        age:{between:between(15,40)},
        password:{
            required,
             minLength:minLength(6),
             maxLength:maxLength(18)

        },
        repeatpassword:{
            required,
            sameAspassword:sameAs('password')
            }
    },
    methods:{
        resetdata(){
            this.nom='';
            this.prenom='';
            this.age='';
        },

        ToggleShowPassword(){
            var show = document.getElementById('password')
            if(this.showpassword==false){
                this.showpassword=true
                show.type='text'
            }else{
                 this.showpassword=false
                show.type='password'
            }
        }
       

            /*alert('connecté avec succès !');
            this.$v.$reset();
            this.resetdata();*/
        
    }

    
}
</script>