

initialstate = {
  isFetching: false,
  LogoutDetails: [],
  UserDetails: [],
  StainDetails: [],
  RegisterDetails: [],
  VersionDetails: [],
  EditProfileDetails: [],
  ForgotPasswordDetails: [],
  ChangePassword: [],
  getEditDetails:'',
};
export default (state = initialstate, action) => {
  switch (action.type) {

    case 'User_Login_Request':
      return { ...state, isFetching: true };
    case 'User_Login_Success':
      return { ...state, isFetching: false, UserDetails: action.payload };
    case 'User_Login_Error':
      return { ...state, isFetching: false };

    case 'User_Stain_Request':
      return { ...state, isFetching: true };
    case 'User_Stain_Success':
      return { ...state, isFetching: false, StainDetails: action.payload };
    case 'User_Stain_Error':
      return { ...state, isFetching: false };

    case 'User_Register_Request':
      return { ...state, isFetching: true };
    case 'User_Register_Success':
      return { ...state, isFetching: false, RegisterDetails: action.payload };
    case 'User_Register_Error':
      return { ...state, isFetching: false };

    case 'User_Logout_Request':
      return { ...state, isFetching: true };
    case 'User_Logout_Success':
      return { ...state, isFetching: false, LogoutDetails: action.payload };
    case 'User_Logout_Error':
      return { ...state, isFetching: false };

    case 'User_Forgot_Password_Request':
      return { ...state, isFetching: true };
    case 'User_Forgot_Password_Success':
      return { ...state, isFetching: false, ForgotPasswordDetails: action.payload };
    case 'User_Forgot_Password_Error':
      return { ...state, isFetching: false };

    case 'User_Edit_Profile_Request':
      return { ...state, isFetching: true };
    case 'User_Edit_Profile_Success':
      return { ...state, isFetching: false, EditProfileDetails: action.payload };
    case 'User_Edit_Profile_Error':
      return { ...state, isFetching: false };

    case 'User_Get_Edit_Profile_Request':
      return { ...state, isFetching: true };
    case 'User_Get_Edit_Profile_Success':
      return { ...state, isFetching: false,getEditDetails: action.payload };
    case 'User_Get_Edit_Profile_Error':
      return { ...state, isFetching: false }

    case 'User_Change_Password_Request':
      return { ...state, isFetching: true };
    case 'User_Change_Password_Success':
      return { ...state, isFetching: false, ChangePassword: action.payload };
    case 'User_Change_Password_Error':
      return { ...state, isFetching: false };

    case 'User_Version_Request':
      return { ...state, isFetching: true };
    case 'User_Version_Success':
      return { ...state, isFetching: false, VersionDetails: action.payload };

    default:
      return state;
  }
};
