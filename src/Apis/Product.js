import Api from './Api';
const END_POINT = 'products';

export default {
    all() {
        return Api.get(END_POINT);
    },
    show(id) {
        return Api.get(END_POINT + '/' + id);
    },

    store(data) {
        return Api.post(END_POINT, data);
    },

    delete(id) {
        return Api.delete(END_POINT + '/' + id);
    },

    edit(id) {
        return Api.get(END_POINT + '/prod/' + id);
    },

    update(data) {
        return Api.put(END_POINT, data);
    }


}