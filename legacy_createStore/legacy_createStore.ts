export const legacy_createStore = <State, Action>(reducer:(state:State | undefined, action: Action )=> State )=>{

  let state = reducer(undefined, { type: "@@redux/INITd.9.2.u.o.q" } as Action);

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