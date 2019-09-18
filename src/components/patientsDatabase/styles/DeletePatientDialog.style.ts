import { createStyles, Theme } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
	createStyles({
		deleteInputField: {
			paddingLeft: "165px",
			width: '104%'
		},
		formDeleteField: {
			width: '50%',
			justifyContent:'center'
		},
		cssOutlinedInput: {
			borderColor:`1px solid ${theme.palette.primary.grey} !important`,

		},
	});

export default styles;