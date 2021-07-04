import Pusher from 'pusher-js';

let pusher=null;
export const conexionPusher=()=>{
    if(pusher===null){
        pusher = new Pusher('1f2a6fe63e0652eb4139', {
            cluster: 'us2'
          });
    }else{
        return pusher;
    }

}
