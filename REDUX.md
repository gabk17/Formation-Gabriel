#Formation Redux

###Code source : [https://capsens.githost.io/ebardet/formation-redux](https://capsens.githost.io/ebardet/formation-redux)

###C'est quoi ?

Redux est une library qui permet de mieux gérer différemment les différents états contenus dans une application React (ou autre).

Dans une application React traditionnelle, les différents états sont gérés par les composants. Chaque composant possède un état interne (`this.state`) qui peut-être muté (`this.setState({...})`).

Cependant, lorsqu'on notre application scale et se retrouve avec des centaines de composants, on se retrouve assez vite dans le besoin d'avoir une gestion d'état centralisée (type base de données), permettant de :

- partager des états plus facilement
- réduire la taille des composants en découplant la logique d'état de la logique présentationnelle
- suivre et debugger facilement les changements d'états

Redux nous permet cela en gérant l'état à travers un object unique, que nous allons transformer en envoyant des actions qui seront interprétées par des fonctions pures. Une fonction pure est une fonction qui, donnés les mêmes paramètres, aura le même résultat peu importe le nombre d'appel de cette fonction. Exemple le plus simple :

```
addOne = n => {
  return n + 1;
}

addOne(1) => 2
addOne(1) => 2
```

Ainsi, l'état de l'application n'est jamais muté : chaque nouvelle action va renvoyer une nouvelle copie de l'état, contenant les transformations engendrées par l'action.

Redux peut se résumer en trois termes :

- `store` : un object simple dans lequel sera stocké **l'intégralité** de l'état de l'application

- `action` : un objet simple contenant deux informations : un type, afin d'identifier l'action, et les informations (ou "payload") que nous envoyons à notre store
- `reducer` : une fonction pure qui va recevoir les actions et décider comment celles-ci transforment le store


###Problème de départ

En React pur, on pourrait implémenter un compteur comme ceci :

```
class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      value: 0,
    };
  }
  
  incrementCounter = () => {
    this.setState({ value: this.state.value + 1 });
  }
  
  decrementCounter = () => {
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.incrementCounter}>+</button>
        <button type="button" onClick={this.decrementCounter}>-</button>
      </div>
    );
  }
}
```

Pour l'implémentation de ce compteur simple, l'ajout de Redux ne ferait que compliquer les choses inutilement. Lorsqu'un composant a besoin d'un état interne que lui seul a besoin de connaître, `state` et `setState` suffisent amplement.

Cependant, imaginons que lorsque j'incrémente ou décremente mon compteur, cela a une ou plusieurs autre action sur le reste de ma page : changer de couleur quelque part, changer la valeur d'autre compteur, augmenter la taille de tel ou tel autre composant...

Comment faire en sorte que d'autres composants ait accès à l'état de mon compteur pour que ceux-ci puisse réagir en conséquence ?

Redux nous permet de résoudre ce problème facilement en centralisant cet état, afin que n'importe quel composant puisse s'y connecter et lire sa valeur.


###Installation

`yarn add redux react-redux`


###Intégration avec React

Nous allons principalement deux composants de la library `react-redux` pour intégrer Redux à notre application React : `Provider` et `connect`.

`Provider` est un composant React qui wrap notre application, permettant à nos composants d'utiliser `connect` pour accéder au store.

`connect` est un HOC (Higher Order Component), c'est à dire un composant qui va améliorer notre composant de base en y ajoutant des fonctionnalités.

Pour avoir accès au store, il suffit de wrapper le componsant root de votre application avec le provider (ici `Counter`) :

```
import { Provider } from 'react-redux';

<Provider store={store}>
  <Counter />
</Provider>
```

Dans une application React avec Redux, l'arborescence d'un projet ressemblera souvent à ceci :

```
.git/
.gitignore
node_modules/
package.json
public/
src/
  actions/
  components/
  containers/
  index.js
  reducers/
  store/
```

###Mise en place

Pour mettre en place notre compteur, nous allons avoir besoin de :

- Déclarer un `store` qui va contenir l'état de notre compteur
- Déclarer un `reducer` qui va altérer notre état selon l'action reçue
- Déclarer deux `action`s, increment et decrement

Commencons par créer nos actions, une action peut se construire comme ceci :

```
const maSuperAction = () => ({
  type: 'MA_SUPER_ACTION',
  unAttribut: 'foo',
  unAutre: 42,
});
```

Pour notre exemple, nous avons besoin de deux actions, une pour incrémenter notre compteur, un pour le décrementer (ex : **src/actions/CounterActions.js**).

```
export const increment = () => ({ type: 'INCREMENT' });
export const decrement = () => ({ type: 'DECREMENT' });
```

on passe à la création de notre store notre reducer, que nous pouvons déclarer comme ceci (ex : **src/reducers/CounterReducer.js**) :

```
export default function counterReducer(state = 0, action) {
  switch (action.type) {
  	case 'INCREMENT':
  	  return state + 1;
  	case 'DECREMENT':
  	  return state - 1;
    default:
      return state;
  }
}
```

Enfin, on peut créer notre store (ex : **src/store/index.js**) :

```
import { createStore } from 'redux';

import counterReducer from '../reducers/CounterReducer';

export default store = createStore(counterReducer);
```

Maintenant que notre store est en place, on peut connecter n'importe quel composant pour écouter l'état de l'application : 

```
import { connect } from 'react-redux';

class Counter extends React.Component {
  ...
}

const mapStateToProps = state => ({
  ...
});

const mapDispatchToProps = dispatch => ({
  ...
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

Comme son nom l'indique, la fonction `mapStateToProps` nous permet de créer un attribut pour notre composant et de la faire correspondre à un état de l'application. Exemple :

```
const mapStateToProps = state => ({
  value: state,
});
```

Notre composant a maintenant accès à la `props` **value**, qui correspond à l'état de notre compteur (`state`)

`mapDispatchToProps` ajoute également des attributs à notre composant, mais sous forme de fonctions qui vont appeler les actions Redux qui nous avons défini (`increment`, `decrement`) et les dispatcher au store.

Exemple :

```
const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => dispatch(increment()),
  onDecrementClick: () => dispatch(decrement()),
});
```

Finalement, on peut réécrire notre composant initial :

```
import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/CounterActions';

class Counter extends React.Component {
  render() {
    const { value, onIncrementClick, onDecrementClick } = this.props;

    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onIncrementClick}>+</button>
        <button type="button" onClick={onDecrementClick}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state,
});

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => dispatch(increment()),
  onDecrementClick: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

###Plusieurs états

Pour l'instant, nous avons un seul état, qui correspond à notre compteur. Mais notre store (qui est un simple object JS) nous permet d'avoir plusieurs états. Par exemple, on pourrait vouloir stocker le nombre de fois que notre compteur a été cliqué.

Nous devons donc changer la forme de notre store, qui ressemblait à quelque chose comme ceci :

```
{
  state: 0, // la valeur de notre compteur 
}
```

vers quelque chose comme ceci par exemple :

```
{
  state: {
    value: 0, // la valeur de notre compteur
    count: 0, // nombre de clic sur notre compteur
  }
}
```

Pour ce faire, il suffit de changer un peu notre reducer :

```
export default function counterReducer(state = { value: 0, count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1, count: state.count + 1 };
    default:
      return state;
  }
}
```

et notre composant :

```
class Counter extends React.Component {
  render() {
    const { count, ... } = this.props;

    return (
      <div>
        <span>{count}</span> // on affiche notre nouvel état
        ...
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,        // on map value à la clé *value* de notre store
  count: state.count,        // même chose pour count
});

...
```

###Plusieurs reducers

Au fur et à mesure, nous allons vite avoir besoin de multiples états dans notre application, qui n'ont pas forcément de lien les uns envers les autres. Comme Redux ne nous permet de déclarer qu'un seul store, nous allons pouvoir découper nos états et nos actions en déclarant de multiple reducers.

Par exemple, si nous voulons stocker un token d'authentification en plus de notre compteur, l'état de notre application pourrait ressembler à ceci :

```
{
  state: {
    counter: {
      value: 0,
      count: 0,
    },
    auth: {
      token: null,
    },
  }
}
```

Il serait étrange que la logique et les états concernant notre compteur et notre flux d'authentification se situent au niveau du même reducer.

Nous pouvons déclarer notre nouveau reducer et nos nouvelles actions :

```
export default function authReducer(state = { token: null }, action) {
  switch (action.type) {
  	case 'LOGIN':
  	  return { ...state, token: action.token };
  	case 'LOGOUT':
  	  return { ...state, token: null };
    default:
      return state;
  }
}
```
```
export const login = token => ({
  type: 'LOGIN',
  token,
});

export const logout = () => ({
  type: 'LOGOUT',
});
```

créer notre reducer principal (ex **src/reducers/index.js**) :

```
import { combineReducers } from 'redux';

import counterReducer from './CounterReducer';
import authReducer from './AuthReducer';

export default combineReducers({
  counterReducer,
  authReducer,
});
```

et mettre à jour la création de notre store :

```
import { createStore } from 'redux';

import rootReducer from '../reducers';

export default store = createStore(rootReducer);
```

Enfin, comme nous venons d'ajouter un niveau dans profondeur dans notre store, on met à jour notre composant :

```
class Counter extends React.Component {
  ...
}

const mapStateToProps = state => ({
  value: state.counter.value,
  count: state.counter.count, 
});

...
```

Et nous pouvons maintenant créer des composants pour intéragir avec notre reducer d'authentification. 

###Components et containers

La notion de composants présentationnels ("dumb") et containers ("smart") est un pattern largement utilisé avec Redux.

Il consiste à découpler le code logique du code de présentation (HTML) en séparant nos composants React classiques en deux catégories distinctes :

- Les composants de présentation (souvent rangés dans un dossier **components**), qui vont s'occuper de savoir comment les choses sont **affichées** (style, balises HTML). Ils ne contiennent pas de logique, pas d'état et n'intéragissent pas directement avec Redux.

- Les composants containers (souvent rangés dans un dossier **containers**) sont des composants qui s'occupent de savoir comment les choses **fonctionnent**. Ils intéragissent avec Redux, contiennent de la logique et des états. Ils vont wrapper les composants de présentation et leur passer toutes les `props` nécessaires.

Exemple :


```
class Counter extends React.Component {
  render() {
    const { value, onIncrementClick, onDecrementClick } = this.props;

    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={onDecrementClick}>-</button>
        <button type="button" onClick={onIncrementClick}>+</button>
      </div>
    );
  }
}
```

```
class CounterContainer extends React.Component {
  render() {
    const { value, onIncrementClick, onDecrementClick } = this.props;

    return (
      <Counter value={value} onIncrementClick={onIncrementClick} onDecrementClick={onDecrementClick} />
    );
  }
}

const mapStateToProps = ...

const mapDispatchToProps = ...

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
```

###redux-saga

####Introduction

La dernière pièce qu'il nous manque pour avoir un flow complet géré par Redux est la gestion des effets de bord (appels API, calculs longs...). `redux-saga` est l'une des library qui permet de coupler des actions Redux à des fonctions éxecutées en background.

Une saga est une fonction qui va être appelée dès qu'une certaine action Redux va être dispatchée.

`redux-saga` utilise les **générateurs** pour l'écoute des actions Redux et le déroulement des sagas. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

####Exemple

Comme exemple, nous allons déclarer une saga qui réagit au dispatch d'une action `'LOGIN'`, qui prend comme paramètre `email` et `password`. Notre action est par exemple dispatchée par un bouton submit à la fin d'un formulaire de connexion.

```
export const login = (email, password) => ({
  type: 'LOGIN',
  email,
  password,
});

export const loginSuccess = token => ({
  type: 'LOGIN_SUCCESS',
  token,
});

export const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  error,
)};
```

Notre action login a un seul effet sur notre store : par exemple changer la valeur d'un booléen, pour montrer à l'utilisateur qu'on est en train de l'authentifier (barre de chargement, ...).

Exemple d'un reducer d'authentification :

```
const INITAL_STATE = {
  token: null,
  isLoading: false,
  error: null,
}; 

export default function authReducer = (state = INITIAL_STATE, action) {
    switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, token: action.token };
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false, token: null, error: action.error }; 
    default:
      return state;
  }
}
```

L'action `'LOGIN'` est dispatchée par un bouton, on affiche que l'authentification est en cours. En cas de succès, on enlève l'affichage du chargement, et on set le `token` renvoyé par l'API externe. En cas d'échec, on enlève l'affichage du chargement, et on affiche une erreur.

Une saga se construit en deux parties :

Premièrement on détermine **quelle action** va déclencher notre saga :

```
import { takeLatest } from 'redux-saga';

export default function* rootSaga() {
  yield takeLatest('LOGIN', loginSaga),
} 
```

Ce code nous permet de déclarer une saga **root**, qui va regrouper toutes nos sagas. Notre première saga, `loginSaga`, qui va par exemple effectuer un appel API pour nous authentifier et stocker un token, va être déclenchée à chaque fois que l'action `'LOGIN'` sera dispatchée dans notre store.

Deuxièmement, on implémente notre saga :

```
import { call, put } from 'redux-saga/effects';
import monApi from ...

export function* loginSaga(action) {
  try {
    const response = yield call(monApi.signIn, action.email, action.password);
    
    if (response.status === 200) {
      yield put('LOGIN_SUCCESS', response.data.token);
    } else {
      yield put('LOGIN_FAILURE', response.data.error);
    }
  } catch (error) {
    yield put('LOGIN_FAILURE', 'Something went wrong');
  }
} 
```

Cette saga utilise les helpers `call` et `put` de redux-saga pour faire plusieurs choses :

`call` nous permet d'appeler une fonction et d'attendre son résultat (similaire à `fetch` de JavaScript). En l'occurence on appelle un wrapper autour d'une API (par exemple [apisauce](https://github.com/infinitered/apisauce)) qui va lancer une requête post avec l'email et le password de notre utilisateur.

On utilise ensuite `put` en cas d'échec et de succès. `put` permet de dispatcher une action dans notre store. En cas de succès, on dispatch `'LOGIN_SUCCESS`' avec le token que nous renvoie l'API, en cas d'échec, on dispatch `'LOGIN_FAILURE'` avec le message d'erreur renvoyé par l'API.

En général, on place toujours la saga dans un block `try / catch` qu'on gère les erreurs de code et qu'on dispatch une action de déblocage. Par exemple, sans le `put('LOGIN_FAILURE')` dans le block `catch`, notre utilisateur serait resté bloqué avec une barre de chargement infinie sur le formulaire en cas d'erreur raised dans le code.

Pour que tout cela fonctionne, il faut qu'on connecte notre `rootSaga` à redux, pour que celle-ci puisse écouter les actions dispatchées dans notre store. Nous devons pour celà modifier la création de notre store, et y ajouter un middleware :

Notre ancien code :

```
import { createStore } from 'redux';

import rootReducer from '../reducers';

export default store = createStore(rootReducer);
```

deviendrait :

```
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
```

####take

La library nous permet de spécifier si l'on veut que notre saga soit déclenchée à chaque fois que l'action écoutée est dispatchée, ou ne prendre en compte que la dernière occurence de l'action écoutée, exemple :

```
takeLatest('LOGIN', loginSaga) // on déclenche la saga login, à chaque fois qu'on reçoit l'action login, mais seule la dernière action sera prise en compte, les précédents déclenchements de la saga seront écrasés.
takeEvery('LOGOUT', logoutSaga) // on déclenche la saga logout, à chaque fois qu'on reçoit l'action logout
```

####effects

Il existe de nombreux autres `effects` disponibles en plus de `call` et `put` qui peuvent être très utiles : [https://github.com/redux-saga/redux-saga/tree/master/docs/api#putaction](https://github.com/redux-saga/redux-saga/tree/master/docs/api#putaction)

###redux-persist



###Bonus

- reduxsauce
- Reactotron