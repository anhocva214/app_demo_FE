import { createStore } from 'redux';
import { toast } from 'react-toastify';

const allState = {
    message: "connect success !",
    check_status_menu: false
};

const reducerAll = (state = allState, action) => {
    switch (action.type) {
        case 'CHECK_CONNECT':
            console.log("connect success !");
            return state

        case 'NOTIFICATION':
            switch (action.type_notifi) {
                case 'success':
                    return toast.success(action.title_notifi,
                        {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );
                case 'info':
                    return toast.info(action.title_notifi,
                        {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );

                case 'warning':
                    return toast.warning(action.title_notifi,
                        {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );

                case 'danger':
                    return toast.error(action.title_notifi,
                        {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );

                default:
                    break;
            };
            return state
        
        case 'CHANGE_STATUS_MENU':
            return {...state, check_status_menu: action.status}
        
        default:
            return state
    }
}

const store = createStore(reducerAll);

export default store;