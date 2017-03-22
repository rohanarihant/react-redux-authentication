export default function flashMessagesReducer(state=[], action ={}){
     switch(action.type){
          case 'SHOW_MESSAGE':
          return [
               ...state,
               action.message
          ];

          case 'REMOVE_MESSAGE':
          // remove all flash messages
          return state.filter(message => !message)

       default: return state;
     }
}
