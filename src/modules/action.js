import * as actions from './actionType'
import axios from "axios";
import { postUser } from "./utils/services";

export const onPostEmp = (val) => {
    return(dispatch) =>{
        axios.post(postUser, val).then((res) => {
            dispatch(
                ((data) => {
                  return {
                    type: actions.ON_POST_EMP,
                    payload: {
                      httpResponse: data,
                    },
                  };
                })(res.data)
              );
        }).catch((err) => {
            console.log(err)
        })
    }
} 


