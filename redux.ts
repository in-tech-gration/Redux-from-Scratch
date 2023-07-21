export const createStore = <State, Action>(initialState: State, reducer:(state:State, action: Action)=> State )=>{

  let state = initialState;

  const getState = ()=> state;
  const subscribers = new Set<(state: State)=>void>();

  return {
    getState,
    dispatch: (action: Action)=>{
      state = reducer(state, action);
      subscribers.forEach( subscriber => subscriber(state) )
    },
    subscribe: (callback:(state: State)=>void)=>{
      subscribers.add(callback);
      return ()=>{
        subscribers.delete(callback);
      }     
    }
  }
}