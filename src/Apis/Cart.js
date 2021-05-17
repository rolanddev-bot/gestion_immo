import Api from './Api';
const END_POINT = 'cart';
export default {

    store(data){
        return Api.post(END_POINT,data)
    },

    show(){
        return Api.get(END_POINT);
    },

    delete(id){
        return Api.delete(END_POINT+'/'+id);
    },

    deleteall(){
        return Api.delete(END_POINT)
    }
}