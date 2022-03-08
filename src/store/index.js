import { atom } from 'recoil'

const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }
  
    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const iduserLogged = atom({
    key:'iduser-logged',
    default: '',
    effects: [
        localStorageEffect('iduserLogged'),
    ]
})

const nameuserLogged = atom({
    key:'nameuser-logged',
    default: '',
    effects: [
        localStorageEffect('nameuserLogged'),
    ]
})

const expiredLoged = atom({
    key:'expired-logged',
    default: '',
    effects: [
        localStorageEffect('expiredLogged'),
    ]
})

const tokenLoged = atom({
    key:'token-logged',
    default: '',
    effects: [
        localStorageEffect('tokenLogged'),
    ]
})

const statusLogged = atom({
    key:'status-logged',
    default: false,
    effects: [
        localStorageEffect('isLogged'),
    ]
})


export { iduserLogged, nameuserLogged, expiredLoged, statusLogged, tokenLoged }