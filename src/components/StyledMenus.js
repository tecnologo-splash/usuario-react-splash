import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

export const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",

    },
  })((props) => (
    <Menu
      elevation={0}
      
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ));
export const StyledMenuItem = withStyles(() => ({}))(MenuItem);