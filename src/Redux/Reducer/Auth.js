initialstate = {
  isFetching: false,
  UserDetails:[],
  StainDetails:[]
};
export default (state = initialstate, action) => {
  switch (action.type) {
    
    case 'User_Login_Request':
      return {...state, isFetching: true};
    case 'User_Login_Success':
      return {...state, isFetching: false, UserDetails: action.payload};
    case 'User_Login_Error':
      return {...state, isFetching: false};

    case 'User_Stain_Request':
    return {...state, isFetching: true};
    case 'User_Stain_Success':
      return {...state, isFetching: false, StainDetails: action.payload};
    case 'User_Stain_Error':
      return {...state, isFetching: false};
    default:
      return state;
  }
};
