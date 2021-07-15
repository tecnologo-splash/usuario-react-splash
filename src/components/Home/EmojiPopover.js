import { Picker } from "emoji-mart";
import Popover from "@material-ui/core/Popover";
import "emoji-mart/css/emoji-mart.css";

export function EmojiPopover({anchorEl,setAnchorEl,seTexto,texto}){
return(

    <Popover
    open={ Boolean(anchorEl)}
    anchorEl={anchorEl}
    onClose={()=> setAnchorEl(null)}
    disableScrollLock 
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    keepMounted
  >
    <Picker
      set="apple"
      onSelect={emoji => seTexto(texto + emoji.native)}
    />
        </Popover>

)

}